import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks";

const experienceData = [
  {
    title: "Quality Assurance Specialist",
    company: "Outlier",
    period: { es: "10/2022 – Actualidad", en: "10/2022 – Present" },
    typeKey: "remote",
    type: { es: "Remoto", en: "Remote" },
    location: { es: "Remoto, México", en: "Remote, Mexico" },
    description: {
      es: "Empresa enfocada en soluciones de inteligencia artificial y entrenamiento de modelos de machine learning.",
      en: "Company focused on artificial intelligence solutions and machine learning model training.",
    },
    achievements: {
      es: [
        "Aseguramiento de calidad y manejo de datos para proyectos de IA",
        "Identificación de problemas y mejoras de procesos",
        "Trabajo colaborativo en equipos remotos internacionales",
      ],
      en: [
        "Quality assurance and data handling for AI projects",
        "Problem identification and process improvements",
        "Collaborative work in international remote teams",
      ],
    },
  },
  {
    title: "Digital Marketing",
    company: "Freelance",
    period: { es: "2022 – Actualidad", en: "2022 – Present" },
    typeKey: "freelance",
    type: { es: "Freelance", en: "Freelance" },
    location: { es: "Mérida, Yucatán", en: "Mérida, Yucatán" },
    description: {
      es: "Gestión de redes sociales y campañas de marketing digital para múltiples empresas locales, con enfoque en estrategia de contenido y publicidad pagada.",
      en: "Social media management and digital marketing campaigns for multiple local businesses, focusing on content strategy and paid advertising.",
    },
    achievements: {
      es: [
        "Campañas de Meta Ads con resultados medibles",
        "Estrategias personalizadas para cada cliente",
        "Contenido estratégico que mejoró la presencia digital y relación con clientes locales",
        "Doble de ventas para clientes en temporadas clave",
      ],
      en: [
        "Meta Ads campaigns with measurable results",
        "Personalized strategies for each client",
        "Strategic content that improved digital presence and relationships with local clients",
        "Doubled sales for clients during key seasons",
      ],
    },
  },
  {
    title: "Marketing Communications Assistant",
    company: "Coutpals",
    period: { es: "09/2021 – 11/2022", en: "09/2021 – 11/2022" },
    typeKey: "remote",
    type: { es: "Remoto", en: "Remote" },
    location: { es: "Remoto, México", en: "Remote, Mexico" },
    description: {
      es: "Asistente de comunicaciones de marketing para proveedor de servicios de asistencia jurídica.",
      en: "Marketing communications assistant for a legal assistance services provider.",
    },
    achievements: {
      es: [
        "Estrategias de email marketing B2B",
        "Seguimiento a clientes potenciales",
      ],
      en: [
        "B2B email marketing strategies",
        "Lead follow-up and nurturing",
      ],
    },
  },
  {
    title: "Lead Media Staff / Photographer",
    company: "Twin Creeks",
    period: { es: "09/2021 – 11/2022", en: "09/2021 – 11/2022" },
    typeKey: "onsite",
    type: { es: "Presencial", en: "On-site" },
    location: { es: "West Virginia, USA", en: "West Virginia, USA" },
    description: {
      es: "Coordinador principal de medios y fotógrafo para campamento de verano en Estados Unidos.",
      en: "Lead media coordinator and photographer for a summer camp in the United States.",
    },
    achievements: {
      es: [
        "Organización y supervisión del equipo de medios",
        "Coordinación de sesiones fotográficas y de video",
      ],
      en: [
        "Organization and supervision of the media team",
        "Coordination of photo and video sessions",
      ],
    },
  },
];

const typeColors = {
  remote:    { bg: "rgba(99,102,241,0.08)", color: "var(--color-primary)" },
  freelance: { bg: "rgba(236,72,153,0.08)", color: "var(--color-secondary)" },
  onsite:    { bg: "rgba(245,158,11,0.1)",  color: "#b45309" },
};

export default function Experience() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [ref, visible] = useReveal();

  const toggle = (i) => setExpandedIndex(expandedIndex === i ? -1 : i);

  return (
    <div ref={ref} className={`exp-section reveal${visible ? " visible" : ""}`}>
      <div className="section-label" style={{ marginBottom: "0.4rem" }}>
        {t('experience.label')}
      </div>
      <h2 className="section-title" style={{ marginBottom: "3rem" }}>
        {t('experience.title')}
      </h2>

      <div className="exp-timeline">
        {experienceData.map((item, i) => {
          const isOpen = expandedIndex === i;
          const badge = typeColors[item.typeKey] || typeColors["remote"];

          return (
            <article key={i} className="exp-card">
              <div className="exp-card__marker" />
              <div className={`exp-card__content${isOpen ? " exp-card__content--open" : ""}`}>
                {/* Header clicable */}
                <div
                  className="exp-card__header"
                  onClick={() => toggle(i)}
                >
                  <div className="exp-card__left">
                    <h3 className="exp-card__title">{item.title}</h3>
                    <span className="exp-card__company">{item.company}</span>
                  </div>
                  <div className="exp-card__right">
                    <span className="exp-card__period">{item.period[lang]}</span>
                    <span
                      className="exp-card__badge"
                      style={{ background: badge.bg, color: badge.color }}
                    >
                      {item.type[lang]}
                    </span>
                  </div>
                  <span className="exp-card__chevron">
                    {isOpen ? "▾" : "▸"}
                  </span>
                </div>

                {/* Detalle expandible */}
                {isOpen && (
                  <div className="exp-card__details">
                    {item.location && (
                      <p className="exp-card__location">📍 {item.location[lang]}</p>
                    )}
                    <p className="exp-card__description">{item.description[lang]}</p>
                    <ul className="exp-card__list">
                      {item.achievements[lang].map((a, j) => (
                        <li key={j} className="exp-card__item">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
