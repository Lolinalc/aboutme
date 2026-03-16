import React, { useEffect } from 'react';
import { useReveal } from '../hooks';

const CALENDAR_URL = 'https://calendar.app.google/tc8tGgGg2iRSBWNh8';

const steps = [
  {
    number: '01',
    title: 'Agenda tu cita',
    desc: 'Elige el día y la hora que mejor se acomode a tu agenda a través de mi calendario en línea.',
  },
  {
    number: '02',
    title: 'Cuéntame tu proyecto',
    desc: 'En una llamada de 30 a 45 minutos me platicas sobre tu negocio, tus metas y lo que quieres lograr con tu presencia digital.',
  },
  {
    number: '03',
    title: 'Recibe tu cotización',
    desc: 'Con base en lo que conversamos, te preparo una propuesta personalizada con los servicios que realmente necesitas y su costo.',
  },
];

const faqs = [
  {
    q: '¿Cuánto dura la primera cita?',
    a: 'Entre 30 y 45 minutos. El tiempo suficiente para conocernos, entender tu proyecto y resolver tus dudas sin presiones.',
  },
  {
    q: '¿Tiene algún costo?',
    a: 'No. La primera consulta es completamente gratuita y sin compromisos. Mi objetivo es entender si puedo ayudarte antes de hablar de números.',
  },
  {
    q: '¿Cómo es la llamada?',
    a: 'Por videollamada o por teléfono, como prefieras. Una vez que agendes, recibirás un correo con todos los detalles.',
  },
  {
    q: '¿Qué pasa después de la cita?',
    a: 'Te envío una cotización detallada con los servicios recomendados para tu proyecto. Sin presiones para contratar.',
  },
];

export default function ContactPage() {
  const [headerRef, headerVisible] = useReveal();
  const [stepsRef, stepsVisible] = useReveal();
  const [faqRef, faqVisible] = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page" id="contacto">
      {/* Hero */}
      <div className="portfolio-hero">
        <div className="section-label">Hablemos</div>
        <h1 className="section-title" style={{ maxWidth: 680, margin: '0 auto' }}>
          La primera cita es gratuita.
        </h1>
        <p className="section-desc" style={{ maxWidth: 540, margin: '1rem auto 0' }}>
          Agenda una llamada de 30 a 45 minutos para contarme sobre tu proyecto.
          Sin compromisos — solo una conversación para ver cómo puedo ayudarte.
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
          Agendar mi cita gratuita
        </a>
        <p className="contact-cta-note">
          Sin compromisos · 30–45 min · 100% gratis
        </p>
      </div>

      {/* Preguntas frecuentes */}
      <div
        ref={faqRef}
        className={`contact-faq reveal${faqVisible ? ' visible' : ''}`}
      >
        <div className="section-label" style={{ marginBottom: '0.5rem' }}>Preguntas frecuentes</div>
        <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '2.5rem' }}>
          Todo lo que necesitas saber
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
