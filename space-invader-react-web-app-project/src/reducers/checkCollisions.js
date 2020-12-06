import { checkCollision } from '../utils/formulas';
import { gameHeight } from '../utils/constants';

const checkCollisions = (cannonBalls, flyingDiscs) => {
  const objectsDestroyed = [];
  flyingDiscs.forEach((flyingDisc) => {
    const currentLifeTime = (new Date()).getTime() - flyingDisc.createdAt;
    const calculatedPosition = {
      x: flyingDisc.position.x,
      y: flyingDisc.position.y + ((currentLifeTime / 4000) * gameHeight),
    };
    const rectA = {
      x1: calculatedPosition.x - 40,
      y1: calculatedPosition.y - 10,
      x2: calculatedPosition.x + 40,
      y2: calculatedPosition.y + 10,
    };
    cannonBalls.forEach((cannonBall) => {
      const rectB = {
        x1: cannonBall.position.x - 8,
        y1: cannonBall.position.y - 8,
        x2: cannonBall.position.x + 8,
        y2: cannonBall.position.y + 8,
      };
      if (checkCollision(rectA, rectB)) {
        objectsDestroyed.push({
          cannonBallId: cannonBall.id,
          flyingDiscId: flyingDisc.id,
        });
      }
    });
  });
  return objectsDestroyed;
};

export default checkCollisions;
