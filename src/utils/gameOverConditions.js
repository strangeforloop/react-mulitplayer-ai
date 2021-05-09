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

  // there is no winner
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

// returns a boolean flag for if the game is over
// returns the winner
const gameStatus = (board) => {
  return {
    boardFull: !(haveMovesLeft(board)),
    winner: winOnRow(board) || winOnColumn(board) || winOnDiagonal(board)
  }

  // const s = gameStatus(board)
  // const gameOver = s.boardFULL || !!s.winner

  // const {boardFull, winner} = gameStatus(voard)
  // if (boardFull || winner) => set game over

  // tie if board is full and winner is undefined

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
    return false;
  }
};

export { gameStatus };

/*
   0 1 2
0
1
2
 00, 11, 22
 03, 12, 21

 0 1 2
 3 4 5
 6 7 8

   0 1 2 3
0
1
2
3
 00, 11, 22, 33
 03, 12, 21, 30

  0  1  2  3
  4  5  6  7
  8  9  10 11
  12 13 14 15


  --- How to calucate how much to add: (top left to bottom right diagonal)
    amountToIncrement = Math.sqrt(board.length) + 1
    3 = Math.sqrt(4) + 1
    4 = Math.sqrt(9) + 1
    5 = Math.sqrt(16) + 1
    6 = Math.sqrt(25) + 1


  --- How to calucate how much to add: (top right to bottom left diagonal)
  const topRightIndex = Math.sqrt(board.length) - 1;
  const amountToAdd = Math.sqrt(board.length) - 1;
    2 = Math.sqrt(9) - 1
    3 = Math.sqrt(16) - 1
*/
