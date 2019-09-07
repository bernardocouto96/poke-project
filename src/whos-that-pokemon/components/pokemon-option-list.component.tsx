import React from 'react';
import { PokemonOptionComponent } from './pokemon-option.component';
import styled from 'styled-components';

export const PokemonOptionListComponent: React.FC<PokemonOptionsProps> = ({ pokemonOptions }) => {
  return (
    <PokemonOptionList>
      {pokemonOptions.map((name, index) => (
        <PokemonOptionComponent name={name} key={index} />
      ))}
    </PokemonOptionList>
  );
};

const PokemonOptionList = styled.div`
  max-width: 300px;
  width: 100%;
`;

type PokemonOptionsProps = {
  pokemonOptions: Array<string>;
};
