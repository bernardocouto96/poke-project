import { GameStates } from '../types';

export const INITIAL_GAME_STATE = {
  pokemons: [],
  currentPokemon: 0,
  playerAnswer: '',
  nextPokemon: 1,
  gameState: GameStates.Stopped,
  optionIsSelected: false,
  correctAnswers: 0,
  wrongAnswers: 0,
  isFetching: false
};

export const SET_GAME_STATE = 'SET_GAME_STATE';
export type SET_GAME_STATE = typeof SET_GAME_STATE;

export const FETCH_POKEMON_API = 'FETCH_POKEMON_API';
export type FETCH_POKEMON_API = typeof FETCH_POKEMON_API;

export const POKEMON_API_FETCH_SUCCESSFUL = 'POKEMON_API_FETCH_SUCCESSFUL';
export type POKEMON_API_FETCH_SUCCESSFUL = typeof POKEMON_API_FETCH_SUCCESSFUL;

export const POKEMON_API_FETCH_FAILED = 'POKEMON_API_FETCH_FAILED';
export type POKEMON_API_FETCH_FAILED = typeof POKEMON_API_FETCH_FAILED;

export const SET_POKEMONS = 'SET_POKEMONS';
export type SET_POKEMONS = typeof SET_POKEMONS;

export const SET_PLAYER_ANSWER = 'SET_PLAYER_ANSWER';
export type SET_PLAYER_ANSWER = typeof SET_PLAYER_ANSWER;

export const SELECT_OPTION = 'SELECT_OPTION';
export type SELECT_OPTION = typeof SELECT_OPTION;

export const DESELECT_OPTION = 'DESELECT_OPTION';
export type DESELECT_OPTION = typeof DESELECT_OPTION;

export const INCREMENT_CORRECT_ANSWER = 'INCREMENT_CORRECT_ANSWER';
export type INCREMENT_CORRECT_ANSWER = typeof INCREMENT_CORRECT_ANSWER;

export const INCREMENT_WRONG_ANSWER = 'INCREMENT_WRONG_ANSWER';
export type INCREMENT_WRONG_ANSWER = typeof INCREMENT_WRONG_ANSWER;

export const SET_NEXT_POKEMON = 'SET_NEXT_POKEMON';
export type SET_NEXT_POKEMON = typeof SET_NEXT_POKEMON;

export const RESET_STATE = 'RESET_STATE';
export type RESET_STATE = typeof RESET_STATE;
