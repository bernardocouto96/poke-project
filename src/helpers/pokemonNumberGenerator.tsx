import { scrambleArray } from './arrayScrambler';

export const getPokemonNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * max) + min;

export const getPokemonNumbersForList = (
  min: number,
  max: number,
  optionsQuantity: number,
  correctPokemon: number
) => {
  let optionNumbers: Array<number> = [correctPokemon];
  do {
    const randomNumber = Math.floor(Math.random() * max) + min;
    if (!optionNumbers.includes(randomNumber)) optionNumbers.push(randomNumber);
  } while (optionNumbers.length !== optionsQuantity);

  return scrambleArray(optionNumbers);
};
