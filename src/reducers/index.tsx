import { GameAction } from "../actions";
import { StoreState } from "../types/index";
import {
  SET_POKEMON_NAME,
  SET_POKEMON_IMAGE,
  FETCH_POKEMON_API
} from "../constants/index";

export function game(state: StoreState, action: GameAction): StoreState {
  switch (action.type) {
    case SET_POKEMON_NAME:
      return { ...state, pokemonGame: { pokemonName: action.pokemonName } };
    case SET_POKEMON_IMAGE:
      return { ...state, pokemonGame: { pokemonImage: action.pokemonImage } };
    case FETCH_POKEMON_API: {
      return { ...state, pokemonGame: { isFetching: true } };
    }
  }
  return state;
}
