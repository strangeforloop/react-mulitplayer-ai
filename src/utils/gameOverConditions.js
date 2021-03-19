import { getBoardDimension } from '../App';

const get1DpositionFrom2Dmatrix = (board, rowIndex, columnIndex) => {
    return (rowIndex * Math.sqrt(board.length)) + columnIndex;
};

const winOnRow = (board) => {
  for (let i = 0; i < getBoardDimension(); i++) {
    const set = new Set();
    for (let j = 0; j < getBoardDimension(); j++) {
      const position = get1DpositionFrom2Dmatrix(board, i, j);
      set.add(board[position]);
    }

    if (set.size === 1 & !set.has(null)) {
      return true;
    }
  }

  return false;
};

const winOnColumn = (board) => {
  for (let i = 0; i < getBoardDimension(); i++) {
    const set = new Set();
    for (let j = 0; j < getBoardDimension(); j++) {
      const position = get1DpositionFrom2Dmatrix(board, j, i);
      set.add(board[position]);
    }

    if (set.size === 1 & !set.has(null)) {
      return true;
    }
  }

  return false;
};

const winOnDiagonal = (board) => {
  let topLeftBottomRightDiagonal = new Set();
  let topRightBottomLeftDiagonal = new Set();

  // To Do: Fix math to not hard code numbers
  // Right now, this only works if the dimension is 3.
  for (let i = 0; i < 9; i = i + 4) {
    topLeftBottomRightDiagonal.add(board[i]);
  }

  if (topLeftBottomRightDiagonal.size === 1 && !topLeftBottomRightDiagonal.has(null)) {
    return true;
  }

  for (let i = 2; i < 8; i = i + 2) {
    topRightBottomLeftDiagonal.add(board[i]);
  }

  if (topRightBottomLeftDiagonal.size === 1 && !topRightBottomLeftDiagonal.has(null)) {
    return true;
  }

  return false;
};

const haveMovesLeft = (board) => {
  // If there are no nulls, there are no moves left
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      return true;
    }
  }

  return false;
};

const isGameOver = (board) => {
  // If (winOnRow(board) || winOnColumn(board) || winOnDiagonal(board) || !(haveMovesLeft(board)) ) {
  if(winOnRow(board)) {
    console.log('Win on row');
    return true;
  } else if (winOnColumn(board)) {
    console.log('Win on column')
    return true;
  } else if (winOnDiagonal(board)) {
    console.log('Win on diagonal')
    return true;
  } else if (!(haveMovesLeft(board))) {
    console.log('Game over bc no more moves')
    return true;
  } else {
    return false
  }
};

export { isGameOver };
