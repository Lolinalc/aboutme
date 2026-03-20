import React from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks";
import profileImg from "../assets/profile2.webp";
import cvFile from "../assets/Lolina_Lopez_CV.pdf";

const CALENDAR_URL = "https://calendar.app.google/tc8tGgGg2iRSBWNh8";

const techStack = [
  { label: "HTML", icon: "🌐" },
  { label: "CSS", icon: "🎨" },
  { label: "JavaScript", icon: "⚡" },
  { label: "React", icon: "⚛️" },
  { label: "Node.js", icon: "🟢" },
  { label: "Meta Ads", icon: "📣" },
  { label: "Google Ads", icon: "🔍" },
  { label: "Email Mkt", icon: "✉️" },
  { label: "SEO", icon: "📊" },
  { label: "Figma", icon: "✏️" },
];

export default function About() {
  const { t } = useTranslation();

  const features = [
    {
      icon: "🎯",
      title: t('about.diff1_title'),
      desc: t('about.diff1_desc'),
    },
    {
      icon: "🤝",
      title: t('about.diff2_title'),
      desc: t('about.diff2_desc'),
    },
    {
      icon: "⚡",
      title: t('about.diff3_title'),
      desc: t('about.diff3_desc'),
    },
    {
      icon: "🌮",
      title: t('about.diff4_title'),
      desc: t('about.diff4_desc'),
    },
  ];
  const [topLeftRef, topLeftVisible] = useReveal();
  const [topRightRef, topRightVisible] = useReveal();
  const [bottomRef, bottomVisible] = useReveal();

  return (
    <section className="about" id="sobre-mi">
      {/* ── Fila principal: bio + imagen ─────────────────────── */}
      <div className="about-grid">
        {/* Columna izquierda: bio */}
        <div
          ref={topLeftRef}
          className={`reveal${topLeftVisible ? " visible" : ""}`}
        >
          <div className="section-label">{t('about.label')}</div>
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="about-text">
            {t('about.bio1')}
            <br />
            <br />
            {t('about.bio2')}
          </p>
          <div className="about-highlight">
            "{t('about.quote')}"
          </div>

          {/* Botones */}
          <div className="about-actions">
            <a
              href={cvFile}
              className="btn-secondary about-cv-btn"
              download="Lolina_Lopez_CV.pdf"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              {t('about.cv')}
            </a>
            <a
              href={CALENDAR_URL}
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              {t('about.meeting')}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </a>
          </div>
        </div>

        {/* Columna derecha: imagen + tech stack */}
        <div
          ref={topRightRef}
          className={`reveal${topRightVisible ? " visible" : ""}`}
        >
          {/* Foto de perfil */}
          <div className="about-image-container">
            <img
              src={profileImg}
              alt="Lolina López"
              className="about-profile-img"
            />
          </div>

          {/* Tech Stack */}
          <div className="about-tech">
            <div className="about-tech-label">{t('about.tech_label')}</div>
            <div className="about-tech-grid">
              {techStack.map((tech) => (
                <div key={tech.label} className="about-tech-item">
                  <span>{tech.icon}</span>
                  {tech.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Fila de características ──────────────────────────── */}
      <div
        ref={bottomRef}
        className={`about-features reveal${bottomVisible ? " visible" : ""}`}
        style={{ marginTop: "4rem" }}
      >
        {features.map((f, i) => (
          <div className="about-feature" key={i}>
            <div className="about-feature-icon">{f.icon}</div>
            <div className="about-feature-title">{f.title}</div>
            <p className="about-feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
