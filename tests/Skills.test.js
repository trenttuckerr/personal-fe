// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../src/components/Skills';

describe('Skills Component', () => {
  it('renders without crashing', () => {
    render(<Skills />);
  });

  it('displays the "Skills" title', () => {
    const { getByText } = render(<Skills />);
    const titleElement = getByText('Skills');
    expect(titleElement).toBeInTheDocument();
  });

  it('displays programming languages', () => {
    const { getByText } = render(<Skills />);
    const programmingLanguages = getByText('Programming Languages');
    expect(programmingLanguages).toBeInTheDocument();
    // Add more expectations for specific programming languages as needed
  });

  it('displays cloud skills', () => {
    const { getByText } = render(<Skills />);
    const cloudSkills = getByText('Cloud');
    expect(cloudSkills).toBeInTheDocument();
    // Add more expectations for specific cloud skills as needed
  });

  it('displays data structures', () => {
    const { getByText } = render(<Skills />);
    const dataStructures = getByText('Data Structures');
    expect(dataStructures).toBeInTheDocument();
    // Add more expectations for specific data structures as needed
  });
});
