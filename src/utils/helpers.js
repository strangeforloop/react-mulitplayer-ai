import { gameStatus } from './gameOverConditions';

const miniMax = (testBoard, isMaximizingPlayer) => {
  const scoreMap = {
    "o": 1,   // maximizing player, AI
    "x": -1,  // minimizing player, human
    "Tie": 0
  };

  const { isTie, winner } = gameStatus(testBoard);

  if (isTie) {
    return scoreMap["Tie"];
  }

  if (winner) {
    return scoreMap[winner];
  }

  let bestScore;

  if (isMaximizingPlayer) { // goal: maximize score
    bestScore = -Infinity;

    for (let i = 0; i < testBoard.length; i++) {
      if (testBoard[i] === null) {
        const aiGameBoard = [...testBoard];
        aiGameBoard[i] = 'o';
        let score = miniMax(aiGameBoard, false);
        bestScore = Math.max(bestScore, score);
      }
    }
    return bestScore;
  } else {  // goal: minimize score r
    bestScore = Infinity;

    for (let i = 0; i < testBoard.length; i++) {
      if (testBoard[i] === null) {
        const aiGameBoard = [...testBoard];
        aiGameBoard[i] = 'x';
        let score = miniMax(aiGameBoard, true);
        bestScore = Math.min(bestScore, score);
      }
    }
    return bestScore;
  }
};


export const playBestMove = (board, setIsGameOver, setWinningPlayer, setBoard, setCurrentPlayer) => {
  const { isTie, winner } = gameStatus(board);

  if (winner || isTie) {
    setIsGameOver(true);
    setWinningPlayer(winner);
    return;
  }

  let bestScore = -Infinity;
  let bestMove;

  let newBoard = [...board];

  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {  // if this spot is available, try the rest of the tree
      let testBoard = [...board];
      testBoard[i] = 'o';
      let score = miniMax(testBoard, false);
      testBoard[i] = '';
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  newBoard[bestMove] = 'o';
  setBoard(newBoard);
  setCurrentPlayer('playerOne');
};
