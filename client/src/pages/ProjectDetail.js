import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { placeholderProjects, categoryLabels } from '../data/projects';

const API_URL = process.env.REACT_APP_API_URL || '';

// Gradientes placeholder por categoría
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
      <span
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'rgba(255,252,247,0.85)',
          textAlign: 'center',
          lineHeight: 1.3,
        }}
      >
        {title}
      </span>
    </div>
  );
}

// Slot de imagen en la galería
// isLocal=true cuando la imagen viene de un import de webpack (no del API)
function ImageSlot({ src, alt, isLocal }) {
  if (src) {
    const imgSrc = isLocal ? src : (src.startsWith('http') ? src : `${API_URL}${src}`);
    return (
      <div className="project-gallery-slot">
        <img src={imgSrc} alt={alt} />
      </div>
    );
  }
  return (
    <div className="project-gallery-slot project-gallery-empty">
      <span>📷</span>
      <p>Agrega una imagen</p>
    </div>
  );
}

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Buscamos en el array de datos; en el futuro puedes reemplazar por fetch
  const project = placeholderProjects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="project-detail-page">
        <div style={{ textAlign: 'center', padding: '8rem 2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1rem' }}>
            Proyecto no encontrado
          </h2>
          <Link to="/portfolio" className="btn-primary" style={{ display: 'inline-flex' }}>
            ← Volver al portafolio
          </Link>
        </div>
      </div>
    );
  }

  // Usamos las imágenes del proyecto; si no hay, mostramos 3 slots vacíos
  const galleryImages = project.images && project.images.length > 0
    ? project.images
    : [null, null, null];

  return (
    <div className="project-detail-page">
      {/* ── Navegación de regreso ── */}
      <div className="project-detail-nav">
        <button className="project-back-btn" onClick={() => navigate(-1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Volver al portafolio
        </button>
      </div>

      {/* ── Hero del proyecto ── */}
      <div className="project-detail-hero">
        <div className="project-detail-hero-image">
          {project.image ? (
            <img
              src={project.placeholder ? project.image : `${API_URL}${project.image}`}
              alt={project.title}
            />
          ) : (
            <PlaceholderImage category={project.category} title={project.title} />
          )}
        </div>
      </div>

      {/* ── Contenido principal ── */}
      <div className="project-detail-content">
        {/* Columna de información */}
        <div className="project-detail-body">
          <div className="section-label">
            {categoryLabels[project.category] || project.category}
          </div>
          <h1 className="project-detail-title">{project.title}</h1>

          {project.client && (
            <p className="project-detail-meta">
              <span>Cliente</span>
              <strong>{project.client}</strong>
            </p>
          )}
          {project.date && (
            <p className="project-detail-meta">
              <span>📅 Fecha</span>
              <strong>{project.date}</strong>
            </p>
          )}
          {project.location && (
            <p className="project-detail-meta">
              <span>📍 Ubicación</span>
              <strong>{project.location}</strong>
            </p>
          )}

          <p className="project-detail-desc">{project.description}</p>

          {/* Campañas y resultados */}
          {project.campaigns && project.campaigns.length > 0 && (
            <div className="project-campaigns">
              <h3 className="project-campaigns-title">Campañas y Resultados</h3>
              {project.campaigns.map((camp, i) => (
                <div key={i} className="project-campaign-item">
                  <div className="project-campaign-header">
                    <strong>{camp.name}</strong>
                    <span className="project-campaign-duration">{camp.duration}</span>
                  </div>
                  <p className="project-campaign-result">✓ {camp.result}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="portfolio-tags" style={{ marginTop: '1.5rem' }}>
              {project.tags.map((tag, i) => (
                <span key={i} className="portfolio-tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Botones de acción */}
          <div className="project-detail-actions">
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex' }}>
                Ver sitio en vivo →
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex', background: 'var(--color-text-dark)' }}
              >
                Ver en GitHub →
              </a>
            )}
          </div>

          {/* Redes sociales */}
          {project.links && (
            <div className="project-social-links">
              {project.links.facebook && (
                <a href={project.links.facebook} target="_blank" rel="noreferrer" className="project-social-link">
                  Facebook
                </a>
              )}
              {project.links.instagram && (
                <a href={project.links.instagram} target="_blank" rel="noreferrer" className="project-social-link">
                  Instagram
                </a>
              )}
              {project.links.tiktok && (
                <a href={project.links.tiktok} target="_blank" rel="noreferrer" className="project-social-link">
                  TikTok
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Galería de imágenes (oculta temporalmente) ── */}
      {/* <div className="project-gallery-section">...</div> */}

      {/* ── CTA final ── */}
      <div className="project-detail-cta">
        <p>¿Te gustó este trabajo? Podemos hacer algo increíble juntos.</p>
        <Link to="/portfolio" className="btn-secondary" style={{ display: 'inline-flex' }}>
          ← Ver más proyectos
        </Link>
        <a
          href="https://calendar.app.google/tc8tGgGg2iRSBWNh8"
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'inline-flex' }}
        >
          Agendar una cita →
        </a>
      </div>
    </div>
  );
}
