import React from 'react';
import PropTypes from 'prop-types';

const WeaponMissiles = (props) => {
  
  const ballStyle = {
    fill: 'black',
    stroke: 'white',
    strokeWidth: '3px',
  };
  return (
    <ellipse
      style={ballStyle}
      cx={props.position.x}
      cy={props.position.y}
      rx="8"
      ry="6"
    />
  );
};

WeaponMissiles.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default WeaponMissiles;