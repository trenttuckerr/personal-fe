import React, { useState, useEffect } from 'react';
import '../styles/About.css';
import HoodieImage from '../assets/hoodie.png';
import StedsImage from '../assets/steds.png';
import AppleImage from '../assets/apple.jpg';

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
            <h2 className="about-title">About Me</h2>
            <p className="about-description">
              <strong>Hello.</strong> I&apos;m a current senior
              computer science student at{' '}
              <strong>St. Edward&apos;s University</strong> in Austin,
              Texas. I hold a strong interest in{' '}
              <strong>cloud computing</strong>,{' '}
              <strong>backend web development</strong>, and{' '}
              <strong>devops</strong>.
              <br />
              <br />
              <strong>Industry Experience:</strong> I&apos;ve gained
              valuable industry experience through multiple
              internships at <strong>Goldman Sachs</strong>. During my
              time there, I focused on providing{' '}
              <strong>cloud-native solutions</strong> for complex
              business problems.
              <br />
              <br />
              <strong>Education:</strong> I am currently pursuing a
              B.S. computer science degree at St. Edward&apos;s
              University and am set to graduate in May of 2024. During
              my time here, I have utilized in-depth course work and
              personal projects to dive deep into the nuances of CS.
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
                src={AppleImage}
                alt="Apple"
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
