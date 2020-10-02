import React from "react";
import { StyledCell } from "./styles/StyleBox";
import { TETROMINOS } from "../../shapes/tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log("rerender cell")}
  </StyledCell>
);

export default React.memo(Cell);
