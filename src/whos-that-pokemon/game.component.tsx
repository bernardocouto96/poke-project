import React, { FunctionComponent } from "react";
import styled from "styled-components";

const GameComponent: FunctionComponent = () => {
  return <GameScreen />;
};

const GameScreen = styled.div`
  height: 100vh;
  padding: 10%;
`;

export default GameComponent;
