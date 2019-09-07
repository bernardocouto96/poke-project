import React, { useEffect } from 'react';
import styled from 'styled-components';
import { TimerComponent } from './components/timer-component';
import { PokemonImageComponent } from './components/pokemon-image.component';
import { PokemonOptionListComponent } from './components/pokemon-option-list.component';
import { GameStates } from '../types';

export const GameComponent: React.FC<GameComponentProps> = ({
  gameState,
  gameStartHandler,
  pokemonImage,
  pokemonName,
  pokemonOptions,
  isFetching
}) => {
  useEffect(() => {
    gameStartHandler();
  }, [gameStartHandler]);

  return (
    <GameScreen>
      <TimerComponent />
      <PokemonImageAndOptionsWrapper>
        <PokemonImageComponent pokemonImage={pokemonImage} />
        <PokemonOptionListComponent pokemonOptions={pokemonOptions} />
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

type GameComponentProps = {
  gameState: GameStates;
  pokemonImage: string;
  pokemonName: string;
  isFetching?: boolean;
  pokemonOptions: Array<string>;
  gameStartHandler: () => void;
};
