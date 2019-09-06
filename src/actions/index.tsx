import * as constants from '../constants';
import { GameStates } from '../types';

export interface SetGameState {
  type: constants.SET_GAME_STATE;
  gameState: GameStates;
}

export interface SetPokemonName {
  type: constants.SET_POKEMON_NAME;
  pokemonName: string;
}

export interface SetPokemonImage {
  type: constants.SET_POKEMON_IMAGE;
  pokemonImage: string;
}

export interface SetPokemonOptions {
  type: constants.SET_POKEMON_OPTIONS;
  pokemonOptions: Array<string>;
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
  | SetPokemonName
  | SetPokemonImage
  | FetchPokemonApi
  | PokemonApiFetchedSuccessful
  | PokemonApiFetchedFailed
  | SetGameState
  | SetPokemonOptions;

export function setGameState(gameState: GameStates): SetGameState {
  return {
    type: constants.SET_GAME_STATE,
    gameState
  };
}

export function setPokemonName(name: string): SetPokemonName {
  return {
    type: constants.SET_POKEMON_NAME,
    pokemonName: name
  };
}

export function setPokemonImage(url: string): SetPokemonImage {
  return {
    type: constants.SET_POKEMON_IMAGE,
    pokemonImage: url
  };
}

export function setPokemonOptions(pokemonOptions: Array<string>) {
  return {
    type: constants.SET_POKEMON_OPTIONS,
    pokemonOptions
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
