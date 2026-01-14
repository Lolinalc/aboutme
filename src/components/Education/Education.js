import React from "react";
import "./Education.css";

const Education = () => {
  const educationData = [
    {
      degree: "Desarrollo Web Full Stack",
      institution: "TripleTen",
      period: "2024 - 2025",
      type: "Certificación",
    },
    {
      degree: "Maestría en Administración de Negocios",
      institution: "UNID",
      period: "2020 - 2022",
      type: "Maestría",
    },
    {
      degree: "Licenciatura en Comunicación",
      institution: "Universidad Modelo",
      period: "2011 - 2015",
      type: "Licenciatura",
    },
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <h2 className="education__title">Educación 🎓</h2>
        <p className="education__subtitle">
          Formación académica y certificaciones
        </p>

        <div className="education__grid">
          {educationData.map((item, index) => (
            <article key={index} className="education-card">
              <div className="education-card__content">
                <h3 className="education-card__degree">{item.degree}</h3>
                <p className="education-card__institution">
                  {item.institution}
                </p>
                <p className="education-card__period">{item.period}</p>
                <span className="education-card__type">{item.type}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
