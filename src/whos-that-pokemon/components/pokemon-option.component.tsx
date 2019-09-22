import React from 'react';
import styled from 'styled-components';

type PokemonOptionsProps = {
  pokemonOptionName: string;
  onPokemonOptionSelected: (playerAnswer: string) => void;
};

const PokemonOptionComponent: React.FC<PokemonOptionsProps> = ({
  pokemonOptionName,
  onPokemonOptionSelected
}) => {
  return (
    <PokemonOption onClick={() => onPokemonOptionSelected(pokemonOptionName)}>
      {pokemonOptionName}
    </PokemonOption>
  );
};

const PokemonOption = styled.div`
  border-radius: 5px;
  border: 1px solid #666;
  color: yellow;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  text-align: center;
  font-family: roboto;
  font-size: 2em;
  margin: 10px;
  padding: 5px;
  cursor: pointer;
`;

export default PokemonOptionComponent;
