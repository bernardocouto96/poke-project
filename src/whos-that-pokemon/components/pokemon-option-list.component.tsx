import React from 'react';
import styled from 'styled-components';
import PokemonOptionButton from './button.component';

type PokemonOptionsProps = {
  pokemonOptions: Array<string>;
  onPokemonOptionSelected: (playerAnswer: string) => void;
  optionIsSelected: boolean;
  correctAnswer: string;
  playerAnswer: string;
};

const answerResultFeedback = (
  playerAnswer: string,
  name: string,
  correctAnswer: string,
  optionIsSelected: boolean
) => {
  if (optionIsSelected) {
    if (correctAnswer === name) {
      return '--correct';
    }

    if (playerAnswer === name && playerAnswer !== correctAnswer) {
      return '--wrong';
    }
  }
};
const PokemonOptionListComponent: React.FC<PokemonOptionsProps> = ({
  pokemonOptions,
  onPokemonOptionSelected,
  optionIsSelected,
  correctAnswer,
  playerAnswer
}) => {
  return (
    <PokemonOptionList>
      {pokemonOptions.map((name, index) => (
        <PokemonOptionButton
          className={`--mainText
            ${answerResultFeedback(playerAnswer, name, correctAnswer, optionIsSelected)}
          `}
          key={index}
          onClick={() => onPokemonOptionSelected(name)}
          disabled={optionIsSelected}
        >
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
