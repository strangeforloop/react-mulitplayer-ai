import React, { Button } from '@material-ui/core';
import "./Square.css";
import PropTypes from 'prop-types';

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

Square.propTypes = {
  move: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  borderRadiusStyle: PropTypes.object
};

export { Square };
