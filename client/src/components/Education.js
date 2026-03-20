import React from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks";

const educationData = [
  {
    degree: { es: "Desarrollo Web Full Stack", en: "Full Stack Web Development" },
    institution: "TripleTen",
    period: "2024 – 2025",
    typeKey: "certification",
    type: { es: "Certificación", en: "Certification" },
    icon: "💻",
  },
  {
    degree: { es: "Maestría en Administración de Negocios", en: "Master's in Business Administration" },
    institution: "UNID",
    period: "2020 – 2022",
    typeKey: "masters",
    type: { es: "Maestría", en: "Master's" },
    icon: "🎓",
  },
  {
    degree: { es: "Licenciatura en Comunicación", en: "Bachelor's in Communication" },
    institution: "Universidad Modelo",
    period: "2011 – 2015",
    typeKey: "bachelors",
    type: { es: "Licenciatura", en: "Bachelor's" },
    icon: "📡",
  },
];

const typeColors = {
  certification: { bg: "rgba(99,102,241,0.08)", color: "var(--color-primary)" },
  masters:       { bg: "rgba(236,72,153,0.08)", color: "var(--color-secondary)" },
  bachelors:     { bg: "rgba(245,158,11,0.1)",  color: "#b45309" },
};

export default function Education() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [ref, visible] = useReveal();

  return (
    <div ref={ref} className={`edu-section reveal${visible ? " visible" : ""}`}>
      <div className="section-label" style={{ marginBottom: "0.4rem" }}>
        {t('education.label')}
      </div>
      <h2 className="section-title" style={{ marginBottom: "3rem" }}>
        {t('education.title')}
      </h2>

      <div className="edu-grid">
        {educationData.map((item, i) => {
          const badge = typeColors[item.typeKey] || typeColors["certification"];
          return (
            <article key={i} className="edu-card">
              <div className="edu-card__icon">{item.icon}</div>
              <div className="edu-card__body">
                <h3 className="edu-card__degree">{item.degree[lang]}</h3>
                <p className="edu-card__institution">{item.institution}</p>
                <p className="edu-card__period">{item.period}</p>
                <span
                  className="edu-card__badge"
                  style={{ background: badge.bg, color: badge.color }}
                >
                  {item.type[lang]}
                </span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
