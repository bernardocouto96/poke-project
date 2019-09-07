import { Dispatch } from 'redux';
import * as actions from '../actions/';
import { getPokemonOptions, getPokemons } from './game.requests';
import {
  getPokemonNumbersToStart,
  getPokemonNumbersForListToStart
} from '../helpers/pokemonNumberGenerator';
import { GameStates } from '../types';

const FIRST_POKEMON_NUMBER = 1;
const LAST_POKEMON_NUMBER = 151;
const SAVED_POKEMON_AMOUNT = 5;
const POKEMON_OPTIONS_AMOUNT = 4;

export const getCurrentPokemonData = (pokemonDataList: Array<any>, currentPokemon: number) =>
  pokemonDataList[currentPokemon];

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
    const pokemonData = await getPokemons(pokemonNumbers);
    const pokemonOptions = await getPokemonOptions(pokemonNumberList);

    dispatch(actions.pokemonApiFetchSuccessful());

    dispatch(actions.setPokemonNames(pokemonData.pokemonNames));
    dispatch(actions.setPokemonImages(pokemonData.pokemonImages));
    dispatch(actions.setPokemonOptionsList(pokemonOptions));

    dispatch(actions.setGameState(GameStates.Running));
  } catch (error) {
    dispatch(actions.pokemonApiFetchFailed());
  }
};
