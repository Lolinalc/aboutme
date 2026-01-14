import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="app__content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="app__footer">
        <p>© 2025 Lolina. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
