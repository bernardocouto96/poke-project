import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { TimerComponent } from "./components/timer-component";
import { PokemonImageComponent } from "./components/pokemon-image.component";
import { PokemonOptionListComponent } from "./components/pokemon-option-list.component";

const GameComponent: FunctionComponent<any> = () => {
  return (
    <GameScreen>
      <TimerComponent />
      <PokemonImageAndOptionsWrapper>
        <PokemonImageComponent />
        <PokemonOptionListComponent />
      </PokemonImageAndOptionsWrapper>
    </GameScreen>
  );
};

const GameScreen = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const PokemonImageAndOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default GameComponent;
