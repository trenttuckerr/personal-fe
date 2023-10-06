import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Header from '../src/components/Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    const { container } = render(<Header />);
    const header = container.querySelector('.header');
    expect(header).toHaveClass('header');
  });

  it('renders the logo text', () => {
    const { getByText } = render(<Header />);
    const logoText = getByText('Trent Tucker');
    expect(logoText).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    const { getByText } = render(<Header />);
    const aboutLink = getByText('About');
    const skillsLink = getByText('Skills');
    const projectsLink = getByText('Projects');
    const experienceLink = getByText('Experience');
    const contactLink = getByText('Contact');

    expect(aboutLink).toBeInTheDocument();
    expect(skillsLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(experienceLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });
});
