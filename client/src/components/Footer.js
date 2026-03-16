import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand">Lolina<span>.</span></div>
          <p className="footer-tagline">
            Desarrollo web y marketing digital para negocios que quieren crecer de verdad.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>Servicios</h4>
            <Link to="/servicios">Ver todos los servicios</Link>
            <Link to="/portfolio/web">Desarrollo Web</Link>
            <Link to="/portfolio/marketing">Marketing Digital</Link>
            <Link to="/portfolio/asesoria">Asesoría de Negocio</Link>
          </div>
          <div className="footer-col">
            <h4>Navegación</h4>
            <Link to="/">Inicio</Link>
            <Link to="/sobre-mi">Sobre mí</Link>
            <Link to="/portfolio">Portafolio</Link>
            <Link to="/proceso">Proceso</Link>
            <Link to="/contacto">Contacto</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">© 2025 Lolina Digital Solutions. Todos los derechos reservados.</p>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/lolina-lopez-developer/" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
          <a href="https://github.com/Lolinalc" target="_blank" rel="noreferrer" title="GitHub">gh</a>
          <a href="https://wa.me/529992808946" target="_blank" rel="noreferrer" title="WhatsApp">wa</a>
        </div>
      </div>
    </footer>
  );
}
