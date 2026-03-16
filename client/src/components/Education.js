import React from "react";
import { useReveal } from "../hooks";

const educationData = [
  {
    degree: "Desarrollo Web Full Stack",
    institution: "TripleTen",
    period: "2024 – 2025",
    type: "Certificación",
    icon: "💻",
  },
  {
    degree: "Maestría en Administración de Negocios",
    institution: "UNID",
    period: "2020 – 2022",
    type: "Maestría",
    icon: "🎓",
  },
  {
    degree: "Licenciatura en Comunicación",
    institution: "Universidad Modelo",
    period: "2011 – 2015",
    type: "Licenciatura",
    icon: "📡",
  },
];

const typeColors = {
  Certificación: { bg: "rgba(99,102,241,0.08)", color: "var(--color-primary)" },
  Maestría: { bg: "rgba(236,72,153,0.08)", color: "var(--color-secondary)" },
  Licenciatura: { bg: "rgba(245,158,11,0.1)", color: "#b45309" },
};

export default function Education() {
  const [ref, visible] = useReveal();

  return (
    <div ref={ref} className={`edu-section reveal${visible ? " visible" : ""}`}>
      <div className="section-label" style={{ marginBottom: "0.4rem" }}>
        Formación
      </div>
      <h2 className="section-title" style={{ marginBottom: "3rem" }}>
        Educación
      </h2>

      <div className="edu-grid">
        {educationData.map((item, i) => {
          const badge = typeColors[item.type] || typeColors["Certificación"];
          return (
            <article key={i} className="edu-card">
              <div className="edu-card__icon">{item.icon}</div>
              <div className="edu-card__body">
                <h3 className="edu-card__degree">{item.degree}</h3>
                <p className="edu-card__institution">{item.institution}</p>
                <p className="edu-card__period">{item.period}</p>
                <span
                  className="edu-card__badge"
                  style={{ background: badge.bg, color: badge.color }}
                >
                  {item.type}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
