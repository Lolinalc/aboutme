import React from "react";
import "./Hero.css";
import profileImage from "../../images/Profile.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__container">
          <div className="hero__content">
            <h1 className="hero__title">
              ¡Hola! Soy{" "}
              <span className="hero__title-highlight">
                Lolina López Ceballos
              </span>
            </h1>
            <p className="hero__subtitle">
              Junior Full Stack Web Developer | Background en Marketing Digital
            </p>
            <p className="hero__description">
              Desarrolladora Web Full Stack Junior con 11 años de experiencia
              profesional previa en marketing digital, comunicación y control de
              calidad en entornos ágiles. Especializada en aplicaciones web con
              React y Node.js, con enfoque en aseguramiento de calidad y manejo
              de datos para proyectos de inteligencia artificial.
            </p>
            <div className="hero__buttons">
              <a
                href="#projects"
                className="hero__button hero__button--primary"
              >
                Ver Proyectos
              </a>
              <a
                href="#contact"
                className="hero__button hero__button--secondary"
              >
                Contactar
              </a>
            </div>
          </div>
          <div className="hero__image">
            <div className="hero__avatar">
              <img
                src={profileImage}
                alt="Lolina López Ceballos"
                className="hero__avatar-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
