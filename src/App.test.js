import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

test('<App /> renders without crashing', () => {
  render(<App />);
});

// test('it initially displays \'Player One\' as the current player', () => {
//   render(<App />);
//   expect(screen.getByText(/player one/i)).toBeInTheDocument();
// });

// test that it has expected children,
// (aka it renders a <Board /> and a <GameHeader />)
// but instead
// let's make it more implementation agnostic and
// just check that the correct stuff gets shown on the screen
// Note that I already tested that the board renders the
// correct number of buttons
