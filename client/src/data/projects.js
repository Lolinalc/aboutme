// ─── DATOS DE PORTAFOLIO ───────────────────────────────────────────────────
// Cada campo de texto variable es un objeto { es, en } para soporte bilingüe.
// Los nombres propios (títulos de clientes) y términos técnicos se mantienen igual.
import atmaImg from '../assets/atmasitioweb.webp';
import rendaraImg from '../assets/rendarasitioweb.webp';
import susieImg from '../assets/susiestradasitioweb.webp';
import bazaImg from '../assets/bazarísimo.webp';
import croqueImg from '../assets/croquelivery.webp';
import ferreteriaImg from '../assets/ferreteria.webp';
import muebleria from '../assets/mueblería.webp';
import uyitsImg from '../assets/uyitskaan.webp';

export const placeholderProjects = [
  // ─── Sitios Web ───
  {
    id: 'web1',
    title: 'Atma Sanación',
    description: {
      es: 'Sitio web profesional para Atma, un espacio dedicado a la sanación y el bienestar. Diseño limpio, intuitivo y alineado con la esencia de la marca.',
      en: 'Professional website for Atma, a space dedicated to healing and wellness. Clean, intuitive design aligned with the essence of the brand.',
    },
    category: 'web',
    client: 'Atma Sanación',
    tags: {
      es: ['Sitio Web', 'Diseño', 'Responsive', 'Bienestar'],
      en: ['Website', 'Design', 'Responsive', 'Wellness'],
    },
    image: atmaImg,
    images: [atmaImg],
    placeholder: true,
    url: 'https://atmasanacion.com/',
    github: 'https://github.com/Lolinalc/atma-sanaci-n',
  },
  {
    id: 'web3',
    title: 'Susi Estrada',
    description: {
      es: 'Sitio oficial tipo portafolio desarrollado con React 18 + Vite y navegación con React Router v6. SEO on-page implementado con react-helmet-async (títulos y meta dinámicos por ruta). Interfaz modular y mantenible con CSS Modules, variables CSS y tipografías de Google Fonts. Despliegue exitoso en producción con dominio personalizado.',
      en: 'Official portfolio-style site built with React 18 + Vite and React Router v6 navigation. On-page SEO implemented with react-helmet-async (dynamic titles and meta per route). Modular and maintainable interface with CSS Modules, CSS variables, and Google Fonts. Successfully deployed to production with a custom domain.',
    },
    category: 'web',
    client: 'Susi Estrada',
    date: { es: 'Marzo 2026', en: 'March 2026' },
    tags: {
      es: ['React', 'Vite', 'React Router', 'SEO', 'CSS Modules', 'Node.js', 'Express'],
      en: ['React', 'Vite', 'React Router', 'SEO', 'CSS Modules', 'Node.js', 'Express'],
    },
    image: susieImg,
    images: [susieImg],
    placeholder: true,
    url: 'https://susiestrada.com/',
  },
  {
    id: 'web2',
    title: 'Rendara',
    description: {
      es: 'Sitio web para Rendara, desarrollo completo desde el diseño hasta el despliegue. Experiencia de usuario optimizada y diseño moderno.',
      en: 'Website for Rendara, full development from design to deployment. Optimized user experience and modern design.',
    },
    category: 'web',
    client: 'Rendara MX',
    tags: {
      es: ['Sitio Web', 'Full Stack', 'Diseño UI/UX', 'Responsive'],
      en: ['Website', 'Full Stack', 'UI/UX Design', 'Responsive'],
    },
    image: rendaraImg,
    images: [rendaraImg],
    placeholder: true,
    url: 'https://rendaramx.com/',
    github: 'https://github.com/Lolinalc/rendara',
  },
  // ─── Marketing Digital ───
  {
    id: 'mkt1',
    title: 'Bazarísimo',
    description: {
      es: 'Tienda de mayoreo y menudeo de productos de belleza, mercería, papelería, hogar y oficina.',
      en: 'Wholesale and retail store for beauty, notions, stationery, home, and office products.',
    },
    category: 'marketing',
    client: 'Bazarísimo',
    tags: {
      es: ['Redes Sociales', 'Facebook', 'Instagram', 'TikTok', 'Campañas'],
      en: ['Social Media', 'Facebook', 'Instagram', 'TikTok', 'Campaigns'],
    },
    image: bazaImg,
    images: [bazaImg],
    placeholder: true,
    location: 'Hunucmá, Yucatán',
    links: {
      facebook: 'https://www.facebook.com/p/Bazar%C3%ADsimo-x--61563480452496/',
      instagram: 'https://www.instagram.com/bazarisimomx/',
      tiktok: 'https://www.tiktok.com/@bazarisimomx',
    },
    campaigns: [
      {
        name: { es: 'Campaña Escolar 2025', en: 'Back-to-School Campaign 2025' },
        duration: { es: '6 semanas', en: '6 weeks' },
        result: {
          es: 'El doble de ventas a comparación del año pasado',
          en: 'Double the sales compared to the previous year',
        },
      },
      {
        name: { es: 'Campaña Navideña 2025', en: 'Holiday Campaign 2025' },
        duration: { es: '7 semanas', en: '7 weeks' },
        result: {
          es: '70% más ventas a comparación del año pasado',
          en: '70% more sales compared to the previous year',
        },
      },
    ],
  },
  {
    id: 'mkt2',
    title: 'Croquelivery',
    description: {
      es: 'Venta de alimento para mascotas y animales al por mayor y menudeo.',
      en: 'Wholesale and retail pet and animal food sales.',
    },
    category: 'marketing',
    client: 'Croquelivery',
    tags: {
      es: ['Redes Sociales', 'Facebook', 'Instagram', 'Mascotas'],
      en: ['Social Media', 'Facebook', 'Instagram', 'Pets'],
    },
    image: croqueImg,
    images: [croqueImg],
    placeholder: true,
    location: 'Mérida, Yucatán',
    links: {
      facebook: 'https://www.facebook.com/p/Bazar%C3%ADsimo-x--61563480452496/',
      instagram: 'https://www.instagram.com/bazarisimomx/',
    },
  },
  {
    id: 'mkt3',
    title: 'Lolina Ferretería',
    description: {
      es: 'Ferretería con más de 20 años en la comunidad de Hunucmá, la calidad respalda a esta compañía.',
      en: 'Hardware store with over 20 years in the Hunucmá community — quality speaks for this company.',
    },
    category: 'marketing',
    client: 'Lolina Ferretería',
    tags: {
      es: ['Redes Sociales', 'Facebook', 'Instagram', 'Branding'],
      en: ['Social Media', 'Facebook', 'Instagram', 'Branding'],
    },
    image: ferreteriaImg,
    images: [ferreteriaImg],
    placeholder: true,
    location: 'Hunucmá, Yucatán',
    links: {
      facebook: 'https://www.facebook.com/p/Bazar%C3%ADsimo-x--61563480452496/',
      instagram: 'https://www.instagram.com/bazarisimomx/',
    },
  },
  {
    id: 'mkt4',
    title: 'Lolina Mueblería',
    description: {
      es: 'Mueblería con más de 20 años en la comunidad de Hunucmá. Productos como electrodomésticos, motos, triciclos, bicicletas y más.',
      en: 'Furniture store with over 20 years in the Hunucmá community. Products include appliances, motorcycles, tricycles, bicycles, and more.',
    },
    category: 'marketing',
    client: 'Lolina Mueblería',
    tags: {
      es: ['Redes Sociales', 'Facebook', 'Instagram', 'Campañas'],
      en: ['Social Media', 'Facebook', 'Instagram', 'Campaigns'],
    },
    image: muebleria,
    images: [muebleria],
    placeholder: true,
    location: 'Hunucmá, Yucatán',
    links: {
      facebook: 'https://www.facebook.com/p/Bazar%C3%ADsimo-x--61563480452496/',
      instagram: 'https://www.instagram.com/bazarisimomx/',
    },
    campaigns: [
      {
        name: { es: 'Campaña GoGo 2025', en: 'GoGo Campaign 2025' },
        duration: { es: '3 meses', en: '3 months' },
        result: {
          es: 'Ventas mayores y reconocimiento del producto en la comunidad',
          en: 'Higher sales and increased product recognition in the community',
        },
      },
    ],
  },
  // ─── Asesoría ───
  {
    id: 'ase1',
    title: "Escuela U Yits Ka'an",
    description: {
      es: "Escuela de Agricultura Ecológica. Curso sobre manejo de redes sociales, campaña digital para celebrar los 30 años de la escuela y campañas para eventos del Tianguis Agroecológico.",
      en: "Ecological Agriculture School. Social media management course, digital campaign to celebrate the school's 30th anniversary, and campaigns for Agroecological Market events.",
    },
    category: 'asesoria',
    client: "U Yits Ka'an",
    tags: {
      es: ['Curso Redes Sociales', 'Campaña Digital', 'Eventos', 'Agroecología'],
      en: ['Social Media Course', 'Digital Campaign', 'Events', 'Agroecology'],
    },
    image: uyitsImg,
    images: [uyitsImg],
    placeholder: true,
  },
  {
    id: 'ase2',
    title: 'Almacenes Don Ramón',
    description: {
      es: 'Capacitación y curso sobre manejo de redes sociales para potenciar la presencia digital del negocio.',
      en: 'Training and course on social media management to boost the business digital presence.',
    },
    category: 'asesoria',
    client: 'Almacenes Don Ramón',
    tags: {
      es: ['Curso Redes Sociales', 'Capacitación', 'Estrategia Digital'],
      en: ['Social Media Course', 'Training', 'Digital Strategy'],
    },
    image: null,
    images: [],
    placeholder: true,
  },
  {
    id: 'ase3',
    title: 'Logoterapia Mérida',
    description: {
      es: 'Manejo de anuncios y campañas en Meta Ads para aumentar el alcance y captar nuevos pacientes.',
      en: 'Ad and campaign management on Meta Ads to increase reach and attract new patients.',
    },
    category: 'asesoria',
    client: 'Logoterapia Mérida',
    tags: {
      es: ['Meta Ads', 'Campañas', 'Anuncios', 'Salud'],
      en: ['Meta Ads', 'Campaigns', 'Ads', 'Health'],
    },
    image: null,
    images: [],
    placeholder: true,
  },
];

export const categoryLabels = {
  web: 'Desarrollo Web',
  marketing: 'Marketing Digital',
  asesoria: 'Asesoría de Negocio',
};
