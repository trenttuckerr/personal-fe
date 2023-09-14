// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from '../src/components/Projects';

describe('Projects Component', () => {
  it('renders without crashing', () => {
    render(<Projects />);
  });

  it('displays the "Projects" title', () => {
    const { getByText } = render(<Projects />);
    const titleElement = getByText('Projects');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays project titles', () => {
    const { getAllByText } = render(<Projects />);
    const projectTitles = getAllByText('Project Title');
    expect(projectTitles.length).toBeGreaterThanOrEqual(1);
  });

  it('displays project descriptions', () => {
    const { getAllByText } = render(<Projects />);
    const projectDescriptions = getAllByText('Short project description goes here.');
    expect(projectDescriptions.length).toBeGreaterThanOrEqual(1);
  });

  it('displays project buttons', () => {
    const { getAllByText } = render(<Projects />);
    const projectButtons = getAllByText('View Project');
    expect(projectButtons.length).toBeGreaterThanOrEqual(1);
  });

//   it('displays project images (commented out in the code)', () => {
//     // You can add tests for project images if you uncomment and provide image URLs.
//     // Example: const { getAllByAltText } = render(<Projects />);
//     // const projectImages = getAllByAltText('Project');
//     // expect(projectImages.length).toBeGreaterThanOrEqual(1);
//   });
});
