import { Dispatch } from 'redux';
import * as actions from '../actions/';
import { getPokemonOptions, getPokemons, getPokemon, getPokemonOptionsList } from './game.requests';
import {
  getPokemonNumbersToStart,
  getPokemonNumbersForListToStart,
  getRandomNumbersArray,
  getUniquePokemonNumber
} from '../helpers/pokemonNumberGenerator';
import { GameStates, Pokemon } from '../types';
import * as R from 'ramda';

const FIRST_POKEMON_NUMBER = 1;
const LAST_POKEMON_NUMBER = 151;
const SAVED_POKEMON_AMOUNT = 5;
const POKEMON_OPTIONS_AMOUNT = 4;

export const getCurrentPokemonData = (
  pokemons: Array<Pokemon>,
  currentPokemon: number
): { pokemonName: string; pokemonImage: string; pokemonOptions: [] } => {
  const pokemonName: string = R.propOr('', 'name', pokemons[currentPokemon]);
  const pokemonImage: string = R.propOr('', 'image', pokemons[currentPokemon]);
  const pokemonOptions: [] = R.propOr([], 'options', pokemons[currentPokemon]);

  return { pokemonName, pokemonImage, pokemonOptions };
};

export const startGame = async (dispatch: Dispatch<actions.GameAction>) => {
  const pokemonNumbers = getPokemonNumbersToStart(
    FIRST_POKEMON_NUMBER,
    LAST_POKEMON_NUMBER,
    SAVED_POKEMON_AMOUNT
  );
  const pokemonNumberList = getPokemonNumbersForListToStart(
    FIRST_POKEMON_NUMBER,
    LAST_POKEMON_NUMBER,
    POKEMON_OPTIONS_AMOUNT,
    pokemonNumbers
  );
  dispatch(actions.fetchPokemonApi());

  try {
    const { pokemonNames, pokemonImages } = await getPokemons(pokemonNumbers);
    const pokemonOptions = await getPokemonOptionsList(pokemonNumberList);

    const pokemons = pokemonNumbers.map((number, index) => {
      const name = pokemonNames[index];
      const image = pokemonImages[index];
      const options = pokemonOptions[index];
      return { number, name, image, options };
    });

    dispatch(actions.pokemonApiFetchSuccessful());

    dispatch(actions.setPokemons(pokemons));

    dispatch(actions.setGameState(GameStates.Running));
  } catch (error) {
    dispatch(actions.pokemonApiFetchFailed());
  }
};

export const handleOptionSelected = async (
  playerAnswer: string,
  correctAnswer: string,
  pokemons: Array<Pokemon>,
  currentPokemon: number,
  dispatch: Dispatch<actions.GameAction>
) => {
  playerAnswer === correctAnswer
    ? dispatch(actions.incrementCorrectAnswer())
    : dispatch(actions.incrementWrongAnswer());

  const pokemonNumbers = pokemons.map(pokemon => pokemon.number);

  if (pokemonNumbers.length === LAST_POKEMON_NUMBER) {
    if (currentPokemon === LAST_POKEMON_NUMBER - 1)
      dispatch(actions.setGameState(GameStates.Finished));
    return;
  }

  const pokemonNumber = getUniquePokemonNumber(
    FIRST_POKEMON_NUMBER,
    LAST_POKEMON_NUMBER,
    pokemonNumbers
  );

  const pokemonNumberList = getRandomNumbersArray(
    FIRST_POKEMON_NUMBER,
    LAST_POKEMON_NUMBER,
    POKEMON_OPTIONS_AMOUNT,
    pokemonNumber
  );
  try {
    const { pokemonName, pokemonImage } = await getPokemon(pokemonNumber);
    const pokemonOptions = await getPokemonOptions(pokemonNumberList);
    const updatedPokemons = [
      ...pokemons,
      { number: pokemonNumber, name: pokemonName, image: pokemonImage, options: pokemonOptions }
    ];

    dispatch(actions.setPokemons(updatedPokemons));

    dispatch(actions.setNextPokemon());
  } catch (error) {
    dispatch(actions.pokemonApiFetchFailed());
  }
};
