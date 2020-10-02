import React from "react";
import { StyledDisplay } from "./styles/StyleDisplay";

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
