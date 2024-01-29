import React from 'react';

const Projects = () => {
  return (
    <>
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
                href="#portfolioModal1"
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
                  AWS Lambda Microservice
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
                  Autonomous Vehicle PoC
                </h4>
                <p
                  style={{
                    color: '#4AF626',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  DevOps + Fullstack + UCD
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
                  React + UI / UX + DevOps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="modal fade text-center portfolio-modal"
        role="dialog"
        tabIndex="-1"
        id="portfolioModal1"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{ backgroundColor: 'black' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body" style={{ color: 'white' }}>
                    <h2 style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      AWS Lambda Microservice
                    </h2>
                    <p className="item-intro" style={{ color: '#4AF626' }} >
                      A microservice developed in part of a Goldman
                      Sachs rearchitecture of deferred compensation
                      products to AWS.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/microservices.png"
                      alt="Microservices"
                    />
                    <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'white' }}>
                      In the summer of 2022 I interned at Goldman
                      Sachs. I was working within the Controllers
                      division, specifically Compensation Accounting.
                      My work fell within a new architecture for our
                      deferred compensation products. These products
                      were architected to utilize cloud services on
                      AWS. I developed a microservice using AWS Lambda
                      and AWS API Gateway. Development took place
                      using Node.js, TypeScript, and Jest. By the end
                      of my internship, I had the endpoint exposed for
                      the API. With this, the scalable service was
                      ready to be called for its business logic.
                    </p>
                    <ul className="list-unstyled" style={{ color: 'white' }}>
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Date: Summer 2022
                      </li>
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Developed for: Goldman Sachs
                      </li>
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Category: Microservice, Cloud, Backend
                      </li>
                    </ul>                    
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-dismiss="modal"
                      style={{
                        background: 'black',
                        fontFamily: 'DM Sans, sans-serif',
                        borderStyle: 'solid',
                        borderColor: '#4AF626',
                      }}
                    >
                      <i className="fa fa-times" style={{color:'#4AF626'}}></i>
                      <span style={{color:'#4AF626'}}>&nbsp;Close Project</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade text-center portfolio-modal"
        role="dialog"
        tabIndex="-1"
        id="portfolioModal2"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{ backgroundColor: 'black' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    <h2 style={{ fontFamily: 'DM Sans, sans-serif', color:'white' }}>
                      Security Key Management App
                    </h2>
                    <p
                      className="item-intro"
                      style={{ fontFamily: 'DM Sans, sans-serif', color: '#4AF626' }}
                    >
                      A full-stack, AWS cloud-native project which
                      manages security keys for Goldman Sachs.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/key-logo.jpg"
                      alt="Key Logo"
                    />
                    <p style={{ fontFamily: 'DM Sans, sans-serif', color:'white' }}>
                      In the summer of 2023 I returned to Goldman
                      Sachs for another internship. I worked within
                      the same division, Controllers and on the same
                      team of Compensation Accounting. This summer I
                      worked on a full-stack project, spanning across
                      3 repositories: Backend for AWS Lambda
                      functions, Infrastructure as Code for deploying
                      infrastructure, and Frontend for hosting the UI.
                      This project&apos;s purpose was to create an
                      application that centralizes, manages, and
                      rotates cryptographic security keys. I designed
                      the database schema for this new project and
                      developed database migrations capabilities. The
                      backend consisted of two AWS Lambda functions:
                      one for Create, Read, Update, and Delete (CRUD)
                      operations and one for database migrations. An
                      application load balancer served as the entry
                      point to route to these Lambda APIs. All
                      infrastructure was deployed through code and
                      went through strenuous security checks through
                      Goldman CI/CD Pipelines.
                    </p>
                    <ul className="list-unstyled" style={{ color: 'white' }}>
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Date: Summer 2023
                      </li>
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Developed for: Goldman Sachs
                      </li>
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif' }}
                      >
                        Category: Cloud / Full-Stack / DevOps
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-dismiss="modal"
                      style={{
                        background: 'black',
                        color: '#4AF626',
                        fontFamily: 'DM Sans, sans-serif',
                        borderStyle: 'solid',
                        borderColor: '#4AF626',
                      }}
                    >
                      <i className="fa fa-times" style={{color:'#4AF626'}}></i>
                      <span style={{color:'#4AF626'}}>&nbsp;Close Project</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade text-center portfolio-modal"
        role="dialog"
        tabIndex="-1"
        id="portfolioModal3"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{ backgroundColor: 'black' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    <h2 style={{ fontFamily: 'DM Sans, sans-serif', color:'white' }}>
                      Cloud System Design Service
                    </h2>
                    <p className="item-intro" style={{ color:'#4AF626' }}>
                      A cloud system design tool suite for creating
                      cloud software systems.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/cso_nw_cloud_computing_cloud_network_circuits_by_denis_isakov_gettyimages-966932508_2400x1600-100814451-large-100929305-large.webp"
                      alt="Cloud System Design"
                    />
                    <p style={{ fontFamily: 'DM Sans, sans-serif', color:'white' }} >
                      I developed a system design tool for
                      cloud-native software applications. This project
                      offers various services, including up-to-date
                      pricing, system diagramming / visualization, and
                      recommended services based on use case. The
                      frontend of the project is developed using
                      React, and the backend uses Django. All
                      deployments are made on DigitalOcean droplet,
                      which uses Nginx and Gunicorn for hosting the
                      project.
                    </p>
                    <ul className="list-unstyled">
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif', color: 'white' }}
                      >
                        Date: Fall 2023 - Spring 2024
                      </li>
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif', color: 'white' }}
                      >
                        Developed for: personal project
                      </li>
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif', color: 'white' }}
                      >
                        Category: Cloud, System Design, DevOps
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-dismiss="modal"
                      style={{
                        background: 'black',
                        fontFamily: 'DM Sans, sans-serif',
                        borderStyle: 'solid',
                        borderColor: '#4AF626',
                      }}
                    >
                      <i className="fa fa-times" style={{color: '#4AF626'}}></i>
                      <span
                        style={{
                          fontFamily: 'DM Sans, sans-serif',
                          color: '#4AF626',
                        }}
                      >
                        &nbsp;Close Project
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade text-center portfolio-modal"
        role="dialog"
        tabIndex="-1"
        id="portfolioModal4"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{ backgroundColor: 'black' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    <h2 style={{ color: 'white' }}>
                      Command Line Tool
                    </h2>
                    <p className="item-intro" style = {{ color:'#4AF626' }}>
                      An operating systems tool for various text and
                      file operations.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/BetterTermScreenshot.png"
                      alt="Screenshot of the CLI Tool"
                    />
                    <p style={{ color: 'white' }}>
                      I developed a command line tool to offer users a
                      product which gives solutions to various file
                      and text operations. The product is called
                      goattool, and it is documented on the linked
                      GitHub repository. I coded the
                      application&apos;s logic in C, and I created
                      testing using Bash.
                    </p>
                    <ul className="list-unstyled" style={{ color: 'white' }}>
                      <li>Date: Fall 2023</li>
                      <li>
                        GitHub:{' '}
                        <a href="https://www.github.com/trenttuckerr/goattool">
                          https://www.github.com/trenttuckerr/goattool
                        </a>
                      </li>
                      <li>Category: C, Bash, Operating Systems</li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-dismiss="modal"
                      style={{
                        background: 'black',
                        fontFamily: 'DM Sans, sans-serif',
                        borderStyle: 'solid',
                        borderColor: '#4AF626',
                      }}
                    >
                      <i className="fa fa-times" style={{color:'#4AF626'}}></i>
                      <span style={{color:'#4AF626'}}>&nbsp;Close Project</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade text-center portfolio-modal"
        role="dialog"
        tabIndex="-1"
        id="portfolioModal5"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{ backgroundColor: 'black' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    <h2 style={{ fontFamily: 'DM Sans, sans-serif', color:'white' }}>
                      Autonomous Vehicle PoC
                    </h2>
                    <p className="item-intro" style={{color:'#4AF626'}}>
                      Worked on a scrum team of 9 to develop a
                      Transportation as a Service (TaaS) proof of
                      concept which offers medically-related solutions
                      using autonomous vehicles.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/portfolio/5-full.jpg"
                      alt="Desk with notes and computer"
                    />
                    <p style={{ fontFamily: 'DM Sans, sans-serif', color: 'white' }}>
                      Autonomous Vehicles are in interesting and
                      inspiring topic. Aside from its primary
                      function, to transport a human, how can we
                      utilize this powerful technology to improve the
                      quality of life for society. I worked on a scrum
                      team to develop plugins for a Transportation as
                      a Service project. The plugins served various
                      medically-related issues that can be solved with
                      the usage of autonomous vehicles to accomplish
                      the task. The team of 9 rotated different
                      positions throughout the 4 month time period. I
                      was devops engineer, backend developer, and
                      frontend developer. With the wide range of work
                      the positions offered me, I was able to gather
                      insights from various perspectives of a software
                      project. The team developed a mutlicloud web
                      application to demonstrate our services.
                    </p>
                    <ul className="list-unstyled">
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif', color: 'white' }}
                      >
                        Date: Spring 2023
                      </li>
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif', color: 'white' }}
                      >
                        Developed for: Proof of Concept, Research
                      </li>
                      <li
                        style={{ fontFamily: 'DM Sans, sans-serif', color:'white' }}
                      >
                        Category: Business, Software Engineering,
                        User-Centered Design
                      </li>
                    </ul>

                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-dismiss="modal"
                      style={{
                        background: 'black',
                        fontFamily: 'DM Sans, sans-serif',
                        borderStyle: 'solid',
                        borderColor: '#4AF626',
                      }}
                    >
                      <i className="fa fa-times" style={{color:'#4AF626'}}></i>
                      <span
                        style={{ fontFamily: 'DM Sans, sans-serif', color:'#4AF626' }}
                      >
                        &nbsp;Close Project
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade text-center portfolio-modal"
        role="dialog"
        tabIndex="-1"
        id="portfolioModal6"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content" style={{ backgroundColor: 'black' }}>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <div className="modal-body">
                    <h2 style={{ fontFamily: 'DM Sans, sans-serif', color: 'white' }}>
                      Personal Website
                    </h2>
                    <p className="item-intro" style={{color:'#4AF626'}}>
                      Created my personal website using React,
                      DigitalOcean, and GoDaddy.
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src="assets/img/unnamed.png"
                      alt="Personal Website"
                    />
                    <p style={{ color: 'white' }}>
                      In the fall of 2023, I decided to make my own
                      website. I chose React to be the technology to
                      power my frontend. I started this journey with
                      securing my domain name through GoDaddy. Then, I
                      setup my DigitalOcean droplet through the
                      terminal by setting up my server with all
                      required dependencies, as well as linking the
                      domain name to the droplet&apos;s IP address.
                      After this, I developed the frontend React
                      components and pushed my code to my frontend
                      repository. This codebase uses some custom CI/CD
                      pipelines I have implemented for my workflow, to
                      ensure quality and forward-thinking changes to
                      my codebase. I will update this site
                      occasionally, when I see fit.
                    </p>
                    <ul className="list-unstyled" style={{ color:'white' }}>
                      <li>Date: Fall 2023</li>
                      <li>Developed for: personal project</li>
                      <li>Category: DevOps, React, Frontend</li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      type="button"
                      data-bs-dismiss="modal"
                      style={{
                        background: 'black',
                        fontFamily: 'DM Sans, sans-serif',
                        borderStyle: 'solid',
                        borderColor: '#4AF626',
                      }}
                    >
                    
                      <i className="fa fa-times" style={{color: '#4AF626'}}></i>
                      <span style={{color:'#4AF626'}}>&nbsp;Close Project</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
