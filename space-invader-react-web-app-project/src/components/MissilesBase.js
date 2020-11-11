import React from 'react';
import { pathFromBezierCurve } from '../utils/formulas';

const MissilesBase = (props) => {
  const cannonBaseStyle = {
    fill: '#202020',
    stroke: '#3F3F3F',
    strokeWidth: '10px',
  };

  
  const ballStyle = {
    fill: 'black',
    stroke: 'white',
    strokeWidth: '2px',
  };


  const baseWith = 80;
  const halfBase = 40;
  const height = 100; 
  const negativeHeight = height * - 1;

  const cubicBezierCurve = {
    initialAxis: {
      x: -halfBase,
      y: height,
    },
    initialControlPoint: {
      x: 20,
      y: negativeHeight,
    },
    endingControlPoint: {
      x: 60,
      y: negativeHeight,
    },
    endingAxis: {
      x: baseWith,
      y: 0,
    },
  };

  return (
    <>
    <ellipse
    style={ballStyle}
    // cx={props.position.x}
    // cy={props.position.y}
    rx="5"
    ry="5"
  />
     <g>
       <path
        style={cannonBaseStyle}
        d={pathFromBezierCurve(cubicBezierCurve)}
      />
      <line
        x1={-halfBase}
        y1={height}
        x2={halfBase}
        y2={height}
        style={cannonBaseStyle}
      />
    </g>
    </>
  );
};

export default MissilesBase;
