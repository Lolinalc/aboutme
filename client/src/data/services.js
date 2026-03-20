// ─── DATOS DE SERVICIOS ────────────────────────────────────────────────────
// Este archivo es la fuente única de verdad para todos los servicios.
// Se usa en: Services.js (home compact), ServicesPage.js y ServiceDetail.js
// Cada campo de texto es un objeto { es, en } para soporte bilingüe.

const CALENDAR_URL = "https://calendar.app.google/tc8tGgGg2iRSBWNh8";

export { CALENDAR_URL };

export const servicesData = [
  {
    id: "web",
    number: "01",
    icon: "🌐",
    title: {
      es: "Desarrollo Web",
      en: "Web Development",
    },
    desc: {
      es: "Sitios web modernos, rápidos y responsivos que representan tu marca y convierten visitantes en clientes.",
      en: "Modern, fast, and responsive websites that represent your brand and turn visitors into customers.",
    },
    longDesc: {
      es: "Desde landing pages de alto impacto hasta e-commerce y sitios corporativos, diseño cada proyecto con un enfoque estratégico: que se vea profesional, cargue rápido y guíe al visitante a tomar acción.",
      en: "From high-impact landing pages to e-commerce and corporate sites, I design every project with a strategic focus: professional look, fast loading, and guiding the visitor to take action.",
    },
    features: {
      es: [
        "Landing pages de alto impacto",
        "Sitios corporativos y e-commerce",
        "Diseño responsivo para todos los dispositivos",
        "Optimización de velocidad y rendimiento",
      ],
      en: [
        "High-impact landing pages",
        "Corporate sites and e-commerce",
        "Responsive design for all devices",
        "Speed and performance optimization",
      ],
    },
    includes: {
      es: [
        { icon: "🎨", label: "Diseño UI/UX personalizado", desc: "Interfaces limpias y alineadas a tu marca." },
        { icon: "📱", label: "Mobile-first & responsive", desc: "Se ve perfecto en celular, tablet y escritorio." },
        { icon: "⚡", label: "Rendimiento optimizado", desc: "Carga rápida para no perder visitantes." },
        { icon: "🔍", label: "SEO básico incluido", desc: "Estructura optimizada para que Google te encuentre." },
      ],
      en: [
        { icon: "🎨", label: "Custom UI/UX design", desc: "Clean interfaces aligned with your brand." },
        { icon: "📱", label: "Mobile-first & responsive", desc: "Looks perfect on phone, tablet, and desktop." },
        { icon: "⚡", label: "Optimized performance", desc: "Fast loading so you don't lose visitors." },
        { icon: "🔍", label: "Basic SEO included", desc: "Optimized structure so Google can find you." },
      ],
    },
    idealFor: {
      es: [
        "Emprendedores que necesitan presencia digital profesional",
        "Negocios locales que quieren atraer clientes en línea",
        "Startups que necesitan un MVP web funcional",
        "Empresas que quieren renovar su sitio actual",
      ],
      en: [
        "Entrepreneurs who need a professional digital presence",
        "Local businesses that want to attract clients online",
        "Startups that need a functional web MVP",
        "Companies that want to refresh their current site",
      ],
    },
    portfolioCategory: "web",
    primaryCta: {
      label: { es: "Ver portafolio web", en: "View web portfolio" },
      type: "portfolio",
    },
    calendarCta: { es: "Solicitar cotización", en: "Request a quote" },
  },
  {
    id: "marketing",
    number: "02",
    icon: "📈",
    title: {
      es: "Marketing Digital",
      en: "Digital Marketing",
    },
    desc: {
      es: "Estrategias integrales de marketing que posicionan tu marca y generan ventas de manera consistente.",
      en: "Comprehensive marketing strategies that position your brand and generate consistent sales.",
    },
    longDesc: {
      es: "Diseño campañas que conectan con tu audiencia donde pasa su tiempo: Meta Ads, email marketing, redes sociales y SEO. Todo medible, todo con un objetivo claro. No gasto presupuesto — lo invierto.",
      en: "I design campaigns that connect with your audience where they spend their time: Meta Ads, email marketing, social media, and SEO. Everything measurable, everything with a clear goal. I don't spend budget — I invest it.",
    },
    features: {
      es: [
        "Campañas en Meta Ads (Facebook & Instagram)",
        "Gestión de redes sociales",
        "SEO y posicionamiento orgánico",
        "Email marketing y automatización",
      ],
      en: [
        "Meta Ads campaigns (Facebook & Instagram)",
        "Social media management",
        "SEO and organic positioning",
        "Email marketing and automation",
      ],
    },
    includes: {
      es: [
        { icon: "📣", label: "Meta Ads (Facebook & Instagram)", desc: "Campañas segmentadas que llegan a tu cliente ideal." },
        { icon: "📱", label: "Gestión de redes sociales", desc: "Contenido consistente que construye comunidad." },
        { icon: "📧", label: "Email marketing", desc: "Secuencias automatizadas que nutren y convierten." },
        { icon: "🔍", label: "SEO & contenido", desc: "Posicionamiento orgánico a largo plazo." },
        { icon: "📊", label: "Reportes", desc: "Métricas claras: alcance, clics, conversiones y ROI." },
      ],
      en: [
        { icon: "📣", label: "Meta Ads (Facebook & Instagram)", desc: "Segmented campaigns that reach your ideal client." },
        { icon: "📱", label: "Social media management", desc: "Consistent content that builds community." },
        { icon: "📧", label: "Email marketing", desc: "Automated sequences that nurture and convert." },
        { icon: "🔍", label: "SEO & content", desc: "Long-term organic positioning." },
        { icon: "📊", label: "Reports", desc: "Clear metrics: reach, clicks, conversions, and ROI." },
      ],
    },
    idealFor: {
      es: [
        "Tiendas físicas que quieren vender en línea",
        "Negocios que necesitan más clientes de forma constante",
        "Marcas que quieren crecer su comunidad en redes",
        "Empresas que ya tienen web pero no generan tráfico",
      ],
      en: [
        "Physical stores that want to sell online",
        "Businesses that need more clients consistently",
        "Brands that want to grow their online community",
        "Companies that have a website but aren't generating traffic",
      ],
    },
    portfolioCategory: "marketing",
    primaryCta: {
      label: { es: "Ver portafolio de marketing", en: "View marketing portfolio" },
      type: "portfolio",
    },
    calendarCta: { es: "Solicitar cotización", en: "Request a quote" },
  },
  {
    id: "asesoria",
    number: "03",
    icon: "💡",
    title: {
      es: "Asesoría de Negocio",
      en: "Business Consulting",
    },
    desc: {
      es: "Consultoría personalizada para definir tu estrategia digital y maximizar el retorno de tu inversión.",
      en: "Personalized consulting to define your digital strategy and maximize your return on investment.",
    },
    longDesc: {
      es: "Una sesión 1:1 donde analizamos tu situación actual, identificamos oportunidades y construimos un plan de acción concreto. Sin tecnicismos, con resultados. Ideal si estás comenzando o si quieres llevar tu negocio al siguiente nivel.",
      en: "A 1:1 session where we analyze your current situation, identify opportunities, and build a concrete action plan. No jargon, just results. Ideal if you're just starting out or want to take your business to the next level.",
    },
    features: {
      es: [
        "Sesión 1:1 de diagnóstico digital",
        "Plan de acción con etapas claras",
        "Auditoría de presencia digital",
        "Mentoría y acompañamiento continuo",
      ],
      en: [
        "1:1 digital diagnosis session",
        "Action plan with clear stages",
        "Digital presence audit",
        "Mentoring and ongoing support",
      ],
    },
    includes: {
      es: [
        { icon: "🗣️", label: "Sesión 1:1 (60–90 min)", desc: "Videollamada o presencial para conocer tu negocio a fondo." },
        { icon: "🔎", label: "Diagnóstico digital", desc: "Revisamos tu web, redes y estrategia actual." },
        { icon: "📋", label: "Plan de acción", desc: "Entregable escrito con pasos concretos y priorizados." },
        { icon: "💬", label: "Seguimiento post-sesión", desc: "Respondo dudas durante 7 días después de la sesión." },
        { icon: "📚", label: "Recursos personalizados", desc: "Guías, plantillas y herramientas recomendadas para tu caso." },
      ],
      en: [
        { icon: "🗣️", label: "1:1 session (60–90 min)", desc: "Video call or in-person to deeply understand your business." },
        { icon: "🔎", label: "Digital diagnosis", desc: "We review your website, social media, and current strategy." },
        { icon: "📋", label: "Action plan", desc: "Written deliverable with concrete, prioritized steps." },
        { icon: "💬", label: "Post-session follow-up", desc: "I answer questions for 7 days after the session." },
        { icon: "📚", label: "Personalized resources", desc: "Guides, templates, and recommended tools for your case." },
      ],
    },
    idealFor: {
      es: [
        "Emprendedores que no saben por dónde empezar",
        "Negocios que invierten en marketing sin ver resultados",
        "Dueños de negocio que quieren aprender a gestionar su presencia digital",
        "Empresas que necesitan validar su estrategia antes de invertir",
      ],
      en: [
        "Entrepreneurs who don't know where to start",
        "Businesses that invest in marketing without seeing results",
        "Business owners who want to learn to manage their digital presence",
        "Companies that need to validate their strategy before investing",
      ],
    },
    portfolioCategory: "asesoria",
    primaryCta: {
      label: { es: "Agendar sesión de consultoría", en: "Book a consulting session" },
      type: "calendar",
    },
    calendarCta: { es: "Agendar sesión de consultoría", en: "Book a consulting session" },
  },
];
