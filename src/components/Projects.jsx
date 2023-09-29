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
            View Project
          </a>
          <h3>MySQL Database Design Project</h3>
          <p>A database design project using MySQL. The project aimed to design
            entity-relationship, construct relational schema, and implement the SQL 
            database to a Digital Ocean droplet.</p>
          <a href="#" className="project-button">
            View Project
          </a>
          <h3></h3>
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
