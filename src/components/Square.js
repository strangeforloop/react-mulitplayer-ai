import React from 'react';

const Square = ({ move, onClick }) => {
  return (
    <button
      style={{'width': '3rem', 'height': '3rem'}}
      onClick={onClick}
      disabled={move !== null}
    >
      {move}
    </button>
  );
};

export { Square };
