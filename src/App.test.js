import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Student Counter heading', () => {
  render(<App />);

  const heading = screen.getByText(/student counter/i);

  expect(heading).toBeInTheDocument();
});