import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Thero from './components/Thero.jsx';
import Footer from './components/Footer.jsx';
import './styles/GlobalStyles.css';
// import './styles/index.css';
// import './styles/Tailwind.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Thero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
  </React.StrictMode>
);
