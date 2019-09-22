import React from 'react';
import PokemonOption from './pokemon-option.component';
import styled from 'styled-components';

type PokemonOptionsProps = {
  pokemonOptions: Array<string>;
  onPokemonOptionSelected: (playerAnswer: string) => void;
};

const PokemonOptionListComponent: React.FC<PokemonOptionsProps> = ({
  pokemonOptions,
  onPokemonOptionSelected
}) => {
  return (
    <PokemonOptionList>
      {pokemonOptions.map((name, index) => (
        <PokemonOption
          key={index}
          pokemonOptionName={name}
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
