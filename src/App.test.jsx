import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App.jsx'; // adjust path if needed

describe('App', () => {
  it('renders something from the homepage', () => {
    render(<App />);
    // Change the text to whatever your App renders by default
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
