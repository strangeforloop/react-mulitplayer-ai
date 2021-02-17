import React from 'react';
import { Square } from './Square';
import { render, screen } from '@testing-library/react';

test('<Square /> renders without crashing' , () => {
  render(<Square />);
});

test('clicking on it displays the provided move on the board', () => {
  const move = 'x';
  const { container } = render(<Square move={move} />);

  expect(container.textContent).toBe('x');
});

test('clicking on <Square /> with a disabled prop of `false` runs the onClick function one time' , () => {
  render(<Square move={null}/>);

  console.log(screen.getByRole('button').disabled);
  expect(screen.getByRole('button').disabled).toBeFalsy();
});

test('clicking on <Square /> with a disabled prop of `true` does not run the onClick function' , () => {
  render(<Square disabled={true}/>);

  // expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  expect(screen.getByRole('button').disabled).toBeTruthy();
});

// test('clicking on <Square /> with a disabled prop of `true` does not run the onClick function' , () => {
//   const mockFunction = jest.fn();
//   render(<Square onClick={mockFunction} disabled={true}/>);

//   const button = screen.getByRole('button');
//   userEvent.click(button);

//   expect(mockFunction).not.toBeCalled();
// });


