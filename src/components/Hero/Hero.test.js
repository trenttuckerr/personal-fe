import React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';
import '@testing-library/jest-dom';

describe('Hero component', () => {
  it('renders without crashing', () => {
    render(<Hero />);
  });

  it('displays the correct name', () => {
    const { getAllByText } = render(<Hero />);
    const nameElements = getAllByText('Trent Tucker');
    expect(nameElements.length).toBeGreaterThan(0);
  });

  it('displays the correct subtitle', () => {
    const { getByText } = render(<Hero />);
    const subtitleElement = getByText('Cloud | DevOps | Backend');
    expect(subtitleElement).toBeInTheDocument();
  });

  it('displays the correct university', () => {
    const { getByText } = render(<Hero />);
    const universityElement = getByText(
      "Computer Science @ St. Edward's University"
    );
    expect(universityElement).toBeInTheDocument();
  });

  it('displays the correct social links', () => {
    const { getByTestId } = render(<Hero />);
    const githubLink = getByTestId('github-link');
    const linkedinLink = getByTestId('linkedin-link');
    const emailLink = getByTestId('email-link');
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/trenttuckerr'
    );
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/-trent-tucker/'
    );
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:ttucker296@gmail.com'
    );
  });
});
