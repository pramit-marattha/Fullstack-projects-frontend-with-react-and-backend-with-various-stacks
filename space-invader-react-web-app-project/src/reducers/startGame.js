export default (state, initialGameState) => {
  return {
    ...state,
    gameState: {
      ...initialGameState,
      started: true,
    }
  }
};
