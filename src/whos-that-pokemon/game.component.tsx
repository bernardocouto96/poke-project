import React, { useEffect } from 'react';
import styled from 'styled-components';
import Timer from './components/timer-component';
import PokemonImages from './components/pokemon-image.component';
import PokemonOptionList from './components/pokemon-option-list.component';
import { GameStates } from '../types';
import Loading from './components/loading.component';

export const GameComponent: React.FC<GameComponentProps> = ({
  gameState,
  onGameStart,
  onPokemonOptionSelected,
  pokemonImage,
  pokemonName,
  pokemonOptions,
  isFetching
}) => {
  useEffect(() => {
    onGameStart();
  }, []);

  return (
    <GameScreen>
      {isFetching ? (
        <Loading />
      ) : (
        [
          <Timer />,
          <PokemonImageAndOptionsWrapper>
            <PokemonImages pokemonImage={pokemonImage} />
            <PokemonOptionList
              correctAnswer={pokemonName}
              pokemonOptions={pokemonOptions}
              onPokemonOptionSelected={onPokemonOptionSelected}
            />
          </PokemonImageAndOptionsWrapper>
        ]
      )}
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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

type GameComponentProps = {
  gameState: GameStates;
  pokemonImage: string;
  pokemonName: string;
  isFetching?: boolean;
  pokemonOptions: Array<string>;
  onGameStart: () => void;
  onPokemonOptionSelected: (playerAnswer: string, correctAnswer: string) => void;
};
