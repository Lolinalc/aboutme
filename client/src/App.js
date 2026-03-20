import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './i18n';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';
import ServicesPage from './pages/ServicesPage';
import ServiceDetail from './pages/ServiceDetail';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        {/* Ruta específica de servicio ANTES de cualquier genérica */}
        <Route path="/servicios/:serviceId" element={<ServiceDetail />} />
        <Route path="/proceso" element={<ProcessPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        {/* Ruta específica de proyecto ANTES de la ruta genérica de categoría */}
        <Route path="/portfolio/proyecto/:projectId" element={<ProjectDetail />} />
        <Route path="/portfolio/:category" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
