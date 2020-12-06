import React from 'react';
import { pathFromBezierCurve } from '../utils/formulas';

const Title = () => {
  const textStyle = {
    // fontFamily: '"Share Tech Mono", monospace',
    fontFamily: '"Finger Paint", cursive',
    fontSize: 140,
    fill: '#cbca62',
  };

  const aliensLineCurve = {
    initialAxis: {
      x: -190,
      y: -950,
    },
    initialControlPoint: {
      x: 25,
      y: -100,
    },
    endingControlPoint: {
      x: 75,
      y: -10,
    },
    endingAxis: {
      x: 470,
      y: 40,
    },
  };

  const goHomeLineCurve = {
    ...aliensLineCurve,
    initialAxis: {
      x: -250,
      y: -780,
    },
    initialControlPoint: {
      x: 825,
      y: -80,
    },
    endingControlPoint: {
      x: 375,
      y: -80,
    },
    endingAxis: {
      x: 520,
      y: 0,
    },
  };

  return (
    <g filter="url(#shadow)">
      <defs>
        <path
          id="AliensPath"
          d={pathFromBezierCurve(aliensLineCurve)}
        />
        <path
          id="GoHomePath"
          d={pathFromBezierCurve(goHomeLineCurve)}
        />
      </defs>
      <text {...textStyle}>
        <textPath xlinkHref="#AliensPath">
          Space,
        </textPath>
      </text>
      <text {...textStyle}>
        <textPath xlinkHref="#GoHomePath">
          Invader!
        </textPath>
      </text>
    </g>
  );
};

export default Title;