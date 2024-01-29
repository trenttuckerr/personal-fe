import React from 'react';

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h2
        style={{
          color: 'white',
          fontFamily: 'DM Sans, sans-serif',
          fontSize: '58px',
          textAlign: 'center',
          marginBottom: '0px',
        }}
      >
        Experience
      </h2>
      <div data-aos="fade-up" className="logos">
        <div className="logos-slide">
          <img
            src="assets/img/Flask-White-Logo.png"
            width="48"
            height="50"
          />
          <img src="assets/img/AWS-Logo.png" />
          <img src="assets/img/Junit-Logo.png" />
          <img src="assets/img/React-Logo.png" />
          <img src="assets/img/TS-Logo.png" />
          <img src="assets/img/Vite-Logo.png" />
          <img src="assets/img/Python-Logo.png" />
          <img src="assets/img/Node-Logo.png" />
          <img src="assets/img/Java-Logo.png" />
          <img src="assets/img/JavaScript-Logo.png" />
        </div>
        <div className="logos-slide">
          <img src="assets/img/Lambda-Logo.svg" />
          <img src="assets/img/Django-Logo.svg" />
          <img src="assets/img/Postgres-Logo.png" />
          <img src="assets/img/Swift-Logo.png" />
          <img src="assets/img/C-Logo.png" />
          <img src="assets/img/DigitalOcean-Logo.png" />
          <img src="assets/img/Docker-Logo.svg" />
          <img src="assets/img/GitLab-CICD-Logo.png" />
          <img src="assets/img/AWS-APIGW-Logo.png" />
          <img src="assets/img/Bootstrap-Studio-Logo.png" />
        </div>
      </div>
      <section id="section-timeline">
        <div
          data-aos="fade"
          className="timeline time-body"
          style={{ background: 'transparent' }}
        >
          <div className="time-container left">
            <div className="time-content">
              <h2 style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Goldman Sachs, <em>Summer Analyst</em>
              </h2>
              <h2
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '23px',
                }}
              >
                Summer 2022 in NYC
              </h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Worked within the Controllers division of GS in
                Compensation Accounting. Developed an AWS microservice
                using AWS Lambda and AWS API Gateway. This
                microservice was part of a migration to AWS cloud for
                Compensation Accounting. The project handled employee
                data for deferred payments.&nbsp;
              </p>
              <picture>
                <img
                  src="assets/img/Goldman-Sachs-Logo.png"
                  style={{ width: '192px', height: '176px' }}
                />
              </picture>
            </div>
          </div>
          <div className="time-container right">
            <div className="time-content">
              <h2 style={{ fontFamily: 'DM Sans, sans-serif' }}>
                Goldman Sachs, <em>Summer Analyst</em>
              </h2>
              <h2
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '23px',
                }}
              >
                Summer 2023 in NYC
              </h2>
              <p>
                Returned to Compensation Accounting within
                Controllers. Focus was on developing a robust security
                key management application using AWS cloud services.
                AWS Elastic Load Balancing and AWS Lambda were used in
                backend. Heavy emphasis on database migrations to
                ensure future scalability of product. CRUD API
                endpoints exposed with security measures in place.
              </p>
              <picture>
                <img
                  src="assets/img/Goldman-Sachs-Logo.png"
                  style={{ width: '192px', height: '176px' }}
                />
              </picture>
            </div>
          </div>
          <div className="time-container left">
            <div className="time-content">
              <h2 style={{ fontFamily: 'DM Sans, sans-serif' }}>
                St. Edward&apos;s University,{' '}
                <em>Teaching Assistant</em>
              </h2>
              <h2
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '23px',
                }}
              >
                Spring 2024 in Austin
              </h2>
              <p>
                TA for COSC-3339, <em>Software Engineering</em>.
                Spring semester of 2024.
              </p>
              <picture>
                <img
                  src="assets/img/St-Edwards-Logo.png"
                  style={{ width: '192px', height: '176px' }}
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Experience;
