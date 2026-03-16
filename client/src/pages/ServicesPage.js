import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useReveal } from '../hooks';
import { servicesData, CALENDAR_URL } from '../data/services';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function ServiceCard({ service, delay }) {
  const [ref, isVisible] = useReveal();
  const navigate = useNavigate();

  return (
    <div
      ref={ref}
      className={`service-card service-card-clickable reveal${isVisible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
      onClick={() => navigate(`/servicios/${service.id}`)}
    >
      <div className="service-number">{service.number}</div>
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.desc}</p>

      <ul className="service-features" style={{ marginBottom: 'auto' }}>
        {service.features.map((f, i) => <li key={i}>{f}</li>)}
      </ul>

      {/* Footer de la card: ver detalle */}
      <div className="service-card-footer">
        <Link
          to={`/servicios/${service.id}`}
          className="service-link"
          onClick={(e) => e.stopPropagation()}
        >
          Ver detalle <ArrowIcon />
        </Link>
        <Link
          to={`/portfolio/${service.portfolioCategory}`}
          className="service-link"
          style={{ color: 'var(--color-text-secondary)' }}
          onClick={(e) => e.stopPropagation()}
        >
          Portafolio <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const [headerRef, headerVisible] = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page" id="servicios">
      <div className="portfolio-hero">
        <div className="section-label">Lo que hago</div>
        <h1 className="section-title" style={{ maxWidth: 700, margin: '0 auto' }}>
          Soluciones digitales que impulsan resultados reales.
        </h1>
        <p className="section-desc" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
          Haz clic en cualquier servicio para ver todos los detalles, qué incluye y ejemplos reales del portafolio.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a href={CALENDAR_URL} className="btn-primary" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex' }}>
            Agendar una cita →
          </a>
        </div>
      </div>

      <div
        ref={headerRef}
        className={`services-grid reveal${headerVisible ? ' visible' : ''}`}
        style={{ marginTop: '1rem' }}
      >
        {servicesData.map((s, i) => (
          <ServiceCard key={s.id} service={s} delay={i * 120} />
        ))}
      </div>

      <div className="project-detail-cta" style={{ marginTop: '3rem' }}>
        <p>¿No sabes qué servicio necesitas? Platiquemos y te ayudo a encontrarlo.</p>
        <a href={CALENDAR_URL} className="btn-primary" target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex' }}>
          Agendar consulta gratuita →
        </a>
      </div>
    </div>
  );
}
