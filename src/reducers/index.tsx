import { GameAction } from '../actions';
import { StoreState } from '../types/index';
import {
  SET_POKEMON_NAME,
  SET_POKEMON_IMAGE,
  FETCH_POKEMON_API,
  POKEMON_API_FETCH_SUCCESSFUL,
  POKEMON_API_FETCH_FAILED,
  SET_GAME_STATE
} from '../constants/index';

export function game(state: StoreState, action: GameAction): StoreState {
  const pokemonGameState = state.pokemonGame;
  switch (action.type) {
    case SET_GAME_STATE:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, gameState: action.gameState }
      };
    case SET_POKEMON_NAME:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, pokemonName: action.pokemonName }
      };
    case SET_POKEMON_IMAGE:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, pokemonImage: action.pokemonImage }
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
  }
  return state;
}
