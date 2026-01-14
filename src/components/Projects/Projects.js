import React from "react";
import "./Projects.css";

const Projects = () => {
  const projectsData = [
    {
      title: "Proyecto Final - Aplicación Web Full Stack",
      description:
        "Desarrollo de una aplicación web para almacenar y gestionar información utilizando HTML, CSS y JavaScript. Implementación del frontend con diseño responsivo y aplicación de principios de diseño responsivo. Implementa lógica de interacción del usuario para mejorar la experiencia de navegación.",
      tags: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      status: "Completado",
      color: "blue",
      link: "https://github.com/Lolinalc/web_project_api_full",
    },
    {
      title: "Rendara - Landing Page Corporativa",
      description:
        "Proyecto académico (2024). Desarrollo de una landing page informativa para una empresa, enfocada en comunicar servicios de manera clara y estructurada. Apliqué buenas prácticas de maquetación web y diseño responsivo para asegurar compatibilidad en distintos dispositivos.",
      tags: ["HTML", "CSS", "JavaScript", "Design Responsivo"],
      status: "Completado",
      color: "purple",
      link: "https://github.com/Lolinalc/rendara",
    },
    {
      title: "Cat Facts App - Aplicación Web Interactiva",
      description:
        "Aplicación web interactiva desarrollada como proyecto final de un bootcamp intensivo de desarrollo web. Cat Facts App permite a los usuarios explorar datos curiosos sobre gatos obtenidos de APIs públicas y crear su propia colección de favoritos. El proyecto demuestra competencias completas en desarrollo full-stack, desde la arquitectura del backend hasta la experiencia de usuario en el frontend.",
      tags: ["HTML", "CSS", "JavaScript"],
      status: "Completado",
      color: "pink",
      link: "https://github.com/Lolinalc/ProyectoFinal",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="projects__title">Proyectos</h2>
        <p className="projects__subtitle">
          Algunos de los proyectos en los que he trabajado
        </p>

        <div className="projects__grid">
          {projectsData.map((project, index) => (
            <article
              key={index}
              className={`project-card project-card--${project.color}`}
            >
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <span
                  className={`project-card__status project-card__status--${
                    project.status === "Completado" ? "completed" : "progress"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <p className="project-card__description">{project.description}</p>
              <div className="project-card__tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="project-card__tag">
                    {tag}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card__link"
                >
                  Ver en GitHub →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
