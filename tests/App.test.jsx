// eslint-disable-next-line no-unused-vars
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { toBeInTheDocument, toHaveAttribute } from '@testing-library/jest-dom/matchers'; // Import matchers
import App from '../src/App';

expect.extend({ toBeInTheDocument, toHaveAttribute }); // Extend matchers

describe('App Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);
    const header = getByText(/trenttucker.com/i);
    expect(header).toBeInTheDocument();
  });

  it('updates count correctly', () => {
    const { getByText } = render(<App />);
    const countButton = getByText(/count is 0/i);
    expect(countButton).toBeInTheDocument();

    fireEvent.click(countButton);

    const updatedCountButton = getByText(/count is 1/i);
    expect(updatedCountButton).toBeInTheDocument();
  });

  it('contains Vite and React logos with links', () => {
    const { getByAltText } = render(<App />);
    const viteLogo = getByAltText('Vite logo');
    const reactLogo = getByAltText('React logo');

    expect(viteLogo).toBeInTheDocument();
    expect(viteLogo.parentElement).toHaveAttribute('href', 'https://vitejs.dev');

    expect(reactLogo).toBeInTheDocument();
    expect(reactLogo.parentElement).toHaveAttribute('href', 'https://react.dev');
  });

  it('contains "Edit src/App.jsx and save to test HMR"', () => {
    const { queryByText } = render(<App />);
    const editInfo = queryByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'p' &&
        element.textContent.includes('Edit src/App.jsx and save to test HMR')
      );
    });
    expect(editInfo).toBeInTheDocument();
  });

  it('contains "Click on the Vite and React logos to learn more"', () => {
    const { getByText } = render(<App />);
    const learnMoreInfo = getByText(/Click on the Vite and React logos to learn more/i);
    expect(learnMoreInfo).toBeInTheDocument();
  });
});
