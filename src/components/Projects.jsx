import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2 className="projects-title">Projects</h2>
        <div className="project">
          {/* <img src="project-image.jpg" alt="Project" /> */}
          <h3>Transportation as a Service WeGo Project</h3>
          <p>Practiced scrum and agile on a team of 9 to develop a PoC that
          was designed to serves medically-related issues utilizing autonomous
          vehicles.</p>
          <a href="#" className="project-button">
            Topics Covered:
          </a>
          <ul>
            <li>DevOps work includes setting up Digital Ocean cloud environment by configuring firewall, setting up nginx, installing components, creating Flask app, writing Gunicorn service file, and retrieving SSL certificate for domain</li>
            <li>Designed and developed API in Python to allow for cross-cloud communicatiom</li>
            <li>Gathered UCD artifacts using personas and product canvases to develop a product that adheres to user needs</li>
          </ul>
          <h3>MySQL Database Project</h3>
          <p>Designed database for a novel idea. Constructed data model creating entity relation diagram and relational schema. Wrote SQL through the terminal to deploy database to server.</p>
          <a href="#" className="project-button">
            Topics Covered:
          </a>
          <ul>
            <li>Implemented a scalable data model to accommodate future growth and evolving data requirements, emphasizing forward thinking.</li>
            <li></li>
            <li>Third bullet point</li>
          </ul>
          <h3>Personal Website</h3>
          <p>Practiced scrum and agile on a team of 9 to develop a PoC that
          was designed to serves medically-related issues utilizing autonomous
          vehicles.</p>
          <a href="#" className="project-button">
            Topics Covered:
          </a>
          <ul>
            <li>First bullet point</li>
            <li>Second bullet point</li>
            <li>Third bullet point</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
