import React, { FunctionComponent } from 'react';
import { PokemonOptionComponent } from './pokemon-option.component';
import styled from 'styled-components';

export const PokemonOptionListComponent: FunctionComponent = () => {
  const pokemonNameList = ['gengar', 'caterpie', 'charizard', 'articuno'];
  return (
    <PokemonOptionList>
      {pokemonNameList.map(name => (
        <PokemonOptionComponent name={name} />
      ))}
    </PokemonOptionList>
  );
};

const PokemonOptionList = styled.div`
  max-width: 300px;
  width: 100%;
`;
