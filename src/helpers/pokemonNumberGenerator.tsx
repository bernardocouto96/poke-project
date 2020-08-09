import { scrambleArray } from './arrayScrambler';

export const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * max) + min;

export const getRandomNumbersArray = (min: number, max: number, length: number, requiredNumber?: number) => {
  const numbersArray: Array<number> = requiredNumber ? [requiredNumber] : [];

  while (numbersArray.length !== length) {
    const randomNumber = getRandomNumber(min, max);
    if (!numbersArray.includes(randomNumber)) numbersArray.push(randomNumber);
  }
  return scrambleArray(numbersArray);
};

export const getUniquePokemonNumber = (min: number, max: number, pokemonNumbers: Array<number>): number => {
  const randomNumber = getRandomNumber(min, max);

  return pokemonNumbers.includes(randomNumber) ? getUniquePokemonNumber(min, max, pokemonNumbers) : randomNumber;
};

export const getPokemonNumbersToStart = (min: number, max: number, startAmount: number) => {
  const pokemonNumbers = getRandomNumbersArray(min, max, startAmount);
  return pokemonNumbers;
};

export const getPokemonNumbersForListToStart = (min: number, max: number, optionsAmount: number, correctPokemons: Array<number>) =>
  correctPokemons.map(correctPokemon => getRandomNumbersArray(min, max, optionsAmount, correctPokemon));
