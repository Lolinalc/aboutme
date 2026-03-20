import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { placeholderProjects } from '../data/projects';

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
function ImageSlot({ src, alt }) {
  if (src) {
    return (
      <div className="project-gallery-slot">
        <img src={src} alt={alt} />
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
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
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
            {t('portfolio.not_found')}
          </h2>
          <Link to="/portfolio" className="btn-primary" style={{ display: 'inline-flex' }}>
            {t('portfolio.back_link')}
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
          {t('portfolio.back')}
        </button>
      </div>

      {/* ── Hero del proyecto ── */}
      <div className="project-detail-hero">
        <div className="project-detail-hero-image">
          {project.image ? (
            <img
              src={project.image}
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
            {t(`portfolio.cat_${project.category}`)}
          </div>
          <h1 className="project-detail-title">{project.title}</h1>

          {project.client && (
            <p className="project-detail-meta">
              <span>{t('portfolio.meta_client')}</span>
              <strong>{project.client}</strong>
            </p>
          )}
          {project.date && (
            <p className="project-detail-meta">
              <span>{t('portfolio.meta_date')}</span>
              <strong>{project.date && typeof project.date === 'object' ? project.date[lang] : project.date}</strong>
            </p>
          )}
          {project.location && (
            <p className="project-detail-meta">
              <span>{t('portfolio.meta_location')}</span>
              <strong>{project.location}</strong>
            </p>
          )}

          <p className="project-detail-desc">{project.description[lang]}</p>

          {/* Campañas y resultados */}
          {project.campaigns && project.campaigns.length > 0 && (
            <div className="project-campaigns">
              <h3 className="project-campaigns-title">{t('portfolio.campaigns_title')}</h3>
              {project.campaigns.map((camp, i) => (
                <div key={i} className="project-campaign-item">
                  <div className="project-campaign-header">
                    <strong>{camp.name[lang]}</strong>
                    <span className="project-campaign-duration">{camp.duration[lang]}</span>
                  </div>
                  <p className="project-campaign-result">✓ {camp.result[lang]}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags[lang] && project.tags[lang].length > 0 && (
            <div className="portfolio-tags" style={{ marginTop: '1.5rem' }}>
              {project.tags[lang].map((tag, i) => (
                <span key={i} className="portfolio-tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Botones de acción */}
          <div className="project-detail-actions">
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: 'inline-flex' }}>
                {t('portfolio.live_site')}
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
                {t('portfolio.view_github')}
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
        <p>{t('portfolio.final_cta')}</p>
        <Link to="/portfolio" className="btn-secondary" style={{ display: 'inline-flex' }}>
          {t('portfolio.more_projects')}
        </Link>
        <a
          href="https://calendar.app.google/tc8tGgGg2iRSBWNh8"
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'inline-flex' }}
        >
          {t('portfolio.book_cta')}
        </a>
      </div>
    </div>
  );
}
