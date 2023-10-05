import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2 className="projects-title">Various Projects</h2>
        <div className="project">
          <h3>Transportation as a Service WeGo Project</h3>
          <p>
            Practiced scrum and agile on a team of 9 to develop a PoC
            that was designed to serve medically-related issues
            utilizing autonomous vehicles.
          </p>
          <h4>Topics Covered</h4>
          <ul>
            <li>
              DevOps work includes setting up Digital Ocean cloud
              environment by configuring firewall, setting up nginx,
              installing components, creating Flask app, writing
              Gunicorn service file, and retrieving SSL certificate
              for domain.
            </li>
            <li>
              Designed and developed API in Python to allow for
              cross-cloud communication.
            </li>
            <li>
              Gathered UCD artifacts using personas and product
              canvases to develop a product that adheres to user
              needs.
            </li>
          </ul>
        </div>
        <div className="project">
          <h3>MySQL Database Project</h3>
          <p>
            Designed a database for a novel idea. Constructed a data
            model creating an entity relation diagram and relational
            schema. Wrote SQL through the terminal to deploy the
            database to the server.
          </p>
          <h4>Topics Covered</h4>
          <ul>
            <li>
              Implemented a scalable data model to accommodate future
              growth and evolving data requirements, emphasizing
              forward thinking.
            </li>
            <li>
              Developed SQL scripts and queries to create, populate,
              and manage the database, utilizing terminal-based tools
              for server deployment.
            </li>
            <li>
              Conducted strenuous testing and validation of the
              database to identify and resolve potential issues,
              ensuring a robust and error-free data management system.
            </li>
          </ul>
        </div>
        <div className="project">
          <h3>Personal Website</h3>
          <p>
            Implemented a React + Vite + JS project utilizing SDLC
            best practices to serve as my personal website. Developed
            using VCS best practice.
          </p>
          <h4>Topics Covered</h4>
          <ul>
            <li>
              Tested React components with Jest and configured CI/CD
              pipeline to ensure healthy code coverage.
            </li>
            <li>
              Successfully connected the domain name to the IP address
              by configuring DNS settings, ensuring proper traffic
              routing to the website.
            </li>
            <li>
              Configured CI/CD pipeline using YAML with GitHub Actions
              to enhance quality assurance and strengthen code
              quality.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Projects;
