import { Button } from '@material-ui/core';
import "./Square.css";

const Square = ({ move, onClick, disabled, borderRadiusStyle }) => {
  // const handler = disabled => disabled ? undefined : onClick
  const { topLeftStyle, topRightStyle, bottomRightStyle, bottomLeftStyle } = borderRadiusStyle;

  return (
    <div className="box" style={{ 'display': 'inline-block' }}>
      <Button
        className="content"
        style={{ 'position': 'absolute', 'width': '100%', 'borderRadius': `${topLeftStyle} ${topRightStyle} ${bottomRightStyle} ${bottomLeftStyle}` }}
        onClick={move !== null || disabled ? undefined : onClick}
      >
        {move}
      </Button>
    </div>
  );
};

export { Square };
