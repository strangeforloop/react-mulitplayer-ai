import React from 'react';
import startCase from 'lodash.startcase';
import { Typography, Fade } from '@material-ui/core';

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
          if (!isGameOver) return <Typography  variant="h6">{formatPlayer(currentPlayer)}'s Turn</Typography>;
          if (winningPlayer === undefined) return <Typography  variant="h6">There is a tie!</Typography>
          return <Fade in={true} style={{ transitionDelay: true ? '80ms' : '0ms' }}><Typography variant="h6" color="primary">{`Player ${winningPlayer} Won!`}</Typography></Fade>;
        })()
      }
    </div>
  );
};

export { GameHeader };
