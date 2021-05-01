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
  const [isComputerTurn, setIsComputerTurn] = useState(false);

  useEffect(() => {
    // prompt if they want to play again
    // the user shouldn't be able to make more moves clicks
  }, [isGameOver]);

  const resetGame = () => {
    setBoard(initialBoardState);
    setCurrentPlayer('playerOne');
    setIsGameOver(false);
  };

  const hasAIPlayer = () => {
    if (numberOfPlayers === 1) return true;
    return false;
  };

  useEffect(() => {
    if (hasAIPlayer()) {
      if (currentPlayer === 'playerTwo') {
        // make computer move
        // disable player one from clicking the screen and delay
        // them for a short period of time
        // change current player to say AI player instead of player two
      }
    }
  }, [currentPlayer]);

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
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default withInstructionScreen(withDimensionScreen(App));

