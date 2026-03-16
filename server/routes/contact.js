const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

const DATA_FILE = path.join(__dirname, '..', 'contacts-data.json');

if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

const readData = () => JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
const writeData = (data) => fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));

// POST /api/contact - Submit contact form
router.post('/', (req, res) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nombre, email y mensaje son requeridos' });
    }

    const newContact = {
      id: uuidv4(),
      name,
      email,
      phone: phone || '',
      service: service || '',
      message,
      createdAt: new Date().toISOString(),
      read: false
    };

    const data = readData();
    data.unshift(newContact);
    writeData(data);

    res.status(201).json({ success: true, message: '¡Mensaje recibido! Te contactaremos pronto.' });
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar el mensaje' });
  }
});

// GET /api/contact - Get all contacts (admin)
router.get('/', (req, res) => {
  try {
    const data = readData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los mensajes' });
  }
});

module.exports = router;
