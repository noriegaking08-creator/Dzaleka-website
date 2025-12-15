import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

// Mock the API module
jest.mock('../Api', () => ({
  fetchJSON: jest.fn(() => Promise.resolve({ data: [] })),
}));

describe('App Component', () => {
  test('renders without crashing', async () => {
    render(<App />);

    // Wait for the app to load
    await waitFor(() => {
      expect(screen.getByText(/Dzaleka CDSS/i)).toBeInTheDocument();
    });
  });

  test('renders navigation bar', async () => {
    render(<App />);

    await waitFor(() => {
      expect(screen.getByText(/Home/i)).toBeInTheDocument();
      expect(screen.getByText(/About/i)).toBeInTheDocument();
      expect(screen.getByText(/Achievements/i)).toBeInTheDocument();
    });
  });
});