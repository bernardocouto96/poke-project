import { GameComponent } from './game.component';
import * as actions from '../actions/';
import { StoreState, GameStates, Pokemon } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  startGame,
  handleOptionSelected,
  getCurrentPokemonImage,
  getCurrentPokemonName,
  getCurrentPokemonOptions
} from './game.selectors';

const mapStateToProps = (state: StoreState): MapStateToProps => {
  console.log('state', state);

  const { gameState, pokemons, isFetching, currentPokemon } = state.pokemonGame;

  return {
    gameState,
    pokemons,
    pokemonName: getCurrentPokemonName(pokemons, currentPokemon),
    pokemonImage: getCurrentPokemonImage(pokemons, currentPokemon),
    pokemonOptions: getCurrentPokemonOptions(pokemons, currentPokemon),
    isFetching
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.GameAction>): MapDispatchToProps => {
  return {
    gameStartHandler: () => startGame(dispatch),
    pokemonOptionSelectedHandler: (
      playerAnswer: string,
      correctAnswer: string,
      pokemons: Array<Pokemon>
    ) => handleOptionSelected(playerAnswer, correctAnswer, pokemons, dispatch)
  };
};

const mergeProps = (stateProps: MapStateToProps, dispatchProps: MapDispatchToProps) => {
  const { gameState, pokemonImage, pokemonName, isFetching, pokemonOptions, pokemons } = stateProps;

  const { gameStartHandler, pokemonOptionSelectedHandler } = dispatchProps;

  return {
    gameState,
    pokemonImage,
    pokemonName,
    isFetching,
    pokemonOptions,
    onGameStart: () => gameStartHandler(),
    onPokemonOptionSelected: (playerAnswer: string, correctAnswer: string) =>
      pokemonOptionSelectedHandler(playerAnswer, correctAnswer, pokemons)
  };
};

type MapStateToProps = {
  gameState: GameStates;
  pokemons: Array<Pokemon>;
  pokemonImage: string;
  pokemonName: string;
  isFetching?: boolean;
  pokemonOptions: Array<string>;
};

type MapDispatchToProps = {
  gameStartHandler: () => void;
  pokemonOptionSelectedHandler: (
    playerAnswer: string,
    correctAnswer: string,
    pokemons: Array<Pokemon>
  ) => void;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(GameComponent);
