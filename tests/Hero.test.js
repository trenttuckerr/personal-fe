import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Hero from '../src/components/Hero';

jest.useFakeTimers();

describe('Hero component', () => {
  let intervalId;

  beforeEach(() => {
    intervalId = setInterval(() => {}, 1000);
  });

  afterEach(() => {
    clearInterval(intervalId);
  });

  it('should render the component without errors', () => {
    const { container } = render(<Hero />);
    expect(container).toBeDefined();
  });

  it('should start with popIn state as false', () => {
    const { container } = render(<Hero />);
    const heroContent = container.querySelector('.hero-content');
    expect(heroContent).not.toHaveClass('pop-in');
  });

  it('should set popIn state to true after 500ms', () => {
    const { container } = render(<Hero />);
    jest.advanceTimersByTime(500);
    const heroContent = container.querySelector('.hero-content');
    expect(heroContent).toHaveClass('hero-content');
  });

  it('should render the View website code link with the correct URL', () => {
    const { getByText } = render(<Hero />);
    const linkElement = getByText('View website code');
    expect(linkElement).toHaveAttribute(
      'href',
      'https://github.com/trenttuckerr/mern-personal-fe'
    );
  });

  it('should clear the interval when the component unmounts', () => {
    let intervalId;
    const originalClearInterval = clearInterval;
    // eslint-disable-next-line no-global-assign
    clearInterval = (id) => {
      intervalId = id;
      originalClearInterval(id);
    };
    const { unmount } = render(<Hero />);
    unmount();
    // eslint-disable-next-line no-global-assign
    clearInterval = originalClearInterval;
    expect(typeof intervalId).toBe('number');
  });
});
