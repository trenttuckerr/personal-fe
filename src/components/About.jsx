import React, { useState, useEffect } from 'react';
import '../styles/About.css';
import '../styles/index.css';

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
            I am a current computer science student at St. Edward's University in
            Austin, Texas. I am a passionate computer science student with a strong
            interest in cloud computing, software engineering, and system design. I
            have industry experience spanning multiple internships at Goldman Sachs, where
            I provided cloud-native solutions to business problems.
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
