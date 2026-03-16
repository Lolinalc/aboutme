import React, { useState } from "react";
import { useReveal } from "../hooks";

const experienceData = [
  {
    title: "Quality Assurance Specialist",
    company: "Outlier",
    period: "10/2022 – Actualidad",
    type: "Remoto",
    location: "Remoto, México",
    description:
      "Empresa enfocada en soluciones de inteligencia artificial y entrenamiento de modelos de machine learning.",
    achievements: [
      "Aseguramiento de calidad y manejo de datos para proyectos de IA",
      "Identificación de problemas y mejoras de procesos",
      "Trabajo colaborativo en equipos remotos internacionales",
    ],
  },
  {
    title: "Marketing Digital",
    company: "Freelance",
    period: "2022 – Actualidad",
    type: "Freelance",
    location: "Mérida, Yucatán",
    description:
      "Gestión de redes sociales y campañas de marketing digital para múltiples empresas locales, con enfoque en estrategia de contenido y publicidad pagada.",
    achievements: [
      "Campañas de Meta Ads con resultados medibles",
      "Estrategias personalizadas para cada cliente",
      "Contenido estratégico que mejoró la presencia digital y relación con clientes locales",
      "Doble de ventas para clientes en temporadas clave",
    ],
  },
  {
    title: "Marketing Communications Assistant",
    company: "Coutpals",
    period: "09/2021 – 11/2022",
    type: "Remoto",
    location: "Remoto, México",
    description:
      "Asistente de comunicaciones de marketing para proveedor de servicios de asistencia jurídica.",
    achievements: [
      "Estrategias de email marketing B2B",
      "Seguimiento a clientes potenciales",
    ],
  },
  {
    title: "Lead Media Staff / Photographer",
    company: "Twin Creeks",
    period: "09/2021 – 11/2022",
    type: "Presencial",
    location: "West Virginia, USA",
    description:
      "Coordinador principal de medios y fotógrafo para campamento de verano en Estados Unidos.",
    achievements: [
      "Organización y supervisión del equipo de medios",
      "Coordinación de sesiones fotográficas y de video",
    ],
  },
];

const typeColors = {
  Remoto: { bg: "rgba(99,102,241,0.08)", color: "var(--color-primary)" },
  Freelance: { bg: "rgba(236,72,153,0.08)", color: "var(--color-secondary)" },
  Presencial: { bg: "rgba(245,158,11,0.1)", color: "#b45309" },
};

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [ref, visible] = useReveal();

  const toggle = (i) => setExpandedIndex(expandedIndex === i ? -1 : i);

  return (
    <div ref={ref} className={`exp-section reveal${visible ? " visible" : ""}`}>
      <div className="section-label" style={{ marginBottom: "0.4rem" }}>
        Trayectoria
      </div>
      <h2 className="section-title" style={{ marginBottom: "3rem" }}>
        Experiencia profesional
      </h2>

      <div className="exp-timeline">
        {experienceData.map((item, i) => {
          const isOpen = expandedIndex === i;
          const badge = typeColors[item.type] || typeColors["Remoto"];

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
                    <span className="exp-card__period">{item.period}</span>
                    <span
                      className="exp-card__badge"
                      style={{ background: badge.bg, color: badge.color }}
                    >
                      {item.type}
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
                      <p className="exp-card__location">📍 {item.location}</p>
                    )}
                    <p className="exp-card__description">{item.description}</p>
                    <ul className="exp-card__list">
                      {item.achievements.map((a, j) => (
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
