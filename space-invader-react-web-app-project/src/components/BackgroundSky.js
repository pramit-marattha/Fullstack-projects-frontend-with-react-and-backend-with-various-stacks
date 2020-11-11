import React from 'react';
import { skyAndGroundWidth } from '../utils/constants';

const BackgroundSky = () => {
  const skyStyle = {
    // fill: 'rgb(29, 29, 29)',
    fill:"rgb(6, 41, 56)",
  // fill:"black",
  // fill: "url(../styles/sky.png)"

  };
  const gameHeight = 1200;
  return (
    <>
    <rect
      style={skyStyle}
      x={skyAndGroundWidth / -2}
      y={100 - gameHeight}
      width={skyAndGroundWidth}
      height={gameHeight}
    />
    </>
  );
};

export default BackgroundSky;


