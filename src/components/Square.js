import { Button } from '@material-ui/core';

const Square = ({ move, onClick }) => {
  return (
    <Button
      style={{'width': '3rem', 'height': '3rem'}}
      onClick={onClick}
      disabled={move !== null}
    >
      {move}
    </Button>
  );
};

export { Square };
