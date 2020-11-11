import React from 'react';
import PropTypes from 'prop-types';
import { pathFromBezierCurve } from '../utils/formulas';

const MissilesHead = (props) => {
  const cannonPipeStyle = {
    fill: '#A3BCB6',
    stroke: '#a28089',
    strokeWidth: '2px',
  };
  const transform = `rotate(${props.rotation}, 0, 0)`;

    
  const muzzleWidth = 40;
  const halfMuzzle = 20;
  const height = 35;
  const yBasis = 9;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfMuzzle,
      y: -yBasis,
    },
    initialControlPoint: {
      x: -40,
      y: height * 1.7,
    },
    endingControlPoint: {
      x: 80,
      y: height * 1.7,
    },
    endingAxis: {
      x: muzzleWidth,
      y: 0,
    },
  };

  return (  
    <g transform={transform}>
      <path
        style={cannonPipeStyle}
        d={pathFromBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={-halfMuzzle}
        y1={-yBasis}
        x2={halfMuzzle}
        y2={-yBasis}
        style={cannonPipeStyle}
      />
    </g>
  );
};

MissilesHead.propTypes = {
  rotation: PropTypes.number.isRequired,
};

export default MissilesHead;