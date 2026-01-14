import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="contact__title">Contacto</h2>
        <p className="contact__subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact-card">
              <div className="contact-card__icon">📧</div>
              <h3 className="contact-card__title">Email</h3>
              <a href="mailto:lolinalopez1192@gmail.com" className="contact-card__text">
                lolinalopez1192@gmail.com
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">📱</div>
              <h3 className="contact-card__title">Teléfono</h3>
              <a href="tel:+529992808946" className="contact-card__text">
                +52 999 280 8946
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">💼</div>
              <h3 className="contact-card__title">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/lolinalopez"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card__text"
              >
                linkedin.com/in/lolinalopez
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon">🐙</div>
              <h3 className="contact-card__title">GitHub</h3>
              <a
                href="https://github.com/LolinaLopez"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card__text"
              >
                github.com/LolinaLopez
              </a>
            </div>

            <div className="contact__social">
              <h3 className="contact__social-title">Ubicación</h3>
              <p className="contact__social-description">
                📍 México, Mérida
              </p>
              <p className="contact__social-description">
                🌐 Trabajo Remoto
              </p>
            </div>
          </div>
          
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__form-label">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="contact__form-input"
                required
              />
            </div>
            
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="contact__form-input"
                required
              />
            </div>
            
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__form-label">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="contact__form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="contact__form-button">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
