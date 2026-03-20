import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks';

const CALENDAR_URL = 'https://calendar.app.google/tc8tGgGg2iRSBWNh8';

export default function ContactPage() {
  const { t } = useTranslation();
  const [headerRef, headerVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [faqRef, faqVisible] = useReveal();

  const steps = [
    {
      number: '01',
      title: t('contact.step1_title'),
      desc: t('contact.step1_desc'),
    },
    {
      number: '02',
      title: t('contact.step2_title'),
      desc: t('contact.step2_desc'),
    },
    {
      number: '03',
      title: t('contact.step3_title'),
      desc: t('contact.step3_desc'),
    },
  ];

  const faqs = [
    {
      q: t('contact.faq1_q'),
      a: t('contact.faq1_a'),
    },
    {
      q: t('contact.faq2_q'),
      a: t('contact.faq2_a'),
    },
    {
      q: t('contact.faq3_q'),
      a: t('contact.faq3_a'),
    },
    {
      q: t('contact.faq4_q'),
      a: t('contact.faq4_a'),
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page" id="contacto">
      {/* Hero */}
      <div className="portfolio-hero">
        <div className="section-label">{t('contact.label')}</div>
        <h1 className="section-title" style={{ maxWidth: 680, margin: '0 auto' }}>
          {t('contact.title_page')}
        </h1>
        <p className="section-desc" style={{ maxWidth: 540, margin: '1rem auto 0' }}>
          {t('contact.desc_page')}
        </p>
      </div>

      {/* Cómo funciona */}
      <div
        ref={stepsRef}
        className={`contact-page-steps reveal${stepsVisible ? ' visible' : ''}`}
      >
        {steps.map((s) => (
          <div className="contact-page-step" key={s.number}>
            <div className="contact-step-number">{s.number}</div>
            <div className="contact-step-title">{s.title}</div>
            <p className="contact-step-desc">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA principal */}
      <div
        ref={headerRef}
        className={`contact-page-cta reveal${headerVisible ? ' visible' : ''}`}
      >
        <a
          href={CALENDAR_URL}
          className="btn-primary contact-calendar-btn"
          target="_blank"
          rel="noreferrer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {t('contact.cta_btn')}
        </a>
        <p className="contact-cta-note">
          {t('contact.cta_note')}
        </p>
      </div>

      {/* Preguntas frecuentes */}
      <div
        ref={faqRef}
        className={`contact-faq reveal${faqVisible ? ' visible' : ''}`}
      >
        <div className="section-label" style={{ marginBottom: '0.5rem' }}>{t('contact.faq_label')}</div>
        <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2.5rem' }}>
          {t('contact.faq_title')}
        </h2>
        <div className="contact-faq-grid">
          {faqs.map((item, i) => (
            <div className="contact-faq-item" key={i}>
              <div className="contact-faq-q">{item.q}</div>
              <p className="contact-faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
