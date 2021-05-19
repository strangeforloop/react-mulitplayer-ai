import React, { useRef } from 'react';
import startCase from 'lodash.startcase';
import { Typography, Fade } from '@material-ui/core';

const GameHeader = ({ isGameOver, currentPlayer, winningPlayer, dimension }) => {
  const formatPlayer = (player) => {
    return startCase(player);
  };

  const gameTitle = dimension === 3 ? 'Tic Tac Toe' : 'Connect Four';

  const nodeRef = useRef(null);

  return (
    <div>
      <Typography variant="h3">{gameTitle}</Typography>
      {
        (() => {
          if (!isGameOver) return <Typography  variant="h6">{formatPlayer(currentPlayer)}&apos;'s Turn</Typography>;
          if (winningPlayer === undefined) return <Typography  variant="h6">There is a tie!</Typography>;
          return <Fade ref={nodeRef} in={true} style={{ transitionDelay: true ? '80ms' : '0ms' }}><Typography ref={nodeRef} variant="h6" color="primary">{`${winningPlayer.toUpperCase()} Won!`}</Typography></Fade>;
        })()
      }
    </div>
  );
};

export { GameHeader };
