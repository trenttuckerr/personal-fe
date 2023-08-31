import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-content">
        <h2 className="skills-title">Skills</h2>
        <div className="skills-list">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Web Development</h3>
            <ul>
              <li>React</li>
              <li>HTML5</li>
              <li>CSS3</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Data Structures</h3>
            <ul>
              <li>Arrays</li>
              <li>Linked Lists</li>
              <li>Trees</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
