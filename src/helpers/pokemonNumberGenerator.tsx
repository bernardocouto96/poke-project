import { scrambleArray } from './arrayScrambler';

const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * max) + min;

const getRandomNumbersArray = (
  min: number,
  max: number,
  lenght: number,
  requiredNumber?: number
) => {
  let numbersArray: Array<number> = requiredNumber ? [requiredNumber] : [];

  while (numbersArray.length !== lenght) {
    const randomNumber = getRandomNumber(min, max);
    if (!numbersArray.includes(randomNumber)) numbersArray.push(randomNumber);
  }
  return numbersArray;
};

export const getPokemonNumbersToStart = (min: number, max: number, startAmount: number) => {
  const pokemonNumbers = getRandomNumbersArray(min, max, startAmount);
  return pokemonNumbers;
};

export const getPokemonNumbersForListToStart = (
  min: number,
  max: number,
  optionsAmount: number,
  correctPokemons: Array<number>
) => {
  return correctPokemons.map(correctPokemon =>
    scrambleArray(getRandomNumbersArray(min, max, optionsAmount, correctPokemon))
  );
};
