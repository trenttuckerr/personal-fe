import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from '../src/components/Contact';

describe('Contact Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Contact />);
    const contactTitle = getByText('Contact');
    const contactDescription = getByText('Feel free to reach out.');
    expect(contactTitle).toBeInTheDocument();
    expect(contactDescription).toBeInTheDocument();
  });

  it('has the correct links', () => {
    const { getByRole } = render(<Contact />);
    const emailLink = getByRole('link', { name: 'Email' });
    const linkedinLink = getByRole('link', { name: 'LinkedIn' });
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:ttucker296@gmail.com'
    );
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/-trent-tucker'
    );
  });

  it('has the correct class names', () => {
    const { container } = render(<Contact />);
    const contactBox = container.querySelector('.contact');
    const contactButtons = container.querySelector(
      '.contact-buttons'
    );
    expect(contactBox).toHaveClass('contact');
    expect(contactButtons).toHaveClass('contact-buttons');
  });
});
