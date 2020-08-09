import config from '../config/config.json';
import { scrambleArray } from '../helpers/arrayScrambler';

export const getPokeApiRequestUrl = (endpoint: number) => (endpoint ? `${config.api.pokemonUrl}/${endpoint}` : null);

export const getNextPokemonNumbers = (pastSelectedPokemonNumbers: number[], setSelectedNumber: (n: number) => void): number[] => {
  const { firstPokemonNumber, lastPokemonNumber } = config.game;

  const selectedRandomNumber = Math.floor(Math.random() * lastPokemonNumber) + firstPokemonNumber;
  const anyRandomNumber = Math.floor(Math.random() * lastPokemonNumber) + firstPokemonNumber;

  const hasInvalidRandomNumber = pastSelectedPokemonNumbers.includes(selectedRandomNumber) || anyRandomNumber === selectedRandomNumber;

  if (hasInvalidRandomNumber) {
    return getNextPokemonNumbers(pastSelectedPokemonNumbers, setSelectedNumber);
  }

  const closeToSelectedNumbers = [selectedRandomNumber + 1, selectedRandomNumber - 1];

  setSelectedNumber(selectedRandomNumber);

  return scrambleArray([selectedRandomNumber, anyRandomNumber, ...closeToSelectedNumbers]);
};
