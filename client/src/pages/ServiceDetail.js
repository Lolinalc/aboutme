import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useReveal } from '../hooks';
import { servicesData, CALENDAR_URL } from '../data/services';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [bodyRef, bodyVisible] = useReveal();
  const [includesRef, includesVisible] = useReveal();
  const [idealRef, idealVisible] = useReveal();
  const [portfolioRef, portfolioVisible] = useReveal();

  const service = servicesData.find((s) => s.id === serviceId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="portfolio-page" style={{ textAlign: 'center', paddingTop: '10rem' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔍</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", marginBottom: '1.5rem' }}>
          Servicio no encontrado
        </h2>
        <Link to="/servicios" className="btn-primary" style={{ display: 'inline-flex' }}>
          ← Ver todos los servicios
        </Link>
      </div>
    );
  }

  return (
    <div className="portfolio-page">

      {/* ── Botón de regreso ───────────────────────────────── */}
      <div className="project-detail-nav">
        <button className="project-back-btn" onClick={() => navigate('/servicios')}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Ver todos los servicios
        </button>
      </div>

      {/* ── Hero del servicio ──────────────────────────────── */}
      <div className="service-detail-hero">
        <div className="service-detail-icon">{service.icon}</div>
        <div className="section-label">{service.number}</div>
        <h1 className="service-detail-title">{service.title}</h1>
        <p className="service-detail-subtitle">{service.desc}</p>
        <div className="service-detail-hero-actions">
          <a href={CALENDAR_URL} className="btn-primary" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex' }}>
            {service.calendarCta} →
          </a>
          <Link to={`/portfolio/${service.portfolioCategory}`}
            className="btn-secondary" style={{ display: 'inline-flex' }}>
            Ver portafolio
          </Link>
        </div>
      </div>

      {/* ── Descripción larga ──────────────────────────────── */}
      <div ref={bodyRef} className={`service-detail-body reveal${bodyVisible ? ' visible' : ''}`}>
        <div className="service-detail-desc-block">
          <div className="section-label">Sobre este servicio</div>
          <p className="service-detail-long-desc">{service.longDesc}</p>
        </div>

        {/* Qué incluye */}
        <div ref={includesRef} className={`reveal${includesVisible ? ' visible' : ''}`}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>Qué incluye</div>
          <div className="service-includes-grid">
            {service.includes.map((item, i) => (
              <div key={i} className="service-include-card">
                <div className="service-include-icon">{item.icon}</div>
                <div>
                  <div className="service-include-label">{item.label}</div>
                  <p className="service-include-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Ideal para ────────────────────────────────────── */}
      <div ref={idealRef} className={`service-ideal-section reveal${idealVisible ? ' visible' : ''}`}>
        <div className="section-label" style={{ marginBottom: '0.75rem' }}>Ideal para</div>
        <h2 className="section-title" style={{ marginBottom: '2rem', maxWidth: 500 }}>
          ¿Es este servicio para ti?
        </h2>
        <ul className="service-ideal-list">
          {service.idealFor.map((item, i) => (
            <li key={i} className="service-ideal-item">
              <span className="service-ideal-check">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <a href={CALENDAR_URL} className="btn-primary" target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', marginTop: '2.5rem' }}>
          {service.calendarCta} →
        </a>
      </div>

      {/* ── Portafolio de este servicio ───────────────────── */}
      <div ref={portfolioRef} className={`service-portfolio-section reveal${portfolioVisible ? ' visible' : ''}`}>
        <div className="service-portfolio-inner">
          <div style={{ flex: 1 }}>
            <div className="section-label">Ejemplos reales</div>
            <h2 className="section-title" style={{ maxWidth: 420, marginTop: '0.5rem' }}>
              Mira lo que he logrado para otros clientes.
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem', lineHeight: 1.7, maxWidth: 380 }}>
              Cada proyecto en mi portafolio es un caso real con objetivos, proceso y resultados concretos.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <Link
              to={`/portfolio/${service.portfolioCategory}`}
              className="btn-primary"
              style={{ display: 'inline-flex' }}
            >
              Ver portafolio de {service.title} →
            </Link>
            <Link
              to="/portfolio"
              className="btn-secondary"
              style={{ display: 'inline-flex' }}
            >
              Ver todo el portafolio
            </Link>
          </div>
        </div>
      </div>

      {/* ── CTA final ─────────────────────────────────────── */}
      <div className="project-detail-cta">
        <p>¿Listo para dar el siguiente paso?</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={CALENDAR_URL} className="btn-primary" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex' }}>
            {service.calendarCta} →
          </a>
          <Link to="/servicios" className="btn-secondary" style={{ display: 'inline-flex' }}>
            ← Ver otros servicios
          </Link>
        </div>
      </div>

    </div>
  );
}
