import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks';

const CALENDAR_URL = 'https://calendar.app.google/tc8tGgGg2iRSBWNh8';

function StepCard({ step, delay }) {
  const [ref, isVisible] = useReveal();
  return (
    <div
      ref={ref}
      className={`process-page-step reveal${isVisible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="process-page-number">{step.num}</div>
      <h3 className="process-page-title">{step.title}</h3>
      <p className="process-page-desc">{step.desc}</p>
    </div>
  );
}

export default function ProcessPage() {
  const { t } = useTranslation();
  const [headerRef, headerVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  const steps = [
    {
      num: '01',
      title: t('process.step1_title'),
      desc: t('process.step1_desc'),
    },
    {
      num: '02',
      title: t('process.step2_title'),
      desc: t('process.step2_desc'),
    },
    {
      num: '03',
      title: t('process.step3_title'),
      desc: t('process.step3_desc'),
    },
    {
      num: '04',
      title: t('process.step4_title'),
      desc: t('process.step4_desc'),
    },
  ];

  const faqItems = [
    {
      q: t('process.faq1_q'),
      a: t('process.faq1_a'),
    },
    {
      q: t('process.faq2_q'),
      a: t('process.faq2_a'),
    },
    {
      q: t('process.faq3_q'),
      a: t('process.faq3_a'),
    },
    {
      q: t('process.faq4_q'),
      a: t('process.faq4_a'),
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page" id="proceso">
      {/* Hero de página */}
      <div className="portfolio-hero">
        <div className="section-label">{t('process.label')}</div>
        <h1 className="section-title" style={{ maxWidth: 700, margin: '0 auto' }}>
          {t('process.title')}
        </h1>
        <p className="section-desc" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
          {t('process.desc')}
        </p>
      </div>

      {/* Pasos */}
      <div
        ref={headerRef}
        className={`process-page-grid reveal${headerVisible ? ' visible' : ''}`}
      >
        {steps.map((s, i) => (
          <StepCard key={s.num} step={s} delay={i * 130} />
        ))}
      </div>

      {/* Bloque de preguntas frecuentes sobre el proceso */}
      <div className="process-page-faq">
        <div className="section-label" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>{t('process.faq_label')}</div>
        <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 3rem', maxWidth: 550 }}>
          {t('process.faq_title')}
        </h2>
        <div className="process-faq-grid">
          {faqItems.map((item, i) => (
            <div key={i} className="process-faq-item">
              <h4 className="process-faq-q">{item.q}</h4>
              <p className="process-faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div ref={ctaRef} className={`project-detail-cta reveal${ctaVisible ? ' visible' : ''}`}>
        <p>{t('process.final_cta_text')}</p>
        <a
          href={CALENDAR_URL}
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'inline-flex' }}
        >
          {t('process.final_cta_btn')}
        </a>
      </div>
    </div>
  );
}
