import React from 'react';
import { Square } from './Square';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

const topLeftStyle = '';
const topRightStyle = '';
const bottomLeftStyle  = '';
const bottomRightStyle = '';
const borderRadiusStyle={ topLeftStyle, topRightStyle, bottomRightStyle, bottomLeftStyle };

test('<Square /> renders without crashing' , () => {
  render(<Square borderRadiusStyle={borderRadiusStyle} />);
});

test('clicking on it displays the provided move on the board', () => {
  const move = 'x';
  const { container } = render(<Square move={move} borderRadiusStyle={borderRadiusStyle} />);

  expect(container.textContent).toBe('x');
});

test('clicking on <Square /> with a disabled prop of `false` runs the onClick function one time' , () => {
  render(<Square move={null} borderRadiusStyle={borderRadiusStyle} />);

  console.log(screen.getByRole('button').disabled);
  expect(screen.getByRole('button').disabled).toBeFalsy();
});

test('clicking on <Square /> with a disabled prop of `true` does not run the onClick function' , () => {
  const mockFunction = jest.fn();
  render(<Square onClick={mockFunction} disabled={true} borderRadiusStyle={borderRadiusStyle} />);

  const button = screen.getByRole('button');
  userEvent.click(button);

  expect(mockFunction).not.toBeCalled();
});


