import React from 'react';
import startCase from 'lodash.startcase';
import { Typography } from '@material-ui/core';

const GameHeader = ({ isGameOver, currentPlayer, winningPlayer, dimension }) => {
  const formatPlayer = (player) => {
    return startCase(player);
  };

  const gameTitle = dimension === 3 ? 'Tic Tac Toe' : 'Connect Four';

  return (
    <div>
      <Typography variant="h3">{gameTitle}</Typography>
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
