import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footer-top">
        <div>
          <div className="footer-brand">Lolina<span>.</span></div>
          <p className="footer-tagline">
            {t('footer.tagline')}
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h4>{t('footer.services_title')}</h4>
            <Link to="/servicios">{t('footer.all_services')}</Link>
            <Link to="/portfolio/web">{t('footer.service_web')}</Link>
            <Link to="/portfolio/marketing">{t('footer.service_marketing')}</Link>
            <Link to="/portfolio/asesoria">{t('footer.service_consulting')}</Link>
          </div>
          <div className="footer-col">
            <h4>{t('footer.nav_title')}</h4>
            <Link to="/">{t('footer.nav_home')}</Link>
            <Link to="/sobre-mi">{t('footer.nav_about')}</Link>
            <Link to="/portfolio">{t('footer.nav_portfolio')}</Link>
            <Link to="/proceso">{t('footer.nav_process')}</Link>
            <Link to="/contacto">{t('footer.nav_contact')}</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">{t('footer.copyright')}</p>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/lolina-lopez-developer/" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
          <a href="https://github.com/Lolinalc" target="_blank" rel="noreferrer" title="GitHub">gh</a>
          <a href="https://wa.me/529992808946" target="_blank" rel="noreferrer" title="WhatsApp">wa</a>
        </div>
      </div>
    </footer>
  );
}
