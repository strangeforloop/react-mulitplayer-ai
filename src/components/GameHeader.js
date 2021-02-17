import React from 'react';
import startCase from 'lodash.startcase';

const GameHeader = ({ currentPlayer }) => {
  const formatPlayer = (player) => {
    return startCase(player);
  };

  return(
    <div>
      <div>Tic Tac Toe</div>
      <button>Current Player: {formatPlayer(currentPlayer)}</button>
    </div>
  );
};

export { GameHeader };
