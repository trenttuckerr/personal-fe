// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../src/components/About';

describe('About Component', () => {
  it('renders without crashing', () => {
    render(<About />);
  });

  it('displays the "About Me" title', () => {
    const { getByText } = render(<About />);
    const titleElement = getByText('About Me');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays the description text', () => {
    const { getByText } = render(<About />);
    const expectedStrongTextFragments = [
      'Hello!',
      "St. Edward's University",
      'cloud computing',
      'software engineering',
      'system design',
      'Industry Experience:',
      'Goldman Sachs',
      'cloud-native solutions',
      'My Journey:',
    ];

    expectedStrongTextFragments.forEach((fragment) => {
      const descriptionElement = getByText(fragment);
      expect(descriptionElement).toBeInTheDocument();
    });

    const aboutText = document.querySelector('.about-description');
    const expectedTextFragments = [
      "I'm a current computer science student at",
      'in Austin, Texas. My passion for computer science drives my strong interest in',
      'and',
      "I've gained valuable industry experience through multiple internships at",
      'During my time there, I focused on providing',
      'for complex business problems.',
      'Join me on my journey as I explore the limitless possibilities of technology and innovation.',
    ];

    expectedTextFragments.forEach((fragment) => {
      expect(aboutText.textContent).toContain(fragment);
    });
  });

  it('renders the Steds and Hoodie images', () => {
    const { getAllByAltText } = render(<About />);
    const stedsImages = getAllByAltText('Steds');
    const hoodieImages = getAllByAltText('Hoodie');
    expect(stedsImages.length).toBe(2); // There should be 2 Steds images
    expect(hoodieImages.length).toBe(1); // There should be 1 Hoodie image
  });

  it('applies CSS transition classes for visibility', () => {
    const { container } = render(<About />);
    const aboutSection = container.querySelector('.about');
    expect(aboutSection).toHaveClass('transition-fade-in');
  });
});
