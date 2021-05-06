import { Button } from '@material-ui/core';

const Square = ({ move, onClick, disabled }) => {
  const handler = disabled => disabled ? undefined : onClick

  return (
    <Button
      style={{'width': '3rem', 'height': '3rem'}}
      // onClick={move !== null ? undefined : onClick}
      onClick={move !== null || disabled ? undefined : onClick}
      // onClick={onClick}
      // disabled={move !== null}
    >
      {move}
    </Button>
  );
};

export { Square };
