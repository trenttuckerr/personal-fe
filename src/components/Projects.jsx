import React from 'react';

const Projects = () => {
  return (
    <section
      className="bg-black"
      id="portfolio"
      style={{ background: 'var(--bs-emphasis-color)' }}
    >
      <div className="container" style={{ background: 'black' }}>
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2
              className="section-heading"
              style={{
                color: 'white',
                background: 'black',
                fontSize: '56px',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Various Projects
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 portfolio-item">
            <a
              className="portfolio-link"
              href="#portfolioModal-1"
              data-bs-toggle="modal"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="assets/img/portfolio/microservices.png"
                style={{ width: '400px', height: '400px' }}
              />
            </a>
            <div
              className="portfolio-caption"
              style={{
                background: 'black',
                borderStyle: 'double',
                borderColor: 'white',
              }}
            >
              <h4
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'white',
                }}
              >
                AWS Microservice
              </h4>
              <p
                style={{
                  color: '#4AF626',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                TypeScript + AWS API Gateway + AWS Lambda
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 portfolio-item">
            <a
              className="portfolio-link"
              href="#portfolioModal2"
              data-bs-toggle="modal"
            >
              <div
                className="portfolio-hover"
                style={{ height: '400px' }}
              >
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="assets/img/portfolio/key-logo.jpg"
                style={{ height: '400px' }}
              />
            </a>
            <div
              className="portfolio-caption"
              style={{
                background: 'black',
                borderStyle: 'double',
                borderColor: 'white',
              }}
            >
              <h4
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'white',
                }}
              >
                Security Key Management App
              </h4>
              <p
                style={{
                  color: '#4AF626',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                AWS Lambda + Load Balancing + API
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 portfolio-item">
            <a
              className="portfolio-link"
              href="#portfolioModal3"
              data-bs-toggle="modal"
            >
              <div
                className="portfolio-hover"
                style={{ height: '400px' }}
              >
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="assets/img/portfolio/cso_nw_cloud_computing_cloud_network_circuits_by_denis_isakov_gettyimages-966932508_2400x1600-100814451-large-100929305-large.webp"
                style={{ height: '400px' }}
              />
            </a>
            <div
              className="portfolio-caption"
              style={{
                background: 'black',
                borderStyle: 'double',
                borderColor: 'white',
              }}
            >
              <h4
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'white',
                }}
              >
                Cloud System Design Service
              </h4>
              <p
                style={{
                  color: '#4AF626',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Cloud Services + React + Django
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 portfolio-item">
            <a
              className="portfolio-link"
              href="#portfolioModal4"
              data-bs-toggle="modal"
            >
              <div
                className="portfolio-hover"
                style={{ height: '400px' }}
              >
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="assets/img/portfolio/BetterTermScreenshot.png"
                style={{ height: '400px' }}
              />
            </a>
            <div
              className="portfolio-caption"
              style={{
                background: 'black',
                borderStyle: 'double',
                borderColor: 'white',
              }}
            >
              <h4
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'white',
                }}
              >
                Command Line Tool
              </h4>
              <p
                style={{
                  color: '#4AF626',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                C + Bash + Algorithm Design
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 portfolio-item">
            <a
              className="portfolio-link"
              href="#portfolioModal5"
              data-bs-toggle="modal"
            >
              <div
                className="portfolio-hover"
                style={{ height: '400px' }}
              >
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="assets/img/portfolio/5-thumbnail.jpg"
                style={{ height: '400px' }}
              />
            </a>
            <div
              className="portfolio-caption"
              style={{
                background: 'black',
                borderStyle: 'double',
                borderColor: 'white',
              }}
            >
              <h4
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'white',
                }}
              >
                TaaS Solution
              </h4>
              <p
                style={{
                  color: '#4AF626',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                DevOps + Fullstack + UI / UX
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 portfolio-item">
            <a
              className="portfolio-link"
              href="#portfolioModal6"
              data-bs-toggle="modal"
            >
              <div
                className="portfolio-hover"
                style={{ height: '400px' }}
              >
                <div className="portfolio-hover-content">
                  <i className="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid"
                src="assets/img/unnamed.png"
                style={{ height: '400px' }}
              />
            </a>
            <div
              className="portfolio-caption"
              style={{
                background: 'transparent',
                borderStyle: 'double',
                borderColor: 'white',
              }}
            >
              <h4
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: 'white',
                }}
              >
                Personal Website
              </h4>
              <p
                style={{
                  color: '#4AF626',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                React + UI/UX + DevOps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
