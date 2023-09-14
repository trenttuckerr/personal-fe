// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../src/components/Hero';

describe('Hero Component', () => {
  it('renders without crashing', () => {
    render(<Hero />);
  });

  it('displays the subtitle', () => {
    const { getByText } = render(<Hero />);
    const subtitleElement = getByText('Developed using React / Vite');
    expect(subtitleElement).toBeInTheDocument();
  });

  it('displays a link to view the code', () => {
    const { getByText } = render(<Hero />);
    const linkElement = getByText('View the code');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://github.com/trenttuckerr/mern-personal-fe');
  });
});
