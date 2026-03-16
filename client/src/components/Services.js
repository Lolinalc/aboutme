import React from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks';
import { servicesData, CALENDAR_URL } from '../data/services';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function ServiceCard({ service, delay, compact }) {
  const [ref, isVisible] = useReveal();

  return (
    <div
      ref={ref}
      className={`service-card reveal${isVisible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="service-number">{service.number}</div>
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-desc">{service.desc}</p>

      {/* Versión completa: solo en /servicios */}
      {!compact && (
        <>
          <p className="service-long-desc">{service.longDesc}</p>
          <ul className="service-features">
            {service.features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', marginTop: '0.5rem' }}>
            {service.primaryCta.type === 'calendar' ? (
              <a href={CALENDAR_URL} className="btn-primary" target="_blank" rel="noreferrer"
                style={{ fontSize: '0.85rem', padding: '0.75rem 1.5rem' }}>
                {service.primaryCta.label} <ArrowIcon />
              </a>
            ) : (
              <Link to={`/portfolio/${service.portfolioCategory}`} className="service-link">
                {service.primaryCta.label} <ArrowIcon />
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default function Services({ compact = false }) {
  const [ref, isVisible] = useReveal();

  return (
    <section className="services" id="servicios">
      <div ref={ref} className={`section-header reveal${isVisible ? ' visible' : ''}`}>
        <div>
          <div className="section-label">Lo que hago</div>
          <h2 className="section-title">Soluciones digitales que impulsan resultados reales.</h2>
        </div>
        <p className="section-desc">
          Cada proyecto está diseñado para conectar con tu audiencia y hacer crecer tu negocio de forma medible.
        </p>
      </div>
      <div className="services-grid">
        {servicesData.map((s, i) => (
          <ServiceCard key={s.id} service={s} delay={i * 120} compact={compact} />
        ))}
      </div>
    </section>
  );
}
