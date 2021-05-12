import { Button } from '@material-ui/core';
import "./Square.css";

const Square = ({ move, onClick, disabled, borderRadiusStyle }) => {
  const handler = disabled => disabled ? undefined : onClick

  const {topLeftStyle, topRightStyle, bottomRightStyle, bottomLeftStyle} = borderRadiusStyle;

  return (
    // <div className="box" style={{ 'display': 'inline-block', 'margin': '0.75rem'}}>
    <div className="box" style={{ 'display': 'inline-block' }}>
      <Button
        className="content"
        // style={ {'position': 'absolute', 'width': '5vw', 'height': '5vw', 'margin': '0.2rem', 'borderRadius': `${topLeftStyle} ${topRightStyle} ${bottomRightStyle} ${bottomLeftStyle}` }}
        style={ {'position': 'absolute', 'borderRadius': `${topLeftStyle} ${topRightStyle} ${bottomRightStyle} ${bottomLeftStyle}` }}
        // onClick={move !== null ? undefined : onClick}
        onClick={move !== null || disabled ? undefined : onClick}
        // onClick={onClick}
        // disabled={move !== null}
      >
        {move}
      </Button>
    </div>
  );
};

export { Square };
