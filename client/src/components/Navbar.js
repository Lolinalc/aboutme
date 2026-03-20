import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useScrolled } from '../hooks';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();
  const close = () => setMenuOpen(false);

  const toggleLang = () => {
    const next = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(next);
    localStorage.setItem('lang', next);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo" onClick={close}>
        Lolina<span>.</span>
      </Link>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><Link to="/" onClick={close}>{t('nav.home')}</Link></li>
        <li><Link to="/sobre-mi" onClick={close}>{t('nav.about')}</Link></li>
        <li><Link to="/servicios" onClick={close}>{t('nav.services')}</Link></li>
        <li><Link to="/portfolio" onClick={close}>{t('nav.portfolio')}</Link></li>
        <li><Link to="/proceso" onClick={close}>{t('nav.process')}</Link></li>
        <li>
          <Link to="/contacto" className="nav-cta" onClick={close}>
            {t('nav.contact')}
          </Link>
        </li>
        <li>
          <button
            onClick={toggleLang}
            className="lang-toggle"
            aria-label="Toggle language"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>
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
