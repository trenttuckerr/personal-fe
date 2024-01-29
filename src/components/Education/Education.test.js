import React from 'react';
import { render } from '@testing-library/react';
import Education from './Education';
import '@testing-library/jest-dom';

describe('Education component', () => {
  it('renders without errors', () => {
    render(<Education />);
  });

  it('renders the section title correctly', () => {
    const { getByText } = render(<Education />);
    const titleElement = getByText('Education');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders the education details correctly', () => {
    const { getByText } = render(<Education />);
    const coursesElement = getByText(
      /CS Courses Taken.*Senior Project.*Operating Systems.*Mobile Programming.*Computer Networks/i
    );
    expect(coursesElement).toBeInTheDocument();
  });

  it('renders the carousel indicators correctly', () => {
    const { getAllByRole } = render(<Education />);
    const indicatorElements = getAllByRole('listitem');
    const numberOfIndicatorElements = 3;
    expect(indicatorElements.length).toBe(numberOfIndicatorElements);
  });
});
