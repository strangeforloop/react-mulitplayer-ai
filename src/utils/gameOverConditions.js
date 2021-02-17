const BOARD_DIMENSION = 3;
const get1DpositionFrom2Dmatrix = (board, rowIndex, columnIndex) => {
    return (rowIndex * Math.sqrt(board.length)) + columnIndex;
};

const winOnRow = (board) => {
  for (let i = 0; i < BOARD_DIMENSION; i++) {
    const set = new Set();
    for (let j = 0; j < BOARD_DIMENSION; j++) {
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
  for (let i = 0; i < BOARD_DIMENSION; i++) {
    const set = new Set();
    for (let j = 0; j < BOARD_DIMENSION; j++) {
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
  let topLeftBottomRight = new Set();
  let topRightBottomLeft = new Set();

  for (let i = 0; i < 9; i = i + 4) {
    topLeftBottomRight.add(board[i]);
  }

  if (topLeftBottomRight.size === 1 && !topLeftBottomRight.has(null)) {
    return true;
  }

  for (let i = 2; i < 8; i = i + 2) {
    topRightBottomLeft.add(board[i]);
  }

  if (topRightBottomLeft.size === 1 && !topRightBottomLeft.has(null)) {
    return true;
  }

  return false;
};

const haveMovesLeft = (board) => {
  // If there are no nulls there are no moves left
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      return true;
    }
  }

  return false;
};

const isGameOver = (board) => {
  if (winOnRow(board) || winOnColumn(board) || winOnDiagonal(board) || !(haveMovesLeft(board)) ) {
    return true;
  } else {
    return false
  }
};

export { isGameOver };
