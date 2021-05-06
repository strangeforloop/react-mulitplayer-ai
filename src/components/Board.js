import React, { useEffect } from 'react';
import { Square } from './Square';
import { isGameOver } from '../utils/gameOverConditions';

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

  useEffect(() => {
    if (isGameOver(board) === true) {
      setIsGameOver(true);
    }
  }, [board]);


  console.log(disabled);

  return (
    <div>
      {Array(boardDimension).fill(null).map((_, rowIndex) => {
        return (
          <div key={rowIndex}>
            {Array(boardDimension).fill(null).map((_, columnIndex) => {
              const position = get1DpositionFrom2Dmatrix(rowIndex, columnIndex);
              return (
                <Square
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
