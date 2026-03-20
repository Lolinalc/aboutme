import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CALENDAR_URL = "https://calendar.app.google/tc8tGgGg2iRSBWNh8";

export default function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="hero" id="inicio">
      <div className="hero-bg-shape" />
      <div className="hero-label">{t('hero.label')}</div>
      <h1 className="hero-title">
        {t('hero.title')}
      </h1>
      <p className="hero-subtitle">
        {t('hero.subtitle')}
      </p>

      <div className="hero-actions">
        <a
          href={CALENDAR_URL}
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          {t('hero.cta_calendar')}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
        <button
          className="btn-secondary"
          onClick={() => navigate("/servicios")}
        >
          {t('hero.cta_services')}
        </button>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        {t('hero.scroll')}
      </div>
    </section>
  );
}
