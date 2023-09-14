// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-list">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Cloud</h3>
            <ul>
              <li>Serverless Architecture</li>
              <li>AWS</li>
              <li>Azure</li>
              <li>Google Cloud</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Data Structures</h3>
            <ul>
              <li>Arrays</li>
              <li>Linked Lists</li>
              <li>Trees</li>
              <li>HashMaps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
