import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';
import Header from './Header.jsx';
import Hero from './Hero.jsx';
import About from './About.jsx';
import Skills from './Skills.jsx';
import Projects from './Projects.jsx';
import Experience from './Experience.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
    <Footer />
  </React.StrictMode>
);
