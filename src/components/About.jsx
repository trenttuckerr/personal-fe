/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import '../styles/About.css';
import '../styles/index.css';
import HoodieImage from '../assets/hoodie.png';
import StedsImage from '../assets/steds.png';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className={`about ${
        isVisible ? 'transition-fade-in' : 'transition-fade'
      }`}
      id="about"
    >
      <div className="about-content">
        <div className="about-border">
          <div className="about-text">
            <h2 className="about-title glitch-effect">About Me</h2>
            <p className="about-description">
              <strong>Hello!</strong> I'm a current computer science
              student at <strong>St. Edward's University</strong> in
              Austin, Texas. My passion for computer science drives my
              strong interest in <strong>cloud computing</strong>,{' '}
              <strong>software engineering</strong>, and{' '}
              <strong>system design</strong>.
              <br />
              <br />
              <strong>Industry Experience:</strong> I've gained
              valuable industry experience through multiple
              internships at <strong>Goldman Sachs</strong>. During my
              time there, I focused on providing{' '}
              <strong>cloud-native solutions</strong> for complex
              business problems.
              <br />
              <br />
              <strong>My Journey:</strong> Join me on my journey as I
              explore the limitless possibilities of technology and
              innovation.
            </p>
          </div>
          <div className="about-images">
            <div className="about-image">
              <img
                src={StedsImage}
                alt="Steds"
                className="glitch-image"
              />
            </div>
            <div className="about-image">
              <img
                src={HoodieImage}
                alt="Hoodie"
                className="glitch-image"
              />
            </div>
            <div className="about-image">
              <img
                src={StedsImage}
                alt="Steds"
                className="glitch-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
