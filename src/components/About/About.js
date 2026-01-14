import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="about__title">Sobre mí</h2>
        <div className="about__content">
          <div className="about__text">
            <p className="about__paragraph">
              Desarrolladora Web Full Stack Junior con 11 años de experiencia profesional previa en marketing digital,
              comunicación y control de calidad en entornos ágiles. Actualmente trabajo de forma remota en México
              para Outlier como Quality Assurance Specialist, enfocada en soluciones de inteligencia artificial y
              entrenamiento de modelos de machine learning.
            </p>
            <p className="about__paragraph">
              Tengo un background sólido en aseguramiento de calidad y manejo de datos para proyectos de inteligencia
              artificial, con enfoque en problemas, mejoras de procesos y trabajo colaborativo en equipos remotos.
              Mis habilidades técnicas incluyen el desarrollo de aplicaciones web utilizando HTML, CSS, JavaScript y
              frameworks modernos como React.
            </p>
            <p className="about__paragraph">
              Combino mi experiencia en marketing digital con mis habilidades técnicas para crear soluciones web
              completas. Mi objetivo es seguir creciendo como desarrolladora Full Stack, aplicando metodologías ágiles
              y mejores prácticas de desarrollo en proyectos que generen impacto positivo.
            </p>
          </div>
          
          <div className="about__info">
            <div className="about__card">
              <div className="about__card-icon">🎯</div>
              <h3 className="about__card-title">Objetivo</h3>
              <p className="about__card-text">
                Desarrollar soluciones web Full Stack que generen impacto positivo, combinando experiencia técnica y visión de negocio
              </p>
            </div>

            <div className="about__card">
              <div className="about__card-icon">💼</div>
              <h3 className="about__card-title">Trabajo Actual</h3>
              <p className="about__card-text">
                Quality Assurance Specialist | Outlier (Remoto, México)
              </p>
            </div>

            <div className="about__card">
              <div className="about__card-icon">📍</div>
              <h3 className="about__card-title">Ubicación</h3>
              <p className="about__card-text">
                México, Mérida | Trabajo Remoto
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
