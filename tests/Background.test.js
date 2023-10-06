import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Background from '../src/components/Background';

describe('Background Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Background />);
    expect(container).toBeInTheDocument();
  });

  it('has the correct styles', () => {
    const { container } = render(<Background />);
    const backgroundStyle = window.getComputedStyle(
      container.firstChild
    );
    expect(backgroundStyle.backgroundSize).toBe('cover');
    expect(backgroundStyle.backgroundPosition).toBe('center');
    expect(backgroundStyle.minHeight).toBe('100vh');
    expect(backgroundStyle.position).toBe('fixed');
    expect(backgroundStyle.width).toBe('100%');
    expect(backgroundStyle.zIndex).toBe('-1');
  });
});
