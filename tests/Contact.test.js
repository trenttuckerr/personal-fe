// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../src/components/Contact';

describe('Contact Component', () => {
  it('renders without crashing', () => {
    render(<Contact />);
  });

  it('displays the "Contact" title', () => {
    const { getByText } = render(<Contact />);
    const titleElement = getByText('Contact');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays the contact description', () => {
    const { getByText } = render(<Contact />);
    const descriptionElement = getByText(
      "Interested in collaborating or have a project in mind? Let's connect!"
    );
    expect(descriptionElement).toBeInTheDocument();
  });

  it('displays a "Get in Touch" button', () => {
    const { getByText } = render(<Contact />);
    const buttonElement = getByText('Get in Touch');
    expect(buttonElement).toBeInTheDocument();
  });

  it('links to the correct email address', () => {
    const { getByText } = render(<Contact />);
    const buttonElement = getByText('Get in Touch');
    expect(buttonElement).toHaveAttribute('href', 'mailto:ttucker296@gmail.com');
  });
});
