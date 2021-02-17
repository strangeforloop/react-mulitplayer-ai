import React from 'react';
import { Board } from './Board';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

test('<Board /> renders without crashing', () => {
  const BOARD_DIMENSION = 4;
  render(<Board boardDimension={BOARD_DIMENSION}/>);
});

test('it renders an N x N grid of squares, where N is the dimension of the board', () => {
  const BOARD_DIMENSION = 3;
  render(<Board boardDimension={BOARD_DIMENSION}/>);
  // expect(screen.getByRole('button')).toBeInTheDocument();
  expect(Math.sqrt(screen.getAllByRole('button').length)).toBe(BOARD_DIMENSION);
});

test('it initially displays N x N null squares, where N is the dimension of the board', () => {
  const BOARD_DIMENSION = 3;
  render(<Board boardDimension={BOARD_DIMENSION}/>);

  // console.log(screen.getAllByRole('button'));

  (screen.getAllByRole('button')).forEach( element => {
    // console.log(element.textContent);
    expect(element.textContent).toBe('');
  });
});

// check that setCurrentPlayer gets called with
// the correct value
// technically, i'm testing that handleTurn prop
// gets called with the right argument
// but we want to do this implementation detail agnostic,
// so instead:
test('the current player switches when a square on the board is clicked', () => {
  const BOARD_DIMENSION = 3;
  let currentPlayer = 'playerOne';

  const updateTurn = (currentPlayer) => {
    return currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne';
  };

  const setPlayer = (player) => {
    currentPlayer = updateTurn(player);
  };

  render(<Board boardDimension={BOARD_DIMENSION} handleTurn={() => setPlayer(currentPlayer)} currentPlayer={currentPlayer}/>);

  const squaresArray = screen.getAllByRole('button');
  const randomSquare = squaresArray[Math.floor(Math.random() * (squaresArray.length - 0) + 0)];

  userEvent.click(randomSquare);

  expect(currentPlayer).toBe('playerTwo');
});

