import './App.css';
import { useState } from 'react';
import { Board } from './components/Board';
import { GameHeader } from './components/GameHeader';

const App = () => {
  const BOARD_DIMENSION = 4;
  const [currentPlayer, setCurrentPlayer] = useState('playerOne');

  return (
    <div className="App">
      <GameHeader currentPlayer={currentPlayer}/>
      <div className="App-header">
        <Board
          boardDimension={BOARD_DIMENSION}
          handleTurn={setCurrentPlayer}
          currentPlayer={currentPlayer}
        />
      </div>
    </div>
  );
}

export { App };
