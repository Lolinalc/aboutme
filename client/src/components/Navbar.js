import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrolled } from '../hooks';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const close = () => setMenuOpen(false);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo" onClick={close}>
        Lolina<span>.</span>
      </Link>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/" onClick={close}>Inicio</Link></li>
        <li><Link to="/sobre-mi" onClick={close}>Sobre mí</Link></li>
        <li><Link to="/servicios" onClick={close}>Servicios</Link></li>
        <li><Link to="/portfolio" onClick={close}>Portafolio</Link></li>
        <li><Link to="/proceso" onClick={close}>Proceso</Link></li>
        <li>
          <Link to="/contacto" className="nav-cta" onClick={close}>
            Hablemos
          </Link>
        </li>
      </ul>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
