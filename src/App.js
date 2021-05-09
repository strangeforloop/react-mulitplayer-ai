import './App.css';
import { useEffect, useState } from 'react';
import { Board } from './components/Board';
import { GameHeader } from './components/GameHeader';
import withDimensionScreen from './components/withDimensionScreen';
import { Grid, Button, ThemeProvider } from '@material-ui/core';
import withInstructionScreen from './components/withInstructionScreen';
import { gameStatus } from './utils/gameOverConditions'
import { spacing } from '@material-ui/system';

import theme from './utils/theme';

const App = ({ numberOfPlayers, dimension }) => {
  const initialBoardState = new Array(dimension  * dimension).fill(null);
  const [board, setBoard] = useState(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState('playerOne');
  const [isGameOver, setIsGameOver] = useState(false);
  const [winningPlayer, setWinningPlayer] = useState(undefined);

  const isComputerTurn = numberOfPlayers === 1 && currentPlayer !== 'playerOne';

  const resetGame = () => {
    setBoard(initialBoardState);
    setCurrentPlayer('playerOne');
    setIsGameOver(false);
  };

  useEffect(() => {
    const bestMove = () => {
      let bestScore = -Infinity;
      let bestMove;

      let newBoard = [...board];

      for (let i = 0; i < board.length; i++) {
        if (board[i] === null) {  // if this spot is available, try the rest of the tree
          let testBoard = [...board];
          testBoard[i] = 'O';
          let score = miniMax(testBoard, false);
          testBoard[i] = '';
           if (score > bestScore) {
            bestScore = score;
            bestMove = i;
          }
        }
      }

      newBoard[bestMove] = 'O'
      setBoard(newBoard);
      setCurrentPlayer('playerOne');
    };

    if (isComputerTurn) {  // && (winningPlayer === undefined)
      // Computer player is "thinking"
      setTimeout(() => {
        // pick the optimal move: score = miniMax(board, 0, true);
        // place the optimal move on the newBoard
        // setBoard(newBoard)
        bestMove();
      }, 1500);
    }
  }, [isComputerTurn]);

  const miniMax = (testBoard, maximizingPlayer) => {
    const scoreMap = {
      "X": 1,
      "O": -1,
      "Tie": 0
    };

    const {winner} = gameStatus(testBoard);

    if (winner) {
      // someone won, so
      // get winner from checkGameOver
      // and return the key associated with the winner in the scoreMap
      return scoreMap[winner];
    }

    if (maximizingPlayer) { // goal: maximize score
      let bestScore = -Infinity;
      for (let i = 0; i < testBoard.length; i++) {
        if (testBoard[i] === null) {   // empty
          testBoard[i] = 'O';
          let score = miniMax(testBoard, false);
          testBoard[i] = '';
          bestScore = Math.max(bestScore, score);
        }
      }
      return bestScore;
    } else {                // goal: minimize score
      let bestScore = Infinity;
      for (let i = 0; i < testBoard.length; i++) {
        if (testBoard[i] === null) {   // empty
          testBoard[i] = 'X';
          let score = miniMax(testBoard, true);
          testBoard[i] = '';
          bestScore = Math.min(bestScore, score);
        }
      }
      return bestScore;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="App-header">
          <GameHeader isGameOver={isGameOver} currentPlayer={currentPlayer} winningPlayer={winningPlayer} dimension={dimension}/>
          <Grid spacing={1} style={{ 'marginBottom': '1rem'}}>
            <Button color="primary" onClick={ resetGame }>Restart Game</Button>
            <Button color="secondary" onClick={ ()=> { window.location.reload() }}>Go to Start Screen</Button>
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
      </div>
    </ThemeProvider>
  );
}

export default withInstructionScreen(withDimensionScreen(App));

