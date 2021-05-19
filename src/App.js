import React, { useEffect, useState } from 'react';
import { Board } from './components/Board';
import { GameHeader } from './components/GameHeader';
import { withDimensionScreen } from './components/withDimensionScreen';
import { withInstructionScreen } from './components/withInstructionScreen';
import { Grid, Button, ThemeProvider } from '@material-ui/core';
import { playBestMove } from './utils/helpers';

import theme from './utils/theme';

const App = ({ numberOfPlayers, dimension }) => {
  const initialBoardState = new Array(dimension * dimension).fill(null);

  const [board, setBoard] = useState(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState('playerOne');
  const [isGameOver, setIsGameOver] = useState(false);
  const [winningPlayer, setWinningPlayer] = useState(undefined);

  const isComputerTurn = numberOfPlayers === 1 && currentPlayer !== 'playerOne';

  const resetGame = () => {
    setBoard(initialBoardState);
    setCurrentPlayer('playerOne');
    setIsGameOver(false);
    setWinningPlayer(undefined);
  };

  useEffect(() => {
    if (isComputerTurn && (winningPlayer === undefined)) {
      // Simulate that computer player is "thinking"
      setTimeout(() => {
        playBestMove(board, setIsGameOver, setWinningPlayer, setBoard, setCurrentPlayer);
      }, 1500);
    }
  }, [isComputerTurn]);

  return (
    <ThemeProvider theme={theme}>
      <div className="content">
        <GameHeader isGameOver={isGameOver} currentPlayer={currentPlayer} winningPlayer={winningPlayer} dimension={dimension} />
        <Grid style={{ 'marginBottom': '1rem' }}>
          <Button color="primary" style={{ 'fontWeight': 'bold'}} onClick={resetGame}>Restart Game</Button>
          <Button color="secondary" style={{ 'fontWeight': 'bold'}} onClick={() => { window.location.reload(); }}>Go to Start Screen</Button>
        </Grid>
        <Board
          board={board}
          setBoard={setBoard}
          boardDimension={dimension}
          handleTurn={setCurrentPlayer}
          currentPlayer={currentPlayer}
          setIsGameOver={setIsGameOver}
          setWinningPlayer={setWinningPlayer}
          disabled={isComputerTurn || isGameOver}
        />
      </div>
    </ThemeProvider>
  );
};

export default withDimensionScreen(withInstructionScreen(App));

