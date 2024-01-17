import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/倉頡辭典/i);
  expect(linkElement).toBeInTheDocument();
});
