import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export const PokemonImageComponent: FunctionComponent<PokemonImageProps> = ({ pokemonImage }) => {
  console.log('pokemon image', pokemonImage);
  return <PokemonImage pokemonImage={pokemonImage} />;
};

const PokemonImage = styled.div<PokemonImageProps>`
  height: 200px;
  width: 200px;
  background-image: url('${props => props.pokemonImage}');
  background-size: contain;
  filter: brightness(0%);
`;

interface PokemonImageProps {
  pokemonImage: string;
}
