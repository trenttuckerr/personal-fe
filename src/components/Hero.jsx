// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import backgroundVideoWebm from '../assets/ai.webm';
import backgroundVideoMp4 from '../assets/AI.mp4';
import '../styles/Hero.css';

function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Welcome to my Personal Website';
  const typingSpeed = 100; // Milliseconds per character

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
      <div className="background-video">
        <video
          autoPlay
          loop
          muted
          playsInline
          src={backgroundVideoMp4}
          type="video/mp4"
        >
          <source src={backgroundVideoMp4} type="video/mp4" />
          <source src={backgroundVideoWebm} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">{typedText}</h1>
        <p className="hero-subtitle">Developed using React / Vite</p>
        <a
          href="https://github.com/trenttuckerr/mern-personal-fe"
          className="cta-button"
        >
          View the code
        </a>
      </div>
    </section>
  );
}

export default Hero;
