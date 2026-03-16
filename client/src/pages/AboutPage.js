import React, { useEffect } from "react";
import { useReveal } from "../hooks";
import profileImg from "../assets/profile2.webp";
import cvFile from "../assets/Lolina_Lopez_CV.pdf";
import Experience from "../components/Experience";
import Education from "../components/Education";

const CALENDAR_URL = "https://calendar.app.google/tc8tGgGg2iRSBWNh8";

const techStack = [
  { label: "HTML", icon: "🌐" },
  { label: "CSS", icon: "🎨" },
  { label: "JavaScript", icon: "⚡" },
  { label: "React", icon: "⚛️" },
  { label: "Node.js", icon: "🟢" },
  { label: "Meta Ads", icon: "📣" },
  { label: "Email Mkt", icon: "✉️" },
  { label: "SEO", icon: "📊" },
];

const features = [
  {
    icon: "🎯",
    title: "Enfoque en Resultados",
    desc: "Cada proyecto está orientado a métricas reales: más ventas, más clientes, más visibilidad.",
  },
  {
    icon: "🤝",
    title: "Atención Personalizada",
    desc: "Trabajo de cerca contigo para entender tu negocio y crear soluciones a tu medida.",
  },
  {
    icon: "⚡",
    title: "Todo en Uno",
    desc: "Web + Marketing bajo un mismo techo. Sin coordinar múltiples proveedores.",
  },
  {
    icon: "🌮",
    title: "100% Local",
    desc: "Basada en Mérida, Yucatán. Conozco el mercado local y sus oportunidades.",
  },
];

export default function AboutPage() {
  const [topLeftRef, topLeftVisible] = useReveal();
  const [topRightRef, topRightVisible] = useReveal();
  const [bottomRef, bottomVisible] = useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="portfolio-page" id="sobre-mi">
      {/* ── Hero de página ───────────────────────────────── */}
      <div className="portfolio-hero">
        <div className="section-label">Sobre mí</div>
        <h1
          className="section-title"
          style={{ maxWidth: 700, margin: "0 auto" }}
        >
          Marketing + Código
        </h1>
        <p
          className="section-desc"
          style={{ maxWidth: 520, margin: "1rem auto 0" }}
        >
          La combinación que tu negocio necesita.
        </p>
      </div>

      {/* ── Grid bio + imagen ────────────────────────────── */}
      <div className="about-page-grid">
        {/* Columna izquierda: bio */}
        <div
          ref={topLeftRef}
          className={`about-page-left reveal${topLeftVisible ? " visible" : ""}`}
        >
          <p className="about-page-bio">
            {/* ── EDITA AQUÍ TU BIOGRAFÍA ── */}
            Hola, soy Lolina López, desarrolladora Full Stack con más de 11 años
            de experiencia en marketing digital. Combino mis conocimientos
            técnicos en frontend y backend con una sólida base en estrategia de
            negocios, lo que me permite crear productos digitales que no solo
            funcionan bien, sino que están pensados para vender, posicionarse y
            crecer.
          </p>
          <p className="about-page-bio" style={{ marginTop: "1.5rem" }}>
            Trabajo principalmente con startups, emprendedores y pequeñas
            empresas que quieren dar el siguiente paso en su presencia digital.
            Si tienes un proyecto en mente, me encantaría escucharte.
          </p>

          <div className="about-highlight" style={{ marginTop: "2rem" }}>
            "Entiendo tanto el código como la estrategia. Cada pixel tiene un
            propósito, cada campaña tiene un objetivo medible."
          </div>

          {/* Botones */}
          <div className="about-page-actions">
            <a
              href={cvFile}
              className="btn-secondary"
              download="Lolina_Lopez_CV.pdf"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
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
              Descargar CV
            </a>
            <a
              href={CALENDAR_URL}
              className="btn-primary"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
              }}
            >
              Agenda una reunión
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

        {/* Columna derecha: solo imagen */}
        <div
          ref={topRightRef}
          className={`reveal${topRightVisible ? " visible" : ""}`}
        >
          <div className="about-page-image">
            <img
              src={profileImg}
              alt="Lolina López"
              className="about-profile-img"
            />
          </div>
        </div>
      </div>

      {/* ── Stats + Tech Stack ───────────────────────────── */}
      <div className="about-stats-tech-row">
        {/* Stats */}
        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">
              11<span>+</span>
            </div>
            <div className="stat-label">Años de experiencia en marketing</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2x</div>
            <div className="stat-label">Ventas duplicadas para clientes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              100<span>%</span>
            </div>
            <div className="stat-label">Proyectos a medida</div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="about-page-tech">
          <div className="about-page-tech-label">
            Tecnologías y herramientas
          </div>
          <div className="about-tech-grid">
            {techStack.map((tech) => (
              <div key={tech.label} className="about-page-tech-item">
                <span>{tech.icon}</span>
                {tech.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Por qué elegirme ─────────────────────────────── */}
      <div style={{ marginTop: "5rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-label">Por qué elegirme</div>
          <h2
            className="section-title"
            style={{ maxWidth: 550, margin: "0.5rem auto 0" }}
          >
            Lo que me diferencia
          </h2>
        </div>
        <div
          ref={bottomRef}
          className={`services-grid reveal${bottomVisible ? " visible" : ""}`}
        >
          {features.map((f, i) => (
            <div className="service-card" key={i} style={{ cursor: "default" }}>
              <div className="service-icon" style={{ fontSize: "1.5rem" }}>
                {f.icon}
              </div>
              <h3 className="service-title" style={{ fontSize: "1.2rem" }}>
                {f.title}
              </h3>
              <p className="service-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Experiencia + Educación ──────────────────────── */}
      <div className="about-exp-edu-row">
        <Experience />
        <Education />
      </div>

      {/* ── CTA final ─────────────────────────────────────── */}
      <div className="project-detail-cta" style={{ marginTop: "5rem" }}>
        <p>¿Tienes un proyecto en mente? Me encantaría escucharte.</p>
        <a
          href={CALENDAR_URL}
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
          style={{ display: "inline-flex" }}
        >
          Agendar una reunión →
        </a>
      </div>
    </div>
  );
}
