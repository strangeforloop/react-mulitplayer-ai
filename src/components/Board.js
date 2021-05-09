import React, { useEffect } from 'react';
import { Square } from './Square';
import { gameStatus } from '../utils/gameOverConditions';

const playerMoveMapping = {
  'playerOne': 'x',
  'playerTwo': 'o',
};

const updateTurn = (currentPlayer) => {
  return currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne';
};

const Board = ({ board, setBoard, boardDimension, currentPlayer, handleTurn, disabled, setIsGameOver , setWinningPlayer }) => {
  // Assuming a row major orientation:
  // 1D position = (rowIndex * width) + columnIndex
  const get1DpositionFrom2Dmatrix = (rowIndex, columnIndex) => {
    const position = (rowIndex * boardDimension) + columnIndex;
    return position;
  };

  const updateBoard = (board, rowIndex, columnIndex, move) => {
    let newBoard = [...board];
    const position = get1DpositionFrom2Dmatrix(rowIndex, columnIndex);
    newBoard[position] = move;
    return newBoard;
  };

  const {boardFull, winner} = gameStatus(board);

  useEffect(() => {
    if (winner || boardFull) {
      setIsGameOver(true);
    }
  }, [boardFull, winner]);


  console.log({disabled});

  return (
    <div style={{ 'width': 'max-content'}}>
      {Array(boardDimension).fill(null).map((_, rowIndex) => {
        return (
          <div key={rowIndex}>
            {Array(boardDimension).fill(null).map((_, columnIndex) => {
              const position = get1DpositionFrom2Dmatrix(rowIndex, columnIndex);

              const topLeftStyle = (rowIndex === 0 && columnIndex === 0) ? '5px' : '0';
              const topRightStyle = (rowIndex === 0 && columnIndex === (boardDimension - 1)) ? '5px' : '0';
              const bottomLeftStyle = (rowIndex === (boardDimension - 1) && columnIndex === 0) ?  '5px' : '0';
              const bottomRightStyle = (rowIndex === (boardDimension - 1) && columnIndex === (boardDimension - 1)) ? '5px' : '0';

              return (
                <Square
                  borderRadiusStyle = {{ topLeftStyle, topRightStyle, bottomRightStyle, bottomLeftStyle }}
                  disabled={disabled}
                  key={columnIndex}
                  move={board[position]}
                  onClick={ () => {
                      setWinningPlayer(currentPlayer);
                    // if (board[position] === null) {
                      handleTurn(updateTurn(currentPlayer))
                      // we clicked index the spot at [row][column]:
                      // we want this to correspond to:
                      const newBoard = updateBoard(board, rowIndex, columnIndex, playerMoveMapping[`${currentPlayer}`]);
                      setBoard(newBoard);
                    // }
                  }}
                  // disabled={board[position] !== null}
                />)
            })}
          </div>
        );
      })}
   </div>
  );
};

export { Board };