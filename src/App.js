import './App.css';
import { useEffect, useState } from 'react';
import { Board } from './components/Board';
import { GameHeader } from './components/GameHeader';
import withSplashScreen from './components/withSplashScreen';
import {Button, ThemeProvider } from '@material-ui/core';

import theme from './utils/theme';

const BOARD_DIMENSION = 3;

const getBoardDimension = () => {
  return BOARD_DIMENSION;
};

const App = ({ dimension }) => {
  // use dimension rather than the constant for it
  const initialBoardState = new Array(dimension  * dimension).fill(null);
  const [board, setBoard] = useState(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState('playerOne');
  const [isGameOver, setIsGameOver] = useState(false);

  const resetGame = () => {
    setBoard(initialBoardState);
    setCurrentPlayer('playerOne');
    setIsGameOver(false);
  };

  useEffect(() => {
    // prompt if they want to play again
    // the user shouldn't be able to make more moves/clicks
  }, [isGameOver]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="App-header">
          <GameHeader isGameOver={isGameOver} currentPlayer={currentPlayer}/>
          <Button color="primary" onClick={ resetGame }>Restart Game</Button>
          <Board
            board={board}
            setBoard={setBoard}
            boardDimension={dimension}
            handleTurn={setCurrentPlayer}
            currentPlayer={currentPlayer}
            setIsGameOver={setIsGameOver}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withSplashScreen(App);
export { getBoardDimension };
