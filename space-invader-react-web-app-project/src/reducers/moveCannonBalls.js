import { calculateNextPosition } from '../utils/formulas';

const moveBalls = cannonBalls => (
  cannonBalls
    .filter(cannonBall => (
      cannonBall.position.y > -800 && cannonBall.position.x > -500 && cannonBall.position.x < 500
    ))
    .map((cannonBall) => {
      const { x, y } = cannonBall.position;
      const { angle } = cannonBall;
      return {
        ...cannonBall,
        position: calculateNextPosition(x, y, angle, 5),
      };
    })
);

export default moveBalls;
