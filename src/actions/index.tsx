import * as constants from '../constants';
import { GameStates, Pokemon } from '../types';

export interface SetGameState {
  type: constants.SET_GAME_STATE;
  gameState: GameStates;
}

export interface SetPokemons {
  type: constants.SET_POKEMONS;
  pokemons: Array<Pokemon>;
}

export interface SetPlayerAnswer {
  type: constants.SET_PLAYER_ANSWER;
  playerAnswer: string;
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

export interface SelectOption {
  type: constants.SELECT_OPTION;
}

export interface DeselectOption {
  type: constants.DESELECT_OPTION;
}

export interface IncrementCorrectAnswer {
  type: constants.INCREMENT_CORRECT_ANSWER;
}

export interface IncrementWrongAnswer {
  type: constants.INCREMENT_WRONG_ANSWER;
}

export interface SetNextPokemon {
  type: constants.SET_NEXT_POKEMON;
}

export interface ResetState {
  type: constants.RESET_STATE;
}

export type GameAction =
  | SetPokemons
  | FetchPokemonApi
  | PokemonApiFetchedSuccessful
  | PokemonApiFetchedFailed
  | SetGameState
  | IncrementCorrectAnswer
  | IncrementWrongAnswer
  | SetNextPokemon
  | ResetState
  | SelectOption
  | DeselectOption
  | SetPlayerAnswer;

export function setGameState(gameState: GameStates): SetGameState {
  return {
    type: constants.SET_GAME_STATE,
    gameState
  };
}

export function selectOption(): SelectOption {
  return {
    type: constants.SELECT_OPTION
  };
}

export function deselectOption(): DeselectOption {
  return {
    type: constants.DESELECT_OPTION
  };
}

export function setPokemons(pokemons: Array<Pokemon>): SetPokemons {
  return {
    type: constants.SET_POKEMONS,
    pokemons
  };
}

export function setPlayerAnswer(playerAnswer: string): SetPlayerAnswer {
  return {
    type: constants.SET_PLAYER_ANSWER,
    playerAnswer
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

export function incrementCorrectAnswer(): IncrementCorrectAnswer {
  return {
    type: constants.INCREMENT_CORRECT_ANSWER
  };
}

export function incrementWrongAnswer(): IncrementWrongAnswer {
  return {
    type: constants.INCREMENT_WRONG_ANSWER
  };
}

export function setNextPokemon(): SetNextPokemon {
  return {
    type: constants.SET_NEXT_POKEMON
  };
}

export function resetState(): ResetState {
  return {
    type: constants.RESET_STATE
  };
}
