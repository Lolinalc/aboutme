import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks';
import { servicesData, CALENDAR_URL } from '../data/services';

export default function ServiceDetail() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
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
          {t('services.not_found')}
        </h2>
        <Link to="/servicios" className="btn-primary" style={{ display: 'inline-flex' }}>
          {t('services.back')}
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
          {t('services.other_services')}
        </button>
      </div>

      {/* ── Hero del servicio ──────────────────────────────── */}
      <div className="service-detail-hero">
        <div className="service-detail-icon">{service.icon}</div>
        <div className="section-label">{service.number}</div>
        <h1 className="service-detail-title">{service.title[lang]}</h1>
        <p className="service-detail-subtitle">{service.desc[lang]}</p>
        <div className="service-detail-hero-actions">
          <a href={CALENDAR_URL} className="btn-primary" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex' }}>
            {service.calendarCta[lang]} →
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
          <div className="section-label">{t('services.about_label')}</div>
          <p className="service-detail-long-desc">{service.longDesc[lang]}</p>
        </div>

        {/* Qué incluye */}
        <div ref={includesRef} className={`reveal${includesVisible ? ' visible' : ''}`}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>{t('services.includes_label')}</div>
          <div className="service-includes-grid">
            {service.includes[lang].map((item, i) => (
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
        <div className="section-label" style={{ marginBottom: '0.75rem' }}>{t('services.ideal_label')}</div>
        <h2 className="section-title" style={{ marginBottom: '2rem', maxWidth: 500 }}>
          {t('services.ideal_title')}
        </h2>
        <ul className="service-ideal-list">
          {service.idealFor[lang].map((item, i) => (
            <li key={i} className="service-ideal-item">
              <span className="service-ideal-check">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <a href={CALENDAR_URL} className="btn-primary" target="_blank" rel="noreferrer"
          style={{ display: 'inline-flex', marginTop: '2.5rem' }}>
          {service.calendarCta[lang]} →
        </a>
      </div>

      {/* ── Portafolio de este servicio ───────────────────── */}
      <div ref={portfolioRef} className={`service-portfolio-section reveal${portfolioVisible ? ' visible' : ''}`}>
        <div className="service-portfolio-inner">
          <div style={{ flex: 1 }}>
            <div className="section-label">{t('services.portfolio_label')}</div>
            <h2 className="section-title" style={{ maxWidth: 420, marginTop: '0.5rem' }}>
              {t('services.portfolio_desc')}
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem', lineHeight: 1.7, maxWidth: 380 }}>
              {t('services.portfolio_detail')}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            <Link
              to={`/portfolio/${service.portfolioCategory}`}
              className="btn-primary"
              style={{ display: 'inline-flex' }}
            >
              {t('services.portfolio_link', { name: service.title })}
            </Link>
            <Link
              to="/portfolio"
              className="btn-secondary"
              style={{ display: 'inline-flex' }}
            >
              {t('services.view_all')}
            </Link>
          </div>
        </div>
      </div>

      {/* ── CTA final ─────────────────────────────────────── */}
      <div className="project-detail-cta">
        <p>{t('services.next_step')}</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href={CALENDAR_URL} className="btn-primary" target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex' }}>
            {service.calendarCta[lang]} →
          </a>
          <Link to="/servicios" className="btn-secondary" style={{ display: 'inline-flex' }}>
            {t('services.other_services')}
          </Link>
        </div>
      </div>

    </div>
  );
}
