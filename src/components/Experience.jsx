import React from 'react';

const Experience = () => {
  return (
    <section className="experience-section">
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
            src="assets/img/flask-white.png"
            width="48"
            height="50"
          />
          <img src="assets/img/image%20(1).png" />
          <img src="assets/img/junit-24.png" />
          <img src="assets/img/React-icon.svg.png" />
          <img src="assets/img/ts-icon.png" />
          <img src="assets/img/Vitejs-logo.svg.png" />
          <img src="assets/img/python.svg.png" />
          <img src="assets/img/node-black.png" />
          <img src="assets/img/java-svg.png" />
          <img src="assets/img/javascripy-svg.png" />
        </div>
        <div className="logos-slide">
          <img src="assets/img/lambda-svg.svg" />
          <img src="assets/img/django-svg.svg" />
          <img src="assets/img/ele.png" />
          <img src="assets/img/image%20(2).png" />
          <img src="assets/img/c-svg.png" />
          <img src="assets/img/DigitalOcean_icon.svg.png" />
          <img src="assets/img/docker-circle.svg" />
          <img src="assets/img/glcicd.png" />
          <img src="assets/img/awsapigw.png" />
          <img src="assets/img/bslsvg.png" />
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
                  src="assets/img/gsachsdesignsvg.png"
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
                  src="assets/img/gsachsdesignsvg.png"
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
                  src="assets/img/znewest.png"
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
