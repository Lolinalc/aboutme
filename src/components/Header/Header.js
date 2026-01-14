import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__logo">
            <span className="header__logo-text">Lolina</span>
          </div>
          
          <button 
            className={`header__menu-toggle ${isMenuOpen ? 'header__menu-toggle--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="header__menu-icon"></span>
            <span className="header__menu-icon"></span>
            <span className="header__menu-icon"></span>
          </button>

          <ul className={`header__menu ${isMenuOpen ? 'header__menu--active' : ''}`}>
            <li className="header__menu-item">
              <a href="#about" className="header__menu-link" onClick={closeMenu}>
                Sobre mí
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#skills" className="header__menu-link" onClick={closeMenu}>
                Habilidades
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#projects" className="header__menu-link" onClick={closeMenu}>
                Proyectos
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#experience" className="header__menu-link" onClick={closeMenu}>
                Experiencia
              </a>
            </li>
            <li className="header__menu-item">
              <a href="#contact" className="header__menu-link" onClick={closeMenu}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
