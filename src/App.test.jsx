import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders header', () => {
  render(<App />);
  const header = screen.getByText(/expense tracker/i);
  expect(header).toBeInTheDocument();
});
