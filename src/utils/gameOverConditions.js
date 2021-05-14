const get1DpositionFrom2Dmatrix = (board, rowIndex, columnIndex) => {
    return (rowIndex * Math.sqrt(board.length)) + columnIndex;
};

const winOnRow = (board) => {
  for (let i = 0; i < Math.sqrt(board.length); i++) {
    const set = new Set();
    for (let j = 0; j < Math.sqrt(board.length); j++) {
      const position = get1DpositionFrom2Dmatrix(board, i, j);
      set.add(board[position]);
    }

    if (set.size === 1 & !set.has(null)) {
      const it = set.values();
      const winner = it.next().value;
      return winner;
    }
  }

  return undefined;
};

const winOnColumn = (board) => {
  for (let i = 0; i < Math.sqrt(board.length); i++) {
    const set = new Set();
    for (let j = 0; j < Math.sqrt(board.length); j++) {
      const position = get1DpositionFrom2Dmatrix(board, j, i);
      set.add(board[position]);
    }

    if (set.size === 1 & !set.has(null)) {
      const it = set.values();
      const winner = it.next().value;
      return winner;
    }
  }

  return undefined;
};

const winOnDiagonal = (board) => {
  const topLeftBottomRightDiagonal = new Set();
  const topRightBottomLeftDiagonal = new Set();
  let incrementAmount;

  // -- Check diagonal from top left to bottom right
  incrementAmount = Math.sqrt(board.length) + 1;

  for (let i = 0; i < board.length; i = i + incrementAmount) {
    topLeftBottomRightDiagonal.add(board[i]);
  }

  if (topLeftBottomRightDiagonal.size === 1 && !topLeftBottomRightDiagonal.has(null)) {
    const it = topLeftBottomRightDiagonal.values();
    const winner = it.next().value;
    return winner;
  }

  // -- Check diagonal from top right to bottom left
  const topRightIndex = Math.sqrt(board.length) - 1;
  incrementAmount = Math.sqrt(board.length) - 1;

  for (let i = topRightIndex; i < board.length - 1; i = i + incrementAmount) {
    topRightBottomLeftDiagonal.add(board[i]);
  }

  if (topRightBottomLeftDiagonal.size === 1 && !topRightBottomLeftDiagonal.has(null)) {
    const it = topRightBottomLeftDiagonal.values();
    const winner = it.next().value;
    return winner;
  }

  // There is no winner
  return undefined;
};

const haveMovesLeft = (board) => {
  // If there are nulls on the board, then there are still moves
  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      return true;
    }
  }

  return false;
};

const gameStatus = (board) => {
  const winner = winOnRow(board) || winOnColumn(board) || winOnDiagonal(board);

  return {
    isTie: !(haveMovesLeft(board)) && (winner === undefined),
    winner: winner
  };
};

export { gameStatus };
