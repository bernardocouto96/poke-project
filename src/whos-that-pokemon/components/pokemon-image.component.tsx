import React from 'react';
import styled from 'styled-components';

type PokemonImageProps = {
  pokemonImage: string;
};

const PokemonImageComponent: React.FC<PokemonImageProps> = ({ pokemonImage }) => {
  return <PokemonImage pokemonImage={pokemonImage} />;
};

const PokemonImage = styled.div<PokemonImageProps>`
  height: 200px;
  width: 200px;
  background-image: url('${props => props.pokemonImage}');
  background-size: contain;
  filter: brightness(0%);
`;

export default PokemonImageComponent;
