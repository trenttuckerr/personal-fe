// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../src/components/Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    render(<Header />);
  });

  it('displays the logo', () => {
    const { getByText } = render(<Header />);
    const logoText = getByText('Trent Tucker');
    expect(logoText).toBeInTheDocument();
  });

  it('displays navigation links', () => {
    const { getByText } = render(<Header />);

    const aboutLink = getByText('About');
    expect(aboutLink).toBeInTheDocument();

    const skillsLink = getByText('Skills');
    expect(skillsLink).toBeInTheDocument();

    const projectsLink = getByText('Projects');
    expect(projectsLink).toBeInTheDocument();

    const experienceLink = getByText('Experience');
    expect(experienceLink).toBeInTheDocument();

    const contactLink = getByText('Contact');
    expect(contactLink).toBeInTheDocument();
  });
});
