import React from 'react';
import { render } from '@testing-library/react';
import Projects from './Projects';
import '@testing-library/jest-dom';

describe('Projects component', () => {
  it('renders without errors', () => {
    render(<Projects />);
  });

  it('renders the section title correctly', () => {
    const { getByText } = render(<Projects />);
    const titleElement = getByText('Various Projects');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the project details correctly', () => {
    const { getByText } = render(<Projects />);
    const projectElement = getByText(
      'Compensation Accounting Microservice'
    );
    expect(projectElement).toBeInTheDocument();
  });

  it('renders the project images correctly', () => {
    const { getAllByRole } = render(<Projects />);
    const imageElements = getAllByRole('img');
    const numberOfImageElements = 12;
    expect(imageElements.length).toBe(numberOfImageElements);
  });
});
