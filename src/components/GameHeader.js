import React from 'react';
import startCase from 'lodash.startcase';
import { Typography } from '@material-ui/core';

const GameHeader = ({ isGameOver, currentPlayer, winningPlayer }) => {
  const formatPlayer = (player) => {
    return startCase(player);
  };

  return (
    <div>
      <Typography variant="h2">Tic Tac Toe</Typography>
      {
        isGameOver ? <Typography>{`Player ${winningPlayer} Won!`}</Typography> :
          <Typography>
            {formatPlayer(currentPlayer)}'s Turn
          </Typography>
      }
    </div>
  );
};

export { GameHeader };
