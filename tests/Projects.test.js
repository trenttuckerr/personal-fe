import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../src/components/Projects';

describe('Projects Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Projects />);
    expect(container).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    const { container } = render(<Projects />);
    const projects = container.querySelector('.projects');
    expect(projects).toHaveClass('projects');
  });

  it('renders the projects title', () => {
    const { getByText } = render(<Projects />);
    const projectsTitle = getByText('Various Projects');
    expect(projectsTitle).toBeInTheDocument();
  });

  it('renders project names', () => {
    const { getByText } = render(<Projects />);
    const project1 = getByText('Transportation as a Service WeGo Project');
    const project2 = getByText('MySQL Database Project');
    const project3 = getByText('Personal Website');
    
    expect(project1).toBeInTheDocument();
    expect(project2).toBeInTheDocument();
    expect(project3).toBeInTheDocument();
  });

  it('renders project descriptions', () => {
    const { getByText } = render(<Projects />);
    const description1 = getByText('Practiced scrum and agile on a team of 9 to develop a PoC that was designed to serve medically-related issues utilizing autonomous vehicles.');
    const description2 = getByText('Designed a database for a novel idea. Constructed a data model creating an entity relation diagram and relational schema. Wrote SQL through the terminal to deploy the database to the server.');
    const description3 = getByText('Implemented a React + Vite + JS project utilizing SDLC best practices to serve as my personal website. Developed using VCS best practice.');
    
    expect(description1).toBeInTheDocument();
    expect(description2).toBeInTheDocument();
    expect(description3).toBeInTheDocument();
  });

  it('renders project topics', () => {
    const { getAllByText } = render(<Projects />);
    const topics = getAllByText('Topics Covered');
    
    // Assertions to check if at least one element with the text "Topics Covered" is present
    expect(topics.length).toBeGreaterThan(0);
  });

  it('renders project details', () => {
    const { getByText } = render(<Projects />);
    const detail1 = getByText('DevOps work includes setting up Digital Ocean cloud environment by configuring firewall, setting up nginx, installing components, creating Flask app, writing Gunicorn service file, and retrieving SSL certificate for domain.');
    const detail2 = getByText('Implemented a scalable data model to accommodate future growth and evolving data requirements, emphasizing forward thinking.');
    const detail3 = getByText('Tested React components with Jest and configured CI/CD pipeline to ensure healthy code coverage.');
    
    expect(detail1).toBeInTheDocument();
    expect(detail2).toBeInTheDocument();
    expect(detail3).toBeInTheDocument();
  });
});
