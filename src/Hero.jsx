import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">Exploring the World of Computer Science</p>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
