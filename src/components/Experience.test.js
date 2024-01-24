import React from 'react';
import { render } from '@testing-library/react';
import Experience from './Experience';
import '@testing-library/jest-dom';

describe('Experience component', () => {
  it('renders without errors', () => {
    render(<Experience />);
  });

  it('renders the section title correctly', () => {
    const { getByText } = render(<Experience />);
    const titleElement = getByText('Experience');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the logos correctly', () => {
    const { getAllByRole } = render(<Experience />);
    const logoElements = getAllByRole('img');
    const numberOfLogosInSlider = 23;
    expect(logoElements.length).toBe(numberOfLogosInSlider);
  });

  it('renders the timeline content correctly', () => {
    const { getByText } = render(<Experience />);
    const { getAllByText } = render(<Experience />);
    const nameElements = getAllByText('Trent Tucker');
    expect(nameElements.length).toBeGreaterThan(0);
    const gsTitleElement = getAllByText('Goldman Sachs');
    const taTitleElement = getByText('St. Edward\'s University,');
    expect(gsTitleElement).toBeInTheDocument();
    expect(taTitleElement).toBeInTheDocument();
    expect()
  });
});