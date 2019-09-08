import React from 'react';
import { PokemonOptionComponent } from './pokemon-option.component';
import styled from 'styled-components';

export const PokemonOptionListComponent: React.FC<PokemonOptionsProps> = ({
  correctAnswer,
  pokemonOptions,
  onPokemonOptionSelected
}) => {
  return (
    <PokemonOptionList>
      {pokemonOptions.map((name, index) => (
        <PokemonOptionComponent
          key={index}
          pokemonOptionName={name}
          correctAnswer={correctAnswer}
          onPokemonOptionSelected={onPokemonOptionSelected}
        />
      ))}
    </PokemonOptionList>
  );
};

const PokemonOptionList = styled.div`
  max-width: 300px;
  width: 100%;
`;

type PokemonOptionsProps = {
  correctAnswer: string;
  pokemonOptions: Array<string>;
  onPokemonOptionSelected: (playerAnswer: string, correctAnswer: string) => void;
};
