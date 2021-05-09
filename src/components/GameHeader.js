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
        (() => {
          if (!isGameOver) return <Typography>{formatPlayer(currentPlayer)}'s Turn</Typography>;
          if (winningPlayer === undefined) return <Typography>There is a tie!</Typography>
          return <Typography>{`Player ${winningPlayer} Won!`}</Typography>;
        })()
      }
    </div>
  );
};

export { GameHeader };
