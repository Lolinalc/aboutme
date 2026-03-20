import React from 'react';
import { useTranslation } from 'react-i18next';
import { useReveal } from '../hooks';

function Step({ step, delay }) {
  const [ref, isVisible] = useReveal();
  return (
    <div ref={ref} className={`process-step reveal${isVisible ? ' visible' : ''}`} style={{ transitionDelay: `${delay}ms` }}>
      <div className="step-number">{step.num}</div>
      <div className="step-title">{step.title}</div>
      <p className="step-desc">{step.desc}</p>
    </div>
  );
}

export default function Process() {
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

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="process" id="proceso">
      <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
        <div>
          <div className="section-label">{t('process.label')}</div>
          <h2 className="section-title">{t('process.title')}</h2>
        </div>
        <p className="section-desc">
          {t('process.desc')}
        </p>
      </div>

      <div className="process-steps">
        {steps.map((s, i) => (
          <Step key={s.num} step={s} delay={i * 120} />
        ))}
      </div>

      <div ref={ctaRef} className={`process-cta reveal${ctaVisible ? ' visible' : ''}`}>
        <p className="process-cta-text">{t('process.cta_text')}</p>
        <button className="btn-primary" onClick={scrollToContact}>
          {t('process.cta_btn')}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
}
