import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Customer Offer Calculator App', () => {
  render(<App />);
  const linkElement = screen.getByText(/Customer Offer Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
