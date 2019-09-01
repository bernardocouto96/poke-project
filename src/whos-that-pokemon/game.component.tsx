import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { TimerComponent } from './components/timer-component';
import { PokemonImageComponent } from './components/pokemon-image.component';
import { PokemonOptionListComponent } from './components/pokemon-option-list.component';
import { getPokemonNumber } from '../helpers/pokemonNumberGenerator';
import { GameStates } from '../types';

export const GameComponent: FunctionComponent<GameComponentProps> = ({
  gameState,
  getPokemon,
  pokemonImage,
  pokemonName,
  isFetching
}) => {
  if (gameState === GameStates.Stopped) getPokemon(getPokemonNumber(1, 151));

  return (
    <GameScreen>
      <TimerComponent />
      <PokemonImageAndOptionsWrapper>
        <PokemonImageComponent pokemonImage={pokemonImage} />
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

interface GameComponentProps {
  gameState: GameStates;
  pokemonImage: string;
  pokemonName: string;
  isFetching?: boolean;
  getPokemon: Function;
}
