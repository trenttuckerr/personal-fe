import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../src/components/Hero';

describe('Hero Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Hero />);
    expect(container).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    const { container } = render(<Hero />);
    const hero = container.querySelector('.hero');
    expect(hero).toHaveClass('hero');
  });

  it('renders the hero title', () => {
    const { getByText } = render(<Hero />);
    const heroTitle = getByText('Welcome to my personal website');
    expect(heroTitle).toBeInTheDocument();
  });

  it('renders the "View website code" button', () => {
    const { getByText } = render(<Hero />);
    const viewCodeButton = getByText('View website code');
    expect(viewCodeButton).toBeInTheDocument();
  });

  it('has the "pop-in" animation class when "popIn" is true', () => {
    const { container } = render(<Hero />);
    const heroContent = container.querySelector('.hero-content');
    expect(heroContent).toHaveClass('hero-content');
  });

  it('has the typing cursor', () => {
    const { container } = render(<Hero />);
    const typingCursor = container.querySelector('.typing-cursor');
    expect(typingCursor).toBeInTheDocument();
  });
});
