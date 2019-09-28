import { GameAction } from '../actions';
import { StoreState } from '../types/index';
import {
  FETCH_POKEMON_API,
  POKEMON_API_FETCH_SUCCESSFUL,
  POKEMON_API_FETCH_FAILED,
  SET_GAME_STATE,
  INCREMENT_CORRECT_ANSWER,
  INCREMENT_WRONG_ANSWER,
  SET_NEXT_POKEMON,
  SET_POKEMONS,
  RESET_STATE,
  INITIAL_GAME_STATE,
  SELECT_OPTION,
  DESELECT_OPTION,
  SET_PLAYER_ANSWER
} from '../constants/index';

export function game(state: StoreState, action: GameAction): StoreState {
  const pokemonGameState = state.pokemonGame;
  switch (action.type) {
    case SET_GAME_STATE:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, gameState: action.gameState }
      };
    case SET_POKEMONS:
      return {
        ...state,
        pokemonGame: {
          ...pokemonGameState,
          pokemons: action.pokemons
        }
      };

    case SET_PLAYER_ANSWER:
      return {
        ...state,
        pokemonGame: {
          ...pokemonGameState,
          playerAnswer: action.playerAnswer
        }
      };
    case SELECT_OPTION: {
      return {
        ...state,
        pokemonGame: {
          ...pokemonGameState,
          optionIsSelected: true
        }
      };
    }
    case DESELECT_OPTION: {
      return {
        ...state,
        pokemonGame: {
          ...pokemonGameState,
          optionIsSelected: false
        }
      };
    }
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
    case INCREMENT_CORRECT_ANSWER:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, correctAnswers: state.pokemonGame.correctAnswers + 1 }
      };
    case INCREMENT_WRONG_ANSWER:
      return {
        ...state,
        pokemonGame: { ...pokemonGameState, wrongAnswers: state.pokemonGame.wrongAnswers + 1 }
      };
    case SET_NEXT_POKEMON:
      return {
        ...state,
        pokemonGame: {
          ...pokemonGameState,
          currentPokemon: state.pokemonGame.currentPokemon + 1,
          nextPokemon: state.pokemonGame.nextPokemon + 1
        }
      };
    case RESET_STATE:
      return {
        ...state,
        pokemonGame: INITIAL_GAME_STATE
      };
  }
  return state;
}
