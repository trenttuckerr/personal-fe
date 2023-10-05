import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from '../src/components/About';

describe('About Component', () => {
  it('renders without crashing', () => {
    const { getByText, getByAltText } = render(<About />);
    const helloText = getByText(/Hello/i);
    const educationText = getByText(/Education/i);
    const stedsImage = getByAltText('Steds');
    const hoodieImage = getByAltText('Hoodie');
    const appleImage = getByAltText('Apple');
    expect(helloText).toBeInTheDocument();
    expect(educationText).toBeInTheDocument();
    expect(stedsImage).toBeInTheDocument();
    expect(hoodieImage).toBeInTheDocument();
    expect(appleImage).toBeInTheDocument();
  });
});
