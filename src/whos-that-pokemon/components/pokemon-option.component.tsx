import React from 'react';
import styled from 'styled-components';

export const PokemonOptionComponent: React.FC<PokemonOptionsProps> = ({ name }) => {
  return <PokemonOption>{name}</PokemonOption>;
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
`;

type PokemonOptionsProps = {
  name: string;
};
