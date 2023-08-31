import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-content">
        <h2 className="experience-title">Experience</h2>
        <div className="job">
          <h3>Software Developer Intern</h3>
          <p className="job-date">June 2022 - August 2022</p>
          <p className="job-description">
            Worked on developing web applications using React and Node.js.
            Collaborated with cross-functional teams to deliver innovative solutions.
          </p>
        </div>
        <div className="job">
          {/* Repeat this structure for each job experience */}
        </div>
      </div>
    </section>
  );
}

export default Experience;
