import React from 'react';
import '../styles/Skills.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <Carousel
          showThumbs={false}
          dynamicHeight={false}
          width="100%"
        >
          <div>
            <div
              className="carousel-content development"
              data-aos="fade-right"
            >
              <div className="section-content">
                <h2 className="skills-title">Technical Skills</h2>
                <h3 className="carousel-title">🛠️ Development 🛠️</h3>
                <ul>
                  <li className="grow-on-hover">🐍 Python</li>
                  <li className="grow-on-hover">☕ Java</li>
                  <li className="grow-on-hover">🚀 JavaScript</li>
                  <li className="grow-on-hover">📘 TypeScript</li>
                  <li className="grow-on-hover">⚛️ React</li>
                  <li className="grow-on-hover">🌐 Node.js</li>
                  <li className="grow-on-hover">🌟 Django</li>
                  <li className="grow-on-hover">🌶️ Flask</li>
                  <li className="grow-on-hover">
                    🔗 API Design and Development
                  </li>
                  <li className="grow-on-hover">📜 Git</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div
              className="carousel-content cloud"
              data-aos="fade-right"
            >
              <div className="section-content">
                <h2 className="skills-title">Technical Skills</h2>
                <h3 className="carousel-title">
                  ☁️ Cloud and Infrastructure ☁️
                </h3>
                <ul>
                  <li className="grow-on-hover">☁️ AWS Lambda</li>
                  <li className="grow-on-hover">
                    🌐 AWS Elastic Load Balancing
                  </li>
                  <li className="grow-on-hover">
                    🐘 AWS Aurora PostgreSQL
                  </li>
                  <li className="grow-on-hover">📊 AWS CloudWatch</li>
                  <li className="grow-on-hover">
                    🏗️ Infrastructure as Code
                  </li>
                  <li className="grow-on-hover">
                    🚪 AWS API Gateway
                  </li>
                  <li className="grow-on-hover">
                    🏢 Serverless Architecture
                  </li>
                  <li className="grow-on-hover">
                    🏗️ CI/CD Infrastructure Deployment
                  </li>
                  <li className="grow-on-hover">🚀 Scalability</li>
                  <li className="grow-on-hover">🐳 Docker</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div
              className="carousel-content devops"
              data-aos="fade-right"
            >
              <div className="section-content">
                <h2 className="skills-title">Technical Skills</h2>
                <h3 className="carousel-title">
                  🛠️ DevOps and Tools 🛠️
                </h3>
                <ul>
                  <li className="grow-on-hover">
                    🔄 CI/CD Pipelines
                  </li>
                  <li className="grow-on-hover">
                    🐳 Containerization with Docker
                  </li>
                  <li className="grow-on-hover">
                    🏗️ Infrastructure as Code using AWS CDK
                  </li>
                  <li className="grow-on-hover">
                    📊 Log Analysis and Parsing with AWS CloudWatch
                  </li>
                  <li className="grow-on-hover">
                    🔧 Web Server Configuration
                  </li>
                  <li className="grow-on-hover">
                    📜 YAML Configurations for CI/CD
                  </li>
                  <li className="grow-on-hover">
                    🚀 Server Administration
                  </li>
                  <li className="grow-on-hover">
                    🤖 Test Automation
                  </li>
                  <li className="grow-on-hover">
                    🌐 DNS Configuration
                  </li>
                  <li className="grow-on-hover">🔵 Bash</li>
                </ul>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Skills;
