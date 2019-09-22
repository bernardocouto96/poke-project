import React from 'react';
import styled from 'styled-components';
import PokemonOptionButton from './button.component';

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
        <PokemonOptionButton key={index} onClick={() => onPokemonOptionSelected(name)}>
          {name}
        </PokemonOptionButton>
      ))}
    </PokemonOptionList>
  );
};

const PokemonOptionList = styled.div`
  min-width: 300px;
  display: flex;
  flex-direction: column;
`;

export default PokemonOptionListComponent;
