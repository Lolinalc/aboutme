import React from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks";

const CALENDAR_URL = "https://calendar.app.google/tc8tGgGg2iRSBWNh8";

export default function Contact() {
  const { t } = useTranslation();
  const [ref, visible] = useReveal();

  const steps = [
    {
      number: "01",
      title: t('contact.step1_title'),
      desc: t('contact.step1_desc'),
    },
    {
      number: "02",
      title: t('contact.step2_title'),
      desc: t('contact.step2_desc'),
    },
    {
      number: "03",
      title: t('contact.step3_title'),
      desc: t('contact.step3_desc'),
    },
  ];

  return (
    <section className="contact" id="contacto">
      <div className="contact-centered" ref={ref}>
        {/* Encabezado */}
        <div className={`contact-header reveal${visible ? " visible" : ""}`}>
          <div className="section-label">{t('contact.label')}</div>
          <h2 className="section-title">
            {t('contact.title_home')}
          </h2>
          <p className="contact-subtitle" dangerouslySetInnerHTML={{ __html: t('contact.subtitle_home') }} />
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
            {t('contact.cta_btn')}
          </a>
          <p className="contact-cta-note">
            {t('contact.cta_note')}
          </p>
        </div>
      </div>
    </section>
  );
}
