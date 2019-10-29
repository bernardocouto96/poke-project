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
import config from '../config/config.json';

const {
  firstPokemonNumber,
  lastPokemonNumber,
  pokemonOptionsAmount,
  savedPokemonOptionsAmount
} = config.game;

export const getSinglePokemonData = (
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
    firstPokemonNumber,
    lastPokemonNumber,
    savedPokemonOptionsAmount
  );
  const pokemonNumberList = getPokemonNumbersForListToStart(
    firstPokemonNumber,
    lastPokemonNumber,
    pokemonOptionsAmount,
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
  dispatch(actions.setPlayerAnswer(playerAnswer));
  dispatch(actions.selectOption());

  playerAnswer === correctAnswer
    ? dispatch(actions.incrementCorrectAnswer())
    : dispatch(actions.incrementWrongAnswer());

  setTimeout(() => {
    dispatch(actions.deselectOption());
    dispatch(actions.setPlayerAnswer(''));
    dispatch(actions.setNextPokemon());
  }, 700);

  const pokemonNumbers = pokemons.map(pokemon => pokemon.number);

  if (pokemonNumbers.length === lastPokemonNumber) {
    if (currentPokemon === lastPokemonNumber - 1)
      dispatch(actions.setGameState(GameStates.Finished));
    return;
  }

  const pokemonNumber = getUniquePokemonNumber(
    firstPokemonNumber,
    lastPokemonNumber,
    pokemonNumbers
  );

  const pokemonNumberList = getRandomNumbersArray(
    firstPokemonNumber,
    lastPokemonNumber,
    pokemonOptionsAmount,
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
  } catch (error) {
    dispatch(actions.pokemonApiFetchFailed());
  }
};

export const finishGame = (dispatch: Dispatch<actions.GameAction>) => {
  dispatch(actions.setGameState(GameStates.Finished));
};

export const restartGame = (dispatch: Dispatch<actions.GameAction>) => {
  dispatch(actions.resetState());
  startGame(dispatch);
};
