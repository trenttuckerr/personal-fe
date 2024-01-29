import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/bootstrap/css/Bootstrap-Min.css';
import './assets/fonts/Font-Awesome-Min.css';
import './assets/css/bs-theme-overrides.css';
import './assets/css/Aos-Min.css';
import './assets/css/Banner-Heading-Images.css';
import './assets/css/Client-Logo-Slider.css';
import './assets/css/Features-Small-Icons-Color.css';
import './assets/css/Responsive-Blog-Card-Slider.css';
import './assets/css/Slider-Layer-2-Slider.css';
import './assets/css/Slider-Layer-2-Skin.css';
import './assets/css/Swiper-Slider-Card-Min.css';
import './assets/css/Swiper-Slider-Card.css';
import './assets/css/Team-With-Rotating-Cards-Custom.css';
import './assets/css/Team-With-Rotating-Cards.css';
import './assets/css/Timeline-Edits.css';
import './assets/css/Timeline.css';
import './assets/css/Dark-Bg.css';
import './assets/css/Box-Sizing.css';
import './assets/css/Light-Opacity.css';
import './assets/css/Light-Bg.css';
import './assets/css/Navbar.css';
import './assets/css/Text-Mute.css';
import './assets/css/Logos.css';
import './assets/css/Logos-Before-After.css';
import './assets/css/Sliding-Objects.css';
import './assets/css/Image-Gradient.css';
import './assets/css/Timing.css';
import './assets/css/Sizing.css';
import './assets/css/Vertical-Image-Scroll.css';
import './assets/fonts/Fontawesome-Webfont.eot';
import './assets/fonts/Fontawesome-Webfont.svg';
import './assets/fonts/Fontawesome-Webfont.ttf';
import './assets/fonts/Fontawesome-Webfont.woff';
import './assets/fonts/Fontawesome-Webfont.woff2';
import './assets/fonts/FontAwesome.otf';
import './assets/css/Responsive-News-Card-Slider-Styles-Min.css';
import './assets/css/Responsive-News-Card-Slider.css';
import './assets/bootstrap/css/Bootstrap-Min-Alt.css';
import './assets/css/Swipe-Slider-9.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Experience />
    <Education />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);
