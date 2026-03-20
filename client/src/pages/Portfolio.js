import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { placeholderProjects, categoryLabels } from '../data/projects';

const categories = [
  { key: 'todos', label: 'Todos' },
  { key: 'web', label: 'Desarrollo Web' },
  { key: 'marketing', label: 'Marketing Digital' },
  { key: 'asesoria', label: 'Asesoría' },
];

function PlaceholderImage({ category, title }) {
  const gradients = {
    web: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
    marketing: 'linear-gradient(135deg, #111827 0%, #6366f1 100%)',
    asesoria: 'linear-gradient(135deg, #ec4899 0%, #818cf8 100%)',
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: gradients[category] || gradients.web,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <span style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.3rem',
        fontWeight: 700,
        color: 'rgba(255,252,247,0.85)',
        textAlign: 'center',
        lineHeight: 1.3,
      }}>
        {title}
      </span>
    </div>
  );
}

export default function Portfolio() {
  const { category: urlCategory } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(urlCategory || 'todos');
  const [projects] = useState(placeholderProjects);

  // Sync URL param with filter
  useEffect(() => {
    setActiveFilter(urlCategory || 'todos');
  }, [urlCategory]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFilter = (key) => {
    setActiveFilter(key);
    navigate(key === 'todos' ? '/portfolio' : `/portfolio/${key}`, { replace: true });
  };

  const handleProjectClick = (project) => {
    navigate(`/portfolio/proyecto/${project.id}`);
  };

  const filtered = activeFilter === 'todos'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      <div className="portfolio-hero">
        <div className="section-label">Nuestro Trabajo</div>
        <h1 className="section-title" style={{ maxWidth: 700, margin: '0 auto' }}>
          Proyectos que hablan por sí mismos.
        </h1>
        <p className="section-desc" style={{ maxWidth: 500, margin: '1rem auto 0' }}>
          Cada proyecto refleja mi filosofía: diseño con propósito, estrategia con resultados.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`filter-btn${activeFilter === cat.key ? ' active' : ''}`}
            onClick={() => handleFilter(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {filtered.length === 0 ? (
          <div className="portfolio-empty">
            <div className="portfolio-empty-icon">📂</div>
            <h3>Próximamente</h3>
            <p>Estamos preparando proyectos increíbles para esta categoría. ¡Vuelve pronto!</p>
          </div>
        ) : (
          filtered.map((project) => (
            <div
              key={project.id}
              className="portfolio-card"
              onClick={() => handleProjectClick(project)}
            >
              <div className="portfolio-card-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <PlaceholderImage category={project.category} title={project.title} />
                )}
                <div className="portfolio-card-overlay">
                  <span>Ver detalle →</span>
                </div>
              </div>
              <div className="portfolio-card-body">
                <div className="portfolio-card-category">
                  {categoryLabels[project.category] || project.category}
                </div>
                <h3 className="portfolio-card-title">{project.title}</h3>
                <p className="portfolio-card-desc">{project.description}</p>
                {project.tags && project.tags.length > 0 && (
                  <div className="portfolio-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="portfolio-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
