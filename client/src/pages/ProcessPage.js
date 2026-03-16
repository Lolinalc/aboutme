import React, { useEffect } from 'react';
import { useReveal } from '../hooks';

const CALENDAR_URL = 'https://calendar.app.google/tc8tGgGg2iRSBWNh8';

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
  const [headerRef, headerVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page" id="proceso">
      {/* Hero de página */}
      <div className="portfolio-hero">
        <div className="section-label">Cómo trabajamos</div>
        <h1 className="section-title" style={{ maxWidth: 700, margin: '0 auto' }}>
          Un proceso claro, sin sorpresas.
        </h1>
        <p className="section-desc" style={{ maxWidth: 520, margin: '1rem auto 0' }}>
          Cada proyecto sigue una metodología probada para asegurar resultados predecibles y entregas a tiempo.
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
        <div className="section-label" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Preguntas frecuentes</div>
        <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 3rem', maxWidth: 550 }}>
          ¿Cómo funciona trabajar conmigo?
        </h2>
        <div className="process-faq-grid">
          {[
            {
              q: '¿Cuánto tiempo tarda un proyecto?',
              a: 'Depende del alcance. Una landing page puede estar lista en 1–2 semanas; un sitio completo, en 3–6 semanas. Lo definimos en la propuesta.',
            },
            {
              q: '¿Cómo me mantienes informada/o?',
              a: 'Trabajamos con revisiones por etapas. En cada fase recibes avances para aprobar antes de continuar. Sin código entregado de golpe.',
            },
            {
              q: '¿Qué necesito para empezar?',
              a: 'Solo platicar. No necesitas tener todo claro. En la reunión inicial ordenamos las ideas y definimos los pasos juntos.',
            },
            {
              q: '¿Qué pasa después de entregar el proyecto?',
              a: 'Doy soporte post-lanzamiento y puedo continuar con mantenimiento o campañas según tu plan. No desaparezco después de entregar.',
            },
          ].map((item, i) => (
            <div key={i} className="process-faq-item">
              <h4 className="process-faq-q">{item.q}</h4>
              <p className="process-faq-a">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA final */}
      <div ref={ctaRef} className={`project-detail-cta reveal${ctaVisible ? ' visible' : ''}`}>
        <p>¿Listo para empezar? El primer paso es una conversación.</p>
        <a
          href={CALENDAR_URL}
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'inline-flex' }}
        >
          Agendar reunión inicial →
        </a>
      </div>
    </div>
  );
}
