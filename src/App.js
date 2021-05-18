import { useEffect, useState } from 'react';
import { Board } from './components/Board';
import { GameHeader } from './components/GameHeader';
import withDimensionScreen from './components/withDimensionScreen';
import withInstructionScreen from './components/withInstructionScreen';
import { Grid, Button, ThemeProvider } from '@material-ui/core';
import { gameStatus } from './utils/gameOverConditions'

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
    const bestMove = () => {
      const { isTie, winner } = gameStatus(board);

      if (winner || isTie) {
        setIsGameOver(true);
        setWinningPlayer(winner);
        return;
      }

      let bestScore = -Infinity;
      let bestMove;

      let newBoard = [...board];

      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {  // if this spot is available, try the rest of the tree
          let testBoard = [...board];
          testBoard[i] = 'o';
          let score = miniMax(testBoard, false);
          testBoard[i] = '';
          if (score > bestScore) {
            bestScore = score;
            bestMove = i;
          }
        }
      }

      newBoard[bestMove] = 'o'
      setBoard(newBoard);
      setCurrentPlayer('playerOne');
    };

    if (isComputerTurn && (winningPlayer === undefined)) {
      // Simulate that computer player is "thinking"
      setTimeout(() => {
        bestMove();
      }, 1500);
    }
  }, [isComputerTurn]);

  const miniMax = (testBoard, isMaximizingPlayer) => {
    const scoreMap = {
      "o": 1,
      "x": -1,
      "Tie": 0
    };

    const { isTie, winner } = gameStatus(testBoard);

    if (isTie) {
      return scoreMap["Tie"];
    }

    if (winner) {
      return scoreMap[winner];
    }

    let bestScore;

    if (isMaximizingPlayer) { // goal: maximize score
      bestScore = -Infinity;

      for (let i = 0; i < testBoard.length; i++) {
        if (testBoard[i] === null) {
          const aiGameBoard = [...testBoard];
          aiGameBoard[i] = 'o';
          let score = miniMax(aiGameBoard, false);
          bestScore = Math.max(bestScore, score);
        }
      }
      return bestScore;
    } else {  // goal: minimize score r
      bestScore = Infinity;

      for (let i = 0; i < testBoard.length; i++) {
        if (testBoard[i] === null) {
          const aiGameBoard = [...testBoard];
          aiGameBoard[i] = 'x';
          let score = miniMax(aiGameBoard, true);
          bestScore = Math.min(bestScore, score);
        }
      }
      return bestScore;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="content">
        <GameHeader isGameOver={isGameOver} currentPlayer={currentPlayer} winningPlayer={winningPlayer} dimension={dimension} />
        <Grid style={{ 'marginBottom': '1rem' }}>
          <Button color="primary" style={{ 'fontWeight': 'bold'}} onClick={resetGame}>Restart Game</Button>
          <Button color="secondary" style={{ 'fontWeight': 'bold'}} onClick={() => { window.location.reload() }}>Go to Start Screen</Button>
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
}

// export default withInstructionScreen(withDimensionScreen(App));
export default withDimensionScreen(withInstructionScreen(App));

