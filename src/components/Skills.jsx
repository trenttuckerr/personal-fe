// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/Skills.css';
import ProgrammingLanguageImage from '../assets/ProgrammingLanguages.jpg';
import CloudImage from '../assets/Cloud.jpg';
import DevOpsImage from '../assets/DevOps.jpg';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-table">
          <div className="table-row" data-aos="fade-up">
            <div className="table-cell">
              <h3>Development</h3>
              <div className="category-image">
                <img
                  src={ProgrammingLanguageImage}
                  alt="Programming Language Visual"
                />
              </div>
            </div>
            <div className="table-cell">
              <ul>
                <li>🐍 Python</li>
                <li>☕ Java</li>
                <li>🚀 JavaScript</li>
                <li>📘 TypeScript</li>
                <li>⚛️ React</li>
                <li>🌐 Node.js</li>
                <li>🌟 Express.js</li>
                <li>🌶️ Flask</li>
                <li>🔗 API Design and Development</li>
                <li>📜 Git</li>
              </ul>
            </div>
          </div>
          <div className="table-row" data-aos="fade-up">
            <div className="table-cell">
              <h3>Cloud and Infrastructure</h3>
              <div className="category-image">
                <img src={CloudImage} alt="Cloud Visual" />
              </div>
            </div>
            <div className="table-cell">
              <ul>
                <li>☁️ AWS (Amazon Web Services)</li>
                <li>🌐 Azure</li>
                <li>☁️ Google Cloud</li>
                <li>🐳 Docker</li>
                <li>☸️ Kubernetes</li>
                <li>🌍 Terraform</li>
              </ul>
            </div>
          </div>
          <div className="table-row" data-aos="fade-up">
            <div className="table-cell">
              <h3>DevOps and Tools</h3>
              <div className="category-image">
                <img src={DevOpsImage} alt="DevOps Visual" />
              </div>
            </div>
            <div className="table-cell">
              <ul>
                <li>🛠️ CI/CD Pipelines</li>
                <li>🐳 Containerization with Docker</li>
                <li>🏗️ Infrastructure as Code using AWS CDK</li>
                <li>📊 Monitoring and Logging with AWS CloudWatch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
