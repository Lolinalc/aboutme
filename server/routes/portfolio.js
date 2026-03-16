const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const router = express.Router();

// JSON file to persist portfolio data
const DATA_FILE = path.join(__dirname, '..', 'portfolio-data.json');

// Initialize data file if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '..', 'uploads', 'portfolio');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowed = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Solo se permiten imágenes (JPEG, PNG, WebP, GIF)'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB max
});

// Helper to read/write data
const readData = () => JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
const writeData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

// GET /api/portfolio - Get all portfolio items
router.get('/', (req, res) => {
  try {
    const data = readData();
    // Optional filter by category
    const { category } = req.query;
    const filtered = category && category !== 'todos'
      ? data.filter(item => item.category === category)
      : data;
    res.json(filtered);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el portfolio' });
  }
});

// GET /api/portfolio/:id - Get single portfolio item
router.get('/:id', (req, res) => {
  try {
    const data = readData();
    const item = data.find(p => p.id === req.params.id);
    if (!item) return res.status(404).json({ error: 'Proyecto no encontrado' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el proyecto' });
  }
});

// POST /api/portfolio - Create portfolio item with image
router.post('/', upload.single('image'), (req, res) => {
  try {
    const { title, description, category, client, url, tags } = req.body;

    if (!title || !req.file) {
      return res.status(400).json({ error: 'Título e imagen son requeridos' });
    }

    const newItem = {
      id: uuidv4(),
      title,
      description: description || '',
      category: category || 'web',
      client: client || '',
      url: url || '',
      tags: tags ? tags.split(',').map(t => t.trim()) : [],
      image: `/uploads/portfolio/${req.file.filename}`,
      createdAt: new Date().toISOString()
    };

    const data = readData();
    data.unshift(newItem);
    writeData(data);

    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el proyecto' });
  }
});

// PUT /api/portfolio/:id - Update portfolio item
router.put('/:id', upload.single('image'), (req, res) => {
  try {
    const data = readData();
    const index = data.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Proyecto no encontrado' });

    const { title, description, category, client, url, tags } = req.body;

    if (title) data[index].title = title;
    if (description !== undefined) data[index].description = description;
    if (category) data[index].category = category;
    if (client !== undefined) data[index].client = client;
    if (url !== undefined) data[index].url = url;
    if (tags) data[index].tags = tags.split(',').map(t => t.trim());
    if (req.file) {
      // Delete old image
      const oldPath = path.join(__dirname, '..', data[index].image);
      if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
      data[index].image = `/uploads/portfolio/${req.file.filename}`;
    }

    writeData(data);
    res.json(data[index]);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el proyecto' });
  }
});

// DELETE /api/portfolio/:id - Delete portfolio item
router.delete('/:id', (req, res) => {
  try {
    const data = readData();
    const index = data.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Proyecto no encontrado' });

    // Delete image file
    const imgPath = path.join(__dirname, '..', data[index].image);
    if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);

    data.splice(index, 1);
    writeData(data);
    res.json({ message: 'Proyecto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el proyecto' });
  }
});

module.exports = router;
