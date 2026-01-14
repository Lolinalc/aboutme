import React, { useState } from "react";
import "./Experience.css";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experienceData = [
    {
      title: "Quality Assurance Specialist",
      company: "Outlier",
      period: "10/2022 - Actualidad",
      type: "Remoto",
      location: "Remoto, México",
      description:
        "Empresa enfocada en soluciones de inteligencia artificial y entrenamiento de modelos de machine learning.",
      achievements: [
        "Aseguramiento de calidad y manejo de datos para proyectos de IA",
        "Enfoque en identificación de problemas y mejoras de procesos",
        "Trabajo colaborativo en equipos remotos",
      ],
    },
    {
      title: "Marketing Digital",
      company: "Freelance",
      period: "2022 - Actualidad",
      type: "Remoto",
      location: "Mérida, Yucatán",
      description:
        "Gestionar redes sociales y campañas de marketing digital, trabajando con múltiples empresas en la gestión de campañas publicitarias, redes sociales y estrategia de contenido",
      achievements: [
        "Campañas de Meta Ads",
        "Estrategias personalizadas para cada cliente",
        "Implementación de APIs REST y manejo de bases de datos",
        "Contenido estratégico y anuncios pagados que mejoraron presencia digital y relación con clientes locales",
      ],
    },
    {
      title: "Marketing Communications Assistant",
      company: "Coutpals",
      period: "09/2021 - 11/2022",
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
      period: "09/2021 - 11/2022",
      type: "Presencial",
      location: "West Virginia, USA",
      description:
        "Coordinador principal de medios y fotógrafo para campamento de verano.",
      achievements: [
        "Organización y supervisión del equipo de medios",
        "Coordinación de sesiones fotográficas y de video",
      ],
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="experience" id="experience">
      <div className="container">
        <h2 className="experience__title">Experiencia</h2>
        <p className="experience__subtitle">
          Mi trayectoria profesional y formación
        </p>

        <div className="experience__timeline">
          {experienceData.map((item, index) => (
            <article key={index} className="experience-card">
              <div className="experience-card__marker"></div>
              <div className="experience-card__content">
                <div
                  className="experience-card__header"
                  onClick={() => toggleExpand(index)}
                  style={{ cursor: "pointer" }}
                >
                  <div>
                    <h3 className="experience-card__title">
                      {item.title}
                      <span className="experience-card__toggle">
                        {expandedIndex === index ? " ▼" : " ▶"}
                      </span>
                    </h3>
                    <p className="experience-card__company">{item.company}</p>
                  </div>
                  <div className="experience-card__meta">
                    <span className="experience-card__period">
                      {item.period}
                    </span>
                    <span
                      className={`experience-card__type experience-card__type--${item.type.toLowerCase()}`}
                    >
                      {item.type}
                    </span>
                  </div>
                </div>

                {expandedIndex === index && (
                  <div className="experience-card__details">
                    {item.location && (
                      <p className="experience-card__location">
                        📍 {item.location}
                      </p>
                    )}
                    <p className="experience-card__description">
                      {item.description}
                    </p>
                    <ul className="experience-card__achievements">
                      {item.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="experience-card__achievement"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
