import { GameAction } from '../actions';
import { StoreState } from '../types/index';
import {
  SET_POKEMON_NAMES,
  SET_POKEMON_IMAGES,
  FETCH_POKEMON_API,
  POKEMON_API_FETCH_SUCCESSFUL,
  POKEMON_API_FETCH_FAILED,
  SET_GAME_STATE,
  SET_POKEMON_OPTIONS_LIST
} from '../constants/index';

export function game(state: StoreState, action: GameAction): StoreState {
  const pokemonGameState = state.pokemonGame;
  switch (action.type) {
    case SET_GAME_STATE:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, gameState: action.gameState }
      };
    case SET_POKEMON_NAMES:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, pokemonNames: action.pokemonNames }
      };
    case SET_POKEMON_IMAGES:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, pokemonImages: action.pokemonImages }
      };
    case FETCH_POKEMON_API:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, isFetching: true }
      };
    case POKEMON_API_FETCH_SUCCESSFUL:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, isFetching: false }
      };
    case POKEMON_API_FETCH_FAILED:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, isFetching: false }
      };
    case SET_POKEMON_OPTIONS_LIST:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, pokemonOptionsList: action.pokemonOptionsList }
      };
  }
  return state;
}
