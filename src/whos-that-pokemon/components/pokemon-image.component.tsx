import React from 'react';
import styled from 'styled-components';

type PokemonImageProps = {
  pokemonImage: string;
  nextPokemonImage: string;
};

type CurrentPokemonImageProps = {
  pokemonImageUrl: string;
};

const PokemonImageComponent: React.FC<PokemonImageProps> = ({ pokemonImage, nextPokemonImage }) => {
  return (
    <>
      <CurrentPokemonImage pokemonImageUrl={pokemonImage} />
      <NextPokemonImage src={nextPokemonImage} />
    </>
  );
};

const CurrentPokemonImage = styled.div<CurrentPokemonImageProps>`
  height: 200px;
  width: 200px;
  background-image: url('${props => props.pokemonImageUrl}');
  background-size: contain;
  filter: brightness(0%);
`;

const NextPokemonImage = styled.img`
  display: none;
`;

export default PokemonImageComponent;
