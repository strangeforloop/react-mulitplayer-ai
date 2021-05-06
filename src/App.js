import './App.css';
import { useEffect, useState } from 'react';
import { Board } from './components/Board';
import { GameHeader } from './components/GameHeader';
import withDimensionScreen from './components/withDimensionScreen';
import { Button, ThemeProvider } from '@material-ui/core';
import withInstructionScreen from './components/withInstructionScreen';

import theme from './utils/theme';

const App = ({ numberOfPlayers, dimension }) => {
  const initialBoardState = new Array(dimension  * dimension).fill(null);
  const [board, setBoard] = useState(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState('playerOne');
  const [isGameOver, setIsGameOver] = useState(false);
  const [winningPlayer, setWinningPlayer] = useState('');
  // const [isComputerTurn, setIsComputerTurn] = useState(false);

  const isComputerTurn = numberOfPlayers === 1 && currentPlayer !== 'playerOne';

  useEffect(() => {
    // prompt if they want to play again
    // the user shouldn't be able to make more moves clicks
  }, [isGameOver]);

  const resetGame = () => {
    setBoard(initialBoardState);
    setCurrentPlayer('playerOne');
    setIsGameOver(false);
  };

  useEffect(() => {
    const hasAIPlayer = () => {
      if (numberOfPlayers === 1) return true;
      return false;
    };

    if (hasAIPlayer()) {
      // if (currentPlayer === 'playerTwo') {    // ??? current player is the AI player
      if (isComputerTurn) {
        // calculate best computer move
        // miniMax()

        // make computer move
        // disable player one from clicking the screen and delay
        // them for a short period of time
        // change current player to say AI player instead of player two
      }
    }
  }, [currentPlayer]);

  const miniMax = (board, node, depth, maximizingPlayer) => {
    if (depth === 0 || node === null) {
      // return the heuristic value of node
    }

    if (maximizingPlayer) {
      // value := −∞
      // for each child of node do
      //     value := max(value, minimax(child, depth − 1, FALSE))
      // return value
    } else { /* minimizing player */
      // value := +∞
      //   for each child of node do
      //       value := min(value, minimax(child, depth − 1, TRUE))
      //   return value
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="App-header">
          <GameHeader isGameOver={isGameOver} currentPlayer={currentPlayer} winningPlayer={winningPlayer} dimension={dimension}/>
          <Button color="primary" onClick={ resetGame }>Restart Game</Button>
          <Button color="secondary" onClick={ ()=> { window.location.reload() }}>Go to Start Screen</Button>
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

