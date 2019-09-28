import React from 'react';
import styled from 'styled-components';
import PokemonOptionButton from './button.component';
import classNames from 'classnames';

type PokemonOptionsProps = {
  pokemonOptions: Array<string>;
  onPokemonOptionSelected: (playerAnswer: string) => void;
  optionIsSelected: boolean;
  correctAnswer: string;
  playerAnswer: string;
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
          className={classNames({
            '--mainText': true,
            '--correct': correctAnswer === name && optionIsSelected,
            '--wrong': playerAnswer === name && playerAnswer !== correctAnswer && optionIsSelected
          })}
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
