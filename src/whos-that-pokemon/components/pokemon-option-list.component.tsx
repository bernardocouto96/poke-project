import React from 'react';
import PokemonOption from './pokemon-option.component';
import styled from 'styled-components';

type PokemonOptionsProps = {
  correctAnswer: string;
  pokemonOptions: Array<string>;
  onPokemonOptionSelected: (playerAnswer: string, correctAnswer: string) => void;
};

const PokemonOptionListComponent: React.FC<PokemonOptionsProps> = ({
  correctAnswer,
  pokemonOptions,
  onPokemonOptionSelected
}) => {
  return (
    <PokemonOptionList>
      {pokemonOptions.map((name, index) => (
        <PokemonOption
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
  min-width: 300px;
`;

export default PokemonOptionListComponent;
