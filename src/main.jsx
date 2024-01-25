import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/bootstrap/css/bootstrap.min.css';
import './assets/fonts/font-awesome.min.css';
import './assets/css/bs-theme-overrides.css';
import './assets/css/aos.min.css';
import './assets/css/Banner-Heading-Image-images.css';
import './assets/css/Client-Logo-Slider.css';
import './assets/css/Features-Small-Icons-Color-icons.css';
import './assets/css/responsive-blog-card-slider.css';
import './assets/css/Slider-layer-2-layerslider.css';
import './assets/css/Slider-layer-2-skin.css';
import './assets/css/Swiper-Slider-Card-For-Blog-Or-Product-swiper.min.css';
import './assets/css/Swiper-Slider-Card-For-Blog-Or-Product-untitled.css';
import './assets/css/Team-with-rotating-cards-1.css';
import './assets/css/Team-with-rotating-cards.css';
import './assets/css/timeline_12073_SaraSantos.css';
import './assets/css/Timeline.css';
import './assets/css/untitled-1.css';
import './assets/css/untitled-10.css';
import './assets/css/untitled-11.css';
import './assets/css/untitled-12.css';
import './assets/css/untitled-13.css';
import './assets/css/untitled-14.css';
import './assets/css/untitled-2.css';
import './assets/css/untitled-3.css';
import './assets/css/untitled-4.css';
import './assets/css/untitled-5.css';
import './assets/css/untitled-6.css';
import './assets/css/untitled-7.css';
import './assets/css/untitled-8.css';
import './assets/css/untitled-9.css';
import './assets/css/Vertical-Image-Scroll.css';
import './assets/fonts/fontawesome-webfont.eot';
import './assets/fonts/fontawesome-webfont.svg';
import './assets/fonts/fontawesome-webfont.ttf';
import './assets/fonts/fontawesome-webfont.woff';
import './assets/fonts/fontawesome-webfont.woff2';
import './assets/fonts/FontAwesome.otf';
import './assets/css/Responsive-News-Card-Slider-styles.min.css';
import './assets/css/Responsive-News-Card-Slider.css';
import './assets/bootstrap/css/bootstrap.min2.css';
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
