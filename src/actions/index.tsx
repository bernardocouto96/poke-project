import * as constants from "../constants";

export interface SetPokemonName {
  type: constants.SET_POKEMON_NAME;
  pokemonName: string;
}

export interface SetPokemonImage {
  type: constants.SET_POKEMON_IMAGE;
  pokemonImage: string;
}

export interface FetchPokemonApi {
  type: constants.FETCH_POKEMON_API;
}

export type GameAction = SetPokemonName | SetPokemonImage | FetchPokemonApi;

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

export function fetchPokemonApi(): FetchPokemonApi {
  return {
    type: constants.FETCH_POKEMON_API
  };
}
