import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../src/components/Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(
      '© 2023 Trent Tucker. All rights reserved.'
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it('has the correct class name', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('.footer');
    expect(footer).toHaveClass('footer');
  });
});
