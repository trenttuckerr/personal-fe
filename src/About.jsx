import React, { useState, useEffect } from 'react';
import './About.css';
import './index.css';

function About() {


    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true); // Trigger the animation on component mount
    }, []);
  return (
    <section className={`about ${isVisible ? 'transition-fade-in' : 'transition-fade'}`} id="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            I'm a passionate Computer Science student with a strong interest in
            algorithms, data structures, and web development. I believe in the
            power of technology to shape the future.
          </p>
        </div>
        <div className="about-image">
          <img src="profile-image.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
}

export default About;
