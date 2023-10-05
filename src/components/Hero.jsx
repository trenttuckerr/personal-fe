import React, { useState, useEffect } from 'react';
import '../styles/GlobalStyles.css';
import '../styles/Hero.css';

function Hero() {
  const [popIn, setPopIn] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      setPopIn(true);
    }, 500);

    return () => clearTimeout(delay);
  }, []);

  const [typedText, setTypedText] = useState('');
  const fullText = 'Developed using React / Vite';
  const typingSpeed = 175;
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, currentIndex));
      currentIndex++;
      if (currentIndex > fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className={`hero-content ${popIn ? 'pop-in' : ''}`}>
        <h1 className="hero-title">Welcome to my personal website</h1>
        <p className="hero-subtitle">
          {typedText}
          <span className="typing-cursor"></span>
        </p>
        <a
          href="https://github.com/trenttuckerr/mern-personal-fe"
          className="cta-button"
        >
          View website code
        </a>
      </div>
    </section>
  );
}

export default Hero;
