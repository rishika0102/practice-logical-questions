import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('Counter', () => {
  render(<Counter/>);
  const linkElement = screen.getByTestId('countering');
  const decrement = screen.getByTestId('decrement');
  const increment = screen.getByTestId('increment');
  expect(linkElement).toBeInTheDocument();
  expect(decrement).toBeInTheDocument();
  expect(increment).toBeInTheDocument();
  fireEvent.click(increment);
  expect(linkElement).toHaveTextContent("1");
})
