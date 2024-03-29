import React, { useEffect } from 'react';
import { Square } from './Square';
import { gameStatus } from '../utils/gameOverConditions';
import PropTypes from 'prop-types';

const playerMoveMapping = {
  'playerOne': 'x',
  'playerTwo': 'o',
};

const updateTurn = (currentPlayer) => {
  return currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne';
};

const Board = ({ board, setBoard, boardDimension, currentPlayer, handleTurn, disabled, setIsGameOver, setWinningPlayer }) => {
  // Assuming a row major orientation: 1D position = (rowIndex * width) + columnIndex
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

  const { isTie, winner } = gameStatus(board);

  useEffect(() => {
    if (winner || isTie) {
      setIsGameOver(true);
      setWinningPlayer(winner);
    }

  }, [isTie, winner]);

  return (
    <div style={{ 'width': 'max-content' }}>
      {Array(boardDimension).fill(null).map((_, rowIndex) => {
        return (
          <div key={rowIndex}>
            {Array(boardDimension).fill(null).map((_, columnIndex) => {
              const position = get1DpositionFrom2Dmatrix(rowIndex, columnIndex);

              const topLeftStyle = (rowIndex === 0 && columnIndex === 0) ? '5px' : '0';
              const topRightStyle = (rowIndex === 0 && columnIndex === (boardDimension - 1)) ? '5px' : '0';
              const bottomLeftStyle = (rowIndex === (boardDimension - 1) && columnIndex === 0) ? '5px' : '0';
              const bottomRightStyle = (rowIndex === (boardDimension - 1) && columnIndex === (boardDimension - 1)) ? '5px' : '0';

              return (
                <Square
                  borderRadiusStyle={{ topLeftStyle, topRightStyle, bottomRightStyle, bottomLeftStyle }}
                  disabled={disabled}
                  key={columnIndex}
                  move={board[position]}
                  onClick={() => {
                    handleTurn(updateTurn(currentPlayer));
                    const newBoard = updateBoard(board, rowIndex, columnIndex, playerMoveMapping[`${currentPlayer}`]);
                    setBoard(newBoard);
                  }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.array,
  setBoard: PropTypes.func,
  boardDimension: PropTypes.number,
  currentPlayer: PropTypes.string,
  handleTurn: PropTypes.func,
  disabled: PropTypes.bool,
  setIsGameOver: PropTypes.func,
  setWinningPlayer: PropTypes.func
};

export { Board };
