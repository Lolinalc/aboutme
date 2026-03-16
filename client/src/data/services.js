// ─── DATOS DE SERVICIOS ────────────────────────────────────────────────────
// Este archivo es la fuente única de verdad para todos los servicios.
// Se usa en: Services.js (home compact), ServicesPage.js y ServiceDetail.js

const CALENDAR_URL = "https://calendar.app.google/tc8tGgGg2iRSBWNh8";

export { CALENDAR_URL };

export const servicesData = [
  {
    id: "web",
    number: "01",
    icon: "🌐",
    title: "Desarrollo Web",
    desc: "Sitios web modernos, rápidos y responsivos que representan tu marca y convierten visitantes en clientes.",
    longDesc:
      "Desde landing pages de alto impacto hasta e-commerce y sitios corporativos, diseño cada proyecto con un enfoque estratégico: que se vea profesional, cargue rápido y guíe al visitante a tomar acción.",
    features: [
      "Landing pages de alto impacto",
      "Sitios corporativos y e-commerce",
      "Diseño responsivo para todos los dispositivos",
      "Optimización de velocidad y rendimiento",
    ],
    includes: [
      {
        icon: "🎨",
        label: "Diseño UI/UX personalizado",
        desc: "Interfaces limpias y alineadas a tu marca.",
      },
      {
        icon: "📱",
        label: "Mobile-first & responsive",
        desc: "Se ve perfecto en celular, tablet y escritorio.",
      },
      {
        icon: "⚡",
        label: "Rendimiento optimizado",
        desc: "Carga rápida para no perder visitantes.",
      },
      {
        icon: "🔍",
        label: "SEO básico incluido",
        desc: "Estructura optimizada para que Google te encuentre.",
      },
    ],
    idealFor: [
      "Emprendedores que necesitan presencia digital profesional",
      "Negocios locales que quieren atraer clientes en línea",
      "Startups que necesitan un MVP web funcional",
      "Empresas que quieren renovar su sitio actual",
    ],
    portfolioCategory: "web",
    primaryCta: { label: "Ver portafolio web", type: "portfolio" },
    calendarCta: "Solicitar cotización",
  },
  {
    id: "marketing",
    number: "02",
    icon: "📈",
    title: "Marketing Digital",
    desc: "Estrategias integrales de marketing que posicionan tu marca y generan ventas de manera consistente.",
    longDesc:
      "Diseño campañas que conectan con tu audiencia donde pasa su tiempo: Meta Ads, email marketing, redes sociales y SEO. Todo medible, todo con un objetivo claro. No gasto presupuesto — lo invierto.",
    features: [
      "Campañas en Meta Ads (Facebook & Instagram)",
      "Gestión de redes sociales",
      "SEO y posicionamiento orgánico",
      "Email marketing y automatización",
    ],
    includes: [
      {
        icon: "📣",
        label: "Meta Ads (Facebook & Instagram)",
        desc: "Campañas segmentadas que llegan a tu cliente ideal.",
      },
      {
        icon: "📱",
        label: "Gestión de redes sociales",
        desc: "Contenido consistente que construye comunidad.",
      },
      {
        icon: "📧",
        label: "Email marketing",
        desc: "Secuencias automatizadas que nutren y convierten.",
      },
      {
        icon: "🔍",
        label: "SEO & contenido",
        desc: "Posicionamiento orgánico a largo plazo.",
      },
      {
        icon: "📊",
        label: "Reportes",
        desc: "Métricas claras: alcance, clics, conversiones y ROI.",
      },
    ],
    idealFor: [
      "Tiendas físicas que quieren vender en línea",
      "Negocios que necesitan más clientes de forma constante",
      "Marcas que quieren crecer su comunidad en redes",
      "Empresas que ya tienen web pero no generan tráfico",
    ],
    portfolioCategory: "marketing",
    primaryCta: { label: "Ver portafolio de marketing", type: "portfolio" },
    calendarCta: "Solicitar cotización",
  },
  {
    id: "asesoria",
    number: "03",
    icon: "💡",
    title: "Asesoría de Negocio",
    desc: "Consultoría personalizada para definir tu estrategia digital y maximizar el retorno de tu inversión.",
    longDesc:
      "Una sesión 1:1 donde analizamos tu situación actual, identificamos oportunidades y construimos un plan de acción concreto. Sin tecnicismos, con resultados. Ideal si estás comenzando o si quieres llevar tu negocio al siguiente nivel.",
    features: [
      "Sesión 1:1 de diagnóstico digital",
      "Plan de acción con etapas claras",
      "Auditoría de presencia digital",
      "Mentoría y acompañamiento continuo",
    ],
    includes: [
      {
        icon: "🗣️",
        label: "Sesión 1:1 (60–90 min)",
        desc: "Videollamada o presencial para conocer tu negocio a fondo.",
      },
      {
        icon: "🔎",
        label: "Diagnóstico digital",
        desc: "Revisamos tu web, redes y estrategia actual.",
      },
      {
        icon: "📋",
        label: "Plan de acción",
        desc: "Entregable escrito con pasos concretos y priorizados.",
      },
      {
        icon: "💬",
        label: "Seguimiento post-sesión",
        desc: "Respondo dudas durante 7 días después de la sesión.",
      },
      {
        icon: "📚",
        label: "Recursos personalizados",
        desc: "Guías, plantillas y herramientas recomendadas para tu caso.",
      },
    ],
    idealFor: [
      "Emprendedores que no saben por dónde empezar",
      "Negocios que invierten en marketing sin ver resultados",
      "Dueños de negocio que quieren aprender a gestionar su presencia digital",
      "Empresas que necesitan validar su estrategia antes de invertir",
    ],
    portfolioCategory: "asesoria",
    primaryCta: { label: "Agendar sesión de consultoría", type: "calendar" },
    calendarCta: "Agendar sesión de consultoría",
  },
];
