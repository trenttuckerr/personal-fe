import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-content">
        <h2 className="experience-title">Professional Experience</h2>
        <div className="job">
          <h3 className="job-title">Engineering Summer Analyst</h3>
          <p className="job-company">Goldman Sachs</p>
          <p className="job-location">New York City Metropolitan Area</p>
          <p className="job-date">June 2023 - August 2023</p>
          <div className="job-description">
            <p>
              Designed database schema, implemented backend business
              logic, and deployed cloud infrastructure for a security
              key management application.
            </p>
            <ul className="job-highlights">
              <li>
                Developed serverless AWS Lambda functions to handle
                requests for database migrations and CRUD operations.
              </li>
              <li>
                Utilized Flask to design a serverless, event-driven
                backend that uses AWS Lambda functions for handling
                CRUD API requests and database migrations.
              </li>
              <li>
                Developed Infrastructure as Code to deploy an
                Application Load Balancer, Aurora PostgreSQL database,
                Lambda functions, and security groups to AWS to
                support the application's cloud environment.
              </li>
            </ul>
          </div>
        </div>
        <div className="job">
          <h3 className="job-title">Engineering Summer Analyst</h3>
          <p className="job-company">Goldman Sachs</p>
          <p className="job-location">New York City Metropolitan Area</p>
          <p className="job-date">June 2022 - August 2022</p>
          <div className="job-description">
            <p>
              Developed a microservice that orchestrates data event
              routing logic for the deferred compensation workflow.
            </p>
            <ul className="job-highlights">
              <li>
                Utilized a distributed, event-driven system with Apache Kafka
                as a streaming platform for managing data lifecycle.
              </li>
              <li>
                Created a Node.js project using Typescript for
                development and Jest for testing.
              </li>
              <li>
                Used Infrastructure as Code to upload the service to
                AWS Lambda, with invocation available via AWS API
                Gateway.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
