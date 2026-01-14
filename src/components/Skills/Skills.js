import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      category: "Lenguajes",
      icon: "💻",
      skills: [
        { name: "HTML", level: "Intermedio" },
        { name: "CSS", level: "Intermedio" },
        { name: "JavaScript", level: "Intermedio" },
      ],
    },
    {
      category: "Frameworks & Librerías",
      icon: "⚛️",
      skills: [
        { name: "React (básico)", level: "Intermedio" },
        { name: "Node.js", level: "Intermedio" },
        { name: "REST APIs", level: "Intermedio" },
      ],
    },
    {
      category: "Herramientas",
      icon: "🛠️",
      skills: [
        { name: "Git", level: "Intermedio" },
        { name: "GitHub", level: "Intermedio" },
        { name: "Visual Studio Code", level: "Intermedio" },
        { name: "Figma", level: "Intermedio" },
        { name: "Postman", level: "Intermedio" },
      ],
    },
    {
      category: "Otros",
      icon: "📊",
      skills: [
        { name: "Responsive Design", level: "Aprendiendo" },
        { name: "Web Testing", level: "Aprendiendo" },
        { name: "Consumo APIs", level: "Aprendiendo" },
        { name: "Control de versiones", level: "Aprendiendo" },
      ],
    },
  ];

  const getLevelClass = (level) => {
    const levelMap = {
      Aprendiendo: "learning",
      Intermedio: "intermediate",
      Avanzado: "advanced",
    };
    return levelMap[level] || "intermediate";
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2 className="skills__title">Habilidades & Herramientas</h2>
        <p className="skills__subtitle">
          Tecnologías y herramientas que utilizo en mi trabajo diario
        </p>

        <div className="skills__grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card__header">
                <span className="skill-card__icon">{category.icon}</span>
                <h3 className="skill-card__title">{category.category}</h3>
              </div>
              <ul className="skill-card__list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-card__item">
                    <span className="skill-card__name">{skill.name}</span>
                    <span
                      className={`skill-card__badge skill-card__badge--${getLevelClass(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
