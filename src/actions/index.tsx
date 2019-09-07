import * as constants from '../constants';
import { GameStates } from '../types';

export interface SetGameState {
  type: constants.SET_GAME_STATE;
  gameState: GameStates;
}

export interface SetPokemonNames {
  type: constants.SET_POKEMON_NAMES;
  pokemonNames: Array<string>;
}

export interface SetPokemonImage {
  type: constants.SET_POKEMON_IMAGES;
  pokemonImages: Array<string>;
}

export interface SetPokemonOptionsList {
  type: constants.SET_POKEMON_OPTIONS_LIST;
  pokemonOptionsList: Array<Array<string>>;
}

export interface FetchPokemonApi {
  type: constants.FETCH_POKEMON_API;
}

export interface PokemonApiFetchedSuccessful {
  type: constants.POKEMON_API_FETCH_SUCCESSFUL;
}

export interface PokemonApiFetchedFailed {
  type: constants.POKEMON_API_FETCH_FAILED;
}

export type GameAction =
  | SetPokemonNames
  | SetPokemonImage
  | FetchPokemonApi
  | PokemonApiFetchedSuccessful
  | PokemonApiFetchedFailed
  | SetGameState
  | SetPokemonOptionsList;

export function setGameState(gameState: GameStates): SetGameState {
  return {
    type: constants.SET_GAME_STATE,
    gameState
  };
}

export function setPokemonNames(names: Array<string>): SetPokemonNames {
  return {
    type: constants.SET_POKEMON_NAMES,
    pokemonNames: names
  };
}

export function setPokemonImages(urls: Array<string>): SetPokemonImage {
  return {
    type: constants.SET_POKEMON_IMAGES,
    pokemonImages: urls
  };
}

export function setPokemonOptionsList(pokemonOptionsList: Array<Array<string>>) {
  return {
    type: constants.SET_POKEMON_OPTIONS_LIST,
    pokemonOptionsList
  };
}

export function fetchPokemonApi(): FetchPokemonApi {
  return {
    type: constants.FETCH_POKEMON_API
  };
}

export function pokemonApiFetchSuccessful(): PokemonApiFetchedSuccessful {
  return {
    type: constants.POKEMON_API_FETCH_SUCCESSFUL
  };
}

export function pokemonApiFetchFailed(): PokemonApiFetchedFailed {
  return {
    type: constants.POKEMON_API_FETCH_FAILED
  };
}
