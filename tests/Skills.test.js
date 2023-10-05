import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Skills from '../src/components/Skills';

describe('Skills Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Skills />);
    expect(container).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    const { container } = render(<Skills />);
    const skills = container.querySelector('.skills');
    expect(skills).toHaveClass('skills');
  });

  it('renders technical skills titles', () => {
    const { getByText } = render(<Skills />);
    const developmentTitle = getByText('🛠️ Development 🛠️');
    const cloudTitle = getByText('☁️ Cloud and Infrastructure ☁️');
    const devOpsTitle = getByText('🛠️ DevOps and Tools 🛠️');

    expect(developmentTitle).toBeInTheDocument();
    expect(cloudTitle).toBeInTheDocument();
    expect(devOpsTitle).toBeInTheDocument();
  });

  it('renders technical skills lists', () => {
    const { getByText } = render(<Skills />);
    const developmentList = getByText('🐍 Python');
    const cloudList = getByText('☁️ AWS Lambda');
    const devOpsList = getByText('🔄 CI/CD Pipelines');

    expect(developmentList).toBeInTheDocument();
    expect(cloudList).toBeInTheDocument();
    expect(devOpsList).toBeInTheDocument();
  });

  it('renders the carousel component', () => {
    const { container } = render(<Skills />);
    const carousel = container.querySelector('.carousel');
    expect(carousel).toBeInTheDocument();
  });
});
