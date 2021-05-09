import { Button } from '@material-ui/core';

const Square = ({ move, onClick, disabled, borderRadiusStyle }) => {
  const handler = disabled => disabled ? undefined : onClick

  const {topLeftStyle, topRightStyle, bottomRightStyle, bottomLeftStyle} = borderRadiusStyle;

  return (
    <Button
      style={ {'width': '5vw', 'height': '5vw', 'margin': '0.2rem', 'borderRadius': `${topLeftStyle} ${topRightStyle} ${bottomRightStyle} ${bottomLeftStyle}` }}
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
