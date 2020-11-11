import React from 'react';
import PropTypes from 'prop-types';
import BackgroundSky from './BackgroundSky';
import MissilesBase from './MissilesBase';
import MissilesHead from './MissilesHead';
import TotalScored from './TotalScored'
import Ufo from './Ufo';
import StartGame from './StartGame';
import Title from './Title';
import WeaponMissiles from './WeaponMissiles';
import Lives from './Lives';

const MainGameCanvas = (props) => {
  const gameHeight = 1200;
  const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];

  const totlives = [];
  for (let i = 0; i < props.gameState.totlives; i++) {
    const heartPosition = {
      x: -180 - (i * 90),
      y: 35
    };
    totlives.push(<Lives key={i} position={heartPosition}/>);
  }

  return (
    <svg
      id="space-invader-canvas"
      preserveAspectRatio="xMaxYMax none"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
      onClick={props.shoot}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="5" dy="5" stdDeviation="2" />
        </filter>
      </defs>
      <BackgroundSky />
      {/* <Ground /> */}

      {props.gameState.cannonBalls.map(cannonBall => (
        <WeaponMissiles
          key={cannonBall.id}
          position={cannonBall.position}
        />
      ))}

      <MissilesHead rotation={props.angle} />
      <MissilesBase />
      <TotalScored score={props.gameState.kills} />

      { ! props.gameState.started &&
      <g>
        <StartGame onClick={() => props.startGame()} />
        <Title />
      </g>
      }

      {props.gameState.flyingObjects.map(flyingObject => (
        <Ufo
          key={flyingObject.id}
          position={flyingObject.position}
        />
      ))}

      {totlives}
    </svg>
  );
};

MainGameCanvas.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    totlives: PropTypes.number.isRequired,
  }).isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  currentPlayer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }),
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    maxScore: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  })),
  shoot: PropTypes.func.isRequired,
};

MainGameCanvas.defaultProps = {
  currentPlayer: null,
  players: null,
};

export default MainGameCanvas;
