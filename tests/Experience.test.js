// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Experience from '../src/components/Experience';

describe('Experience Component', () => {
  it('renders without crashing', () => {
    render(<Experience />);
  });

  it('displays the "Experience" title', () => {
    const { getByText } = render(<Experience />);
    const titleElement = getByText('Experience');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays job titles', () => {
    const { getAllByText } = render(<Experience />);
    const jobTitles = getAllByText('Engineering Summer Analyst');

    // Check each job title separately
    jobTitles.forEach((jobTitle) => {
      expect(jobTitle).toBeInTheDocument();
    });
  });

  it('displays company names', () => {
    const { getAllByText } = render(<Experience />);
    const companyNames = getAllByText('Goldman Sachs'); // Use getAllByText to get multiple elements

    // Check each company name separately
    companyNames.forEach((companyName) => {
      expect(companyName).toBeInTheDocument();
    });
  });

  it('displays job dates', () => {
    const { getByText } = render(<Experience />);
    const jobDate1 = getByText('June 2023 - August 2023');
    const jobDate2 = getByText('June 2022 - August 2022');
    // Add more job dates as needed

    expect(jobDate1).toBeInTheDocument();
    expect(jobDate2).toBeInTheDocument();
    // Add more expectations for job dates as needed
  });

  it('displays job descriptions', () => {
    const { getByText } = render(<Experience />);
    const jobDescription1 = getByText(
      'Designed database schema, implemented backend business logic, and deployed cloud infrastructure for security key management application'
    );
    const jobDescription2 = getByText(
      'Developed a microservice which orchestrates data event routing logic for deferred compensation workflow'
    );
    // Add more job descriptions as needed

    expect(jobDescription1).toBeInTheDocument();
    expect(jobDescription2).toBeInTheDocument();
    // Add more expectations for job descriptions as needed
  });
});
