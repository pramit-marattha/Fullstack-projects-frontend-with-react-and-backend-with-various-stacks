import React from "react";
import styled from "styled-components";

const StyledStartButton = styled.button`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: 1.5rem;
  color: rgb(106, 163, 137);
  font-weight: 900;
  text-transform: uppercase;
  font-family: Finger Paint, cursive;
  padding: 1em 2em;
  border: 2px solid rgb(106, 163, 137);
  border-radius: 1em;
  background: rgb(205, 255, 232);
  transform-style: preserve-3d;
  transition: all 175ms cubic-bezier(0, 0, 1, 1);

  &:hover {
    background: #21f3db;
    box-shadow: 0 0 10px #21f3ec, 0 0 40px #21f3d4, 0 0 80px #21f3cd;
  }
`;

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start</StyledStartButton>
);

export default StartButton;
