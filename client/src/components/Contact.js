import React from "react";
import { useReveal } from "../hooks";

const CALENDAR_URL = "https://calendar.app.google/tc8tGgGg2iRSBWNh8";

const steps = [
  {
    number: "01",
    title: "Agenda tu cita",
    desc: "Elige el día y la hora que mejor se acomode a tu agenda. El proceso es rápido y sencillo.",
  },
  {
    number: "02",
    title: "Cuéntame tu proyecto",
    desc: "En una llamada de 30 a 45 minutos me platicas tus necesidades, metas y lo que quieres lograr.",
  },
  {
    number: "03",
    title: "Recibe tu cotización",
    desc: "Con base en lo que conversamos, te preparo una propuesta personalizada con los servicios que realmente necesitas.",
  },
];

export default function Contact() {
  const [ref, visible] = useReveal();

  return (
    <section className="contact" id="contacto">
      <div className="contact-centered" ref={ref}>
        {/* Encabezado */}
        <div className={`contact-header reveal${visible ? " visible" : ""}`}>
          <div className="section-label">Contacto</div>
          <h2 className="section-title">
            ¿Lista para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="contact-subtitle">
            La primera cita es <strong>gratuita</strong>. Agendamos una llamada
            de 30 a 45 minutos para conocer tus necesidades y así poder
            prepararte una cotización a la medida de tu proyecto.
          </p>
        </div>

        {/* Pasos */}
        <div className={`contact-steps reveal${visible ? " visible" : ""}`}>
          {steps.map((s) => (
            <div className="contact-step" key={s.number}>
              <div className="contact-step-number">{s.number}</div>
              <div>
                <div className="contact-step-title">{s.title}</div>
                <p className="contact-step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`contact-cta-wrap reveal${visible ? " visible" : ""}`}>
          <a
            href={CALENDAR_URL}
            className="btn-primary contact-calendar-btn"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ flexShrink: 0 }}
            >
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
      </div>
    </section>
  );
}
