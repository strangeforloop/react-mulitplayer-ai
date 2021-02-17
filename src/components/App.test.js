import React from 'react';
import { App } from '../App';
import { render, screen } from '@testing-library/react';

test('<App /> renders without crashing', () => {
  render(<App />);
});

test('it initially displays \'Player One\' as the current player', () => {
  render(<App />);
  expect(screen.getByText(/player one/i)).toBeInTheDocument();
});

// test that it has expected children,
// (aka it renders a <Board /> and a <GameHeader />)
// but instead
// let's make it more implementation agnostic and
// just check that the correct stuff gets shown on the screen
// I ALREADY TESTED THAT THE BOARD RENDERS THE CORRECT
// NUMBER OF BUTTONS
// test('it renders an initial game board', () => {
//   // GameHeader and Board components
//   render(<App />);
//   expect(screen.getByAltText(/game board/i)).toBeInTheDocument();
// });
