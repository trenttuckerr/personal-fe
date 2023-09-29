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
        <div className="skills-section">
          <div className="section-image">
            <img src={ProgrammingLanguageImage} alt="Programming Languages" />
          </div>
          <div className="section-content" data-aos="fade-right">
            <h3>Development</h3>
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
        <div className="skills-section">
          <div className="section-image">
            <img src={CloudImage} alt="Cloud and Infrastructure" />
          </div>
          <div className="section-content" data-aos="fade-right">
            <h3>Cloud and Infrastructure</h3>
            <ul>
              <li>☁️ AWS Lambda</li>
              <li>☁️ AWS Elastic Load Balancing</li>
              <li>☁️ AWS CloudWatch</li>
              <li>☁️ Infrastructure as Code</li>
              <li> AWS API Gateway</li>
              <li>☁️ Google Cloud</li>
              <li>🐳 Docker</li>
              <li>🐳 Containerization</li>
            </ul>
          </div>
        </div>
        <div className="skills-section">
          <div className="section-image">
            <img src={DevOpsImage} alt="DevOps and Tools" />
          </div>
          <div className="section-content" data-aos="fade-right">
            <h3>DevOps and Tools</h3>
            <ul>
              <li>🛠️ CI/CD Pipelines</li>
              <li>🐳 Containerization with Docker</li>
              <li>🏗️ Infrastructure as Code using AWS CDK</li>
              <li>📊 Monitoring and Logging with AWS CloudWatch</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
