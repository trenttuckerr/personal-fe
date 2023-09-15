// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../src/components/Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    render(<Footer />);
  });

  it('displays the copyright text', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(
      '© 2023 Your Name. All rights reserved.'
    );
    expect(copyrightText).toBeInTheDocument();
  });

  it('displays privacy policy link', () => {
    const { getByText } = render(<Footer />);
    const privacyPolicyLink = getByText('Privacy Policy');
    expect(privacyPolicyLink).toBeInTheDocument();
  });

  it('displays terms of service link', () => {
    const { getByText } = render(<Footer />);
    const termsOfServiceLink = getByText('Terms of Service');
    expect(termsOfServiceLink).toBeInTheDocument();
  });
});
