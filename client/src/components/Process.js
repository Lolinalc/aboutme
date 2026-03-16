import React from 'react';
import { useReveal } from '../hooks';

const steps = [
  {
    num: '01',
    title: 'Reunión inicial',
    desc: 'Agendamos una reunión para entender tu negocio, objetivos y retos. Sin compromiso, con claridad.',
  },
  {
    num: '02',
    title: 'Propuesta de solución',
    desc: 'Preparo una propuesta clara con etapas, entregables y presupuesto. Todo por escrito, sin sorpresas.',
  },
  {
    num: '03',
    title: 'Ejecución',
    desc: 'Implementamos el plan con comunicación constante. Tú revisas y apruebas en cada etapa.',
  },
  {
    num: '04',
    title: 'Medición y ajustes',
    desc: 'Analizamos resultados y ajustamos la estrategia para maximizar el retorno de tu inversión.',
  },
];

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
  const [headerRef, headerVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="process" id="proceso">
      <div ref={headerRef} className={`section-header reveal${headerVisible ? ' visible' : ''}`}>
        <div>
          <div className="section-label">Cómo trabajamos</div>
          <h2 className="section-title">Un proceso claro, sin sorpresas.</h2>
        </div>
        <p className="section-desc">
          Cada proyecto sigue una metodología probada para asegurar resultados predecibles y entregas a tiempo.
        </p>
      </div>

      <div className="process-steps">
        {steps.map((s, i) => (
          <Step key={s.num} step={s} delay={i * 120} />
        ))}
      </div>

      <div ref={ctaRef} className={`process-cta reveal${ctaVisible ? ' visible' : ''}`}>
        <p className="process-cta-text">¿Listo para empezar? Da el primer paso hoy.</p>
        <button className="btn-primary" onClick={scrollToContact}>
          Quiero empezar
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>
      </div>
    </section>
  );
}
