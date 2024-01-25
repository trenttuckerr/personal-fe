import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

describe('Footer component', () => {
  it('renders without errors', () => {
    render(<Footer />);
  });

  it('renders the copyright text correctly', () => {
    const { getByText } = render(<Footer />);
    const copyrightElement = getByText('Trent Tucker © 2023');
    expect(copyrightElement).toBeInTheDocument();
  });

  it('renders the quicklinks list correctly', () => {
    const { getAllByRole } = render(<Footer />);
    const listItems = getAllByRole('listitem');
    expect(listItems.length).toBe(2);
  });
});
