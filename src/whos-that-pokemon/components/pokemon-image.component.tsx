import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const PokemonImageComponent: FunctionComponent = () => {
  return <PokemonImage />;
};

const PokemonImage = styled.div`
  height: 200px;
  width: 200px;
  background-image: url("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png");
  background-size: contain;
  filter: brightness(0%);
`;
