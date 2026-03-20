import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useReveal } from "../hooks";
import { servicesData, CALENDAR_URL } from "../data/services";

const ArrowIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

function ServiceCard({ service, delay, compact }) {
  const [ref, isVisible] = useReveal();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const cardClass = `service-card reveal${isVisible ? " visible" : ""}${compact ? " service-card--link" : ""}`;
  const cardStyle = { transitionDelay: `${delay}ms` };

  const cardContent = (
    <>
      <div className="service-number">{service.number}</div>
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title[lang]}</h3>
      <p className="service-desc">{service.desc[lang]}</p>

      {/* Versión compacta: flecha indicando que es clickeable */}
      {compact && (
        <span className="service-card__cta">
          {t("services.detail_btn")} <ArrowIcon />
        </span>
      )}

      {/* Versión completa: solo en /servicios */}
      {!compact && (
        <>
          <p className="service-long-desc">{service.longDesc[lang]}</p>
          <ul className="service-features">
            {service.features[lang].map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            {service.primaryCta.type === "calendar" ? (
              <a
                href={CALENDAR_URL}
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "0.85rem", padding: "0.75rem 1.5rem" }}
              >
                {service.primaryCta.label[lang]} <ArrowIcon />
              </a>
            ) : (
              <Link
                to={`/portfolio/${service.portfolioCategory}`}
                className="service-link"
              >
                {service.primaryCta.label[lang]} <ArrowIcon />
              </Link>
            )}
          </div>
        </>
      )}
    </>
  );

  if (compact) {
    return (
      <Link
        ref={ref}
        to={`/servicios/${service.id}`}
        className={cardClass}
        style={cardStyle}
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div ref={ref} className={cardClass} style={cardStyle}>
      {cardContent}
    </div>
  );
}

export default function Services({ compact = false }) {
  const { t, i18n } = useTranslation();
  const [ref, isVisible] = useReveal();

  return (
    <section className="services" id="servicios">
      <div
        ref={ref}
        className={`section-header reveal${isVisible ? " visible" : ""}`}
      >
        <div>
          <div className="section-label">{t("services.label")}</div>
          <h2 className="section-title">{t("services.title")}</h2>
        </div>
        <p className="section-desc">{t("services.desc")}</p>
      </div>
      <div className="services-grid">
        {servicesData.map((s, i) => (
          <ServiceCard
            key={s.id}
            service={s}
            delay={i * 120}
            compact={compact}
          />
        ))}
      </div>
    </section>
  );
}
