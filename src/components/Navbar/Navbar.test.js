import React from 'react';
import { render } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';

test('renders Navbar component without errors', () => {
  render(<Navbar />);
});

test('renders navigation links correctly', () => {
  const { getByText } = render(<Navbar />);

  expect(getByText('home')).toBeInTheDocument();
  expect(getByText('experience')).toBeInTheDocument();
  expect(getByText('education')).toBeInTheDocument();
  expect(getByText('various projects')).toBeInTheDocument();
  expect(getByText('contact')).toBeInTheDocument();
});
