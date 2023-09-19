// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <div className="project">
          {/* <img src="project-image.jpg" alt="Project" /> */}
          <h3>Project Title</h3>
          <p>Short project description goes here.</p>
          <a href="#" className="project-button">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
