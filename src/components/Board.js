import React, { useState, useEffect } from 'react';
import { Square } from './Square';
import { isGameOver } from '../utils/gameOverConditions';

const playerMoveMapping = {
  'playerOne': 'x',
  'playerTwo': 'o',
};

// Assuming a row major orientation:
// 1D position = (rowIndex * width) + columnIndex
const get1DpositionFrom2Dmatrix = (rowIndex, columnIndex) => {
  const position = (rowIndex * 3) + columnIndex;
  return position;
};

const updateTurn = (currentPlayer) => {
  return currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne';
};

const updateBoard = (board, rowIndex, columnIndex, move) => {
  let newBoard = [...board];
  const position = get1DpositionFrom2Dmatrix(rowIndex, columnIndex);
  newBoard[position] = move;
  return newBoard;
};

const Board = ({ boardDimension, currentPlayer, handleTurn }) => {
  const initialBoardState = new Array(boardDimension * boardDimension).fill(null);
  const [board, setBoard] = useState(initialBoardState);

  useEffect(() => {
    if (isGameOver(board) === true) {
      console.log('Game is over');
    }
  }, [board]);

  return (
    <div>
      {Array(boardDimension).fill(null).map((_, rowIndex) => {
        return (
          <div key={rowIndex}>
            {Array(boardDimension).fill(null).map((_, columnIndex) => {
              const position = get1DpositionFrom2Dmatrix(rowIndex, columnIndex);
              return (
                <Square
                  key={columnIndex}
                  move={board[position]}
                  onClick={ () => {
                    // if (board[position] === null) {
                      handleTurn(updateTurn(currentPlayer))
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
