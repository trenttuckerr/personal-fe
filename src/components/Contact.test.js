import React from 'react';
import { render } from '@testing-library/react';
import Contact from './Contact';
import '@testing-library/jest-dom';

describe('Contact component', () => {
  it('renders without errors', () => {
    render(<Contact />);
  });

  it('renders the contact section heading correctly', () => {
    const { getByText } = render(<Contact />);
    const headingElement = getByText('Contact');
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the social links correctly', () => {
    const { getAllByRole } = render(<Contact />);
    const socialLinks = getAllByRole('link');
    expect(socialLinks.length).toBe(3);
  });
});
