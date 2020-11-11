import { calculateAngle } from '../utils/formulas';

function shoot(state, action) {
  if (!state.gameState.started) return state;

  const { cannonBalls } = state.gameState;

  if (cannonBalls.length === 9) return state;

  const { x, y } = action.mousePosition;

  const angle = calculateAngle(0, 0, x, y);

  const id = (new Date()).getTime();
  const cannonBall = {
    position: { x: 0, y: 0 },
    angle,
    id,
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      cannonBalls: [...cannonBalls, cannonBall],
    }
  };
}

export default shoot;
