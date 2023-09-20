/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="experience-content">
        <h2 className="experience-title">Experience</h2>
        <div className="jobs">
          <h3>Engineering Summer Analyst</h3>
          <h4>Goldman Sachs</h4>
          <p className="job-date">June 2023 - August 2023</p>
          <div className="job-description">
            <p>
              Designed database schema, implemented backend business
              logic, and deployed cloud infrastructure for security
              key management application
            </p>
            <ul>
              <li>
                Coded serverless AWS Lambda functions to handle
                requests for database migrations and CRUD operations
              </li>
              <li>
                Utilized Flask to design serverless, event-driven
                backend that uses AWS Lambda functions for handling
                CRUD API requests and database migrations
              </li>
              <li>
                Developed Infrastructure as Code to deploy an
                Application Load Balancer, Aurora PostgreSQL database,
                Lambda functions, and security groups to AWS to
                support application's cloud environment
              </li>
            </ul>
          </div>
          <h3>Engineering Summer Analyst</h3>
          <h4>Goldman Sachs</h4>
          <p className="job-date">June 2022 - August 2022</p>
          <div className="job-description">
            <p>
              Developed a microservice which orchestrates data event
              routing logic for deferred compensation workflow
            </p>
            <ul>
              <li>
                Utilized distributed, event-driven system Apache Kafka
                as streaming platform for managing data life cycle
              </li>
              <li>
                Created a Node.js project using Typescript for
                development and Jest for testing
              </li>
              <li>
                Used Infrastructure as Code to upload the service to
                AWS Lambda, with invocation available via AWS API
                Gateway
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
