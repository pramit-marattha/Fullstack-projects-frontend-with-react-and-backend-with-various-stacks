import React from 'react';
import PropTypes from 'prop-types';

const Ufobaseplate = (props) => {
  const style = {
    fill: 'limegreen',
    stroke: '#5c5c5c',
  };

  return (
    <ellipse
      cx={props.position.x}
      cy={props.position.y}
      rx="25"
      ry="5"
      style={style}
    />
  );
};

Ufobaseplate.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Ufobaseplate;