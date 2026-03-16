// ─── DATOS DE PORTAFOLIO ───────────────────────────────────────────────────
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
    description:
      'Sitio web profesional para Atma, un espacio dedicado a la sanación y el bienestar. Diseño limpio, intuitivo y alineado con la esencia de la marca.',
    category: 'web',
    client: 'Atma Sanación',
    tags: ['Sitio Web', 'Diseño', 'Responsive', 'Bienestar'],
    image: atmaImg,
    images: [atmaImg],
    placeholder: true,
    url: 'https://atmasanacion.com/',
    github: 'https://github.com/Lolinalc/atma-sanaci-n',
  },
  {
    id: 'web3',
    title: 'Susi Estrada',
    description:
      'Sitio oficial tipo portafolio desarrollado con React 18 + Vite y navegación con React Router v6. SEO on-page implementado con react-helmet-async (títulos y meta dinámicos por ruta). Interfaz modular y mantenible con CSS Modules, variables CSS y tipografías de Google Fonts. Despliegue exitoso en producción con dominio personalizado.',
    category: 'web',
    client: 'Susi Estrada',
    date: 'Marzo 2026',
    tags: ['React', 'Vite', 'React Router', 'SEO', 'CSS Modules', 'Node.js', 'Express'],
    image: susieImg,
    images: [susieImg],
    placeholder: true,
    url: 'https://susiestrada.com/',
  },
  {
    id: 'web2',
    title: 'Rendara',
    description:
      'Sitio web para Rendara, desarrollo completo desde el diseño hasta el despliegue. Experiencia de usuario optimizada y diseño moderno.',
    category: 'web',
    client: 'Rendara MX',
    tags: ['Sitio Web', 'Full Stack', 'Diseño UI/UX', 'Responsive'],
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
    description:
      'Tienda de mayoreo y menudeo de productos de belleza, mercería, papelería, hogar y oficina.',
    category: 'marketing',
    client: 'Bazarísimo',
    tags: ['Redes Sociales', 'Facebook', 'Instagram', 'TikTok', 'Campañas'],
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
        name: 'Campaña Escolar 2025',
        duration: '6 semanas',
        result: 'El doble de ventas a comparación del año pasado',
      },
      {
        name: 'Campaña Navideña 2025',
        duration: '7 semanas',
        result: '70% más ventas a comparación del año pasado',
      },
    ],
  },
  {
    id: 'mkt2',
    title: 'Croquelivery',
    description:
      'Venta de alimento para mascotas y animales al por mayor y menudeo.',
    category: 'marketing',
    client: 'Croquelivery',
    tags: ['Redes Sociales', 'Facebook', 'Instagram', 'Mascotas'],
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
    description:
      'Ferretería con más de 20 años en la comunidad de Hunucmá, la calidad respalda a esta compañía.',
    category: 'marketing',
    client: 'Lolina Ferretería',
    tags: ['Redes Sociales', 'Facebook', 'Instagram', 'Branding'],
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
    description:
      'Mueblería con más de 20 años en la comunidad de Hunucmá. Productos como electrodomésticos, motos, triciclos, bicicletas y más.',
    category: 'marketing',
    client: 'Lolina Mueblería',
    tags: ['Redes Sociales', 'Facebook', 'Instagram', 'Campañas'],
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
        name: 'Campaña GoGo 2025',
        duration: '3 meses',
        result: 'Ventas mayores y reconocimiento del producto en la comunidad',
      },
    ],
  },
  // ─── Asesoría ───
  {
    id: 'ase1',
    title: "Escuela U Yits Ka'an",
    description:
      "Escuela de Agricultura Ecológica. Curso sobre manejo de redes sociales, campaña digital para celebrar los 30 años de la escuela y campañas para eventos del Tianguis Agroecológico.",
    category: 'asesoria',
    client: "U Yits Ka'an",
    tags: ['Curso Redes Sociales', 'Campaña Digital', 'Eventos', 'Agroecología'],
    image: uyitsImg,
    images: [uyitsImg],
    placeholder: true,
  },
  {
    id: 'ase2',
    title: 'Almacenes Don Ramón',
    description:
      'Capacitación y curso sobre manejo de redes sociales para potenciar la presencia digital del negocio.',
    category: 'asesoria',
    client: 'Almacenes Don Ramón',
    tags: ['Curso Redes Sociales', 'Capacitación', 'Estrategia Digital'],
    image: null,
    images: [],
    placeholder: true,
  },
  {
    id: 'ase3',
    title: 'Logoterapia Mérida',
    description:
      'Manejo de anuncios y campañas en Meta Ads para aumentar el alcance y captar nuevos pacientes.',
    category: 'asesoria',
    client: 'Logoterapia Mérida',
    tags: ['Meta Ads', 'Campañas', 'Anuncios', 'Salud'],
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
