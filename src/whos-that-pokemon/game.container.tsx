import { GameComponent } from './game.component';
import * as actions from '../actions/';
import { StoreState, GameStates, Pokemon } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { startGame, handleOptionSelected, getCurrentPokemonData } from './game.selectors';

const mapStateToProps = (state: StoreState): MapStateToProps => {
  console.log('state', state);

  const { gameState, pokemons, isFetching, currentPokemon } = state.pokemonGame;
  const { pokemonName, pokemonImage, pokemonOptions } = getCurrentPokemonData(
    pokemons,
    currentPokemon
  );

  return {
    gameState,
    pokemons,
    pokemonName,
    pokemonImage,
    pokemonOptions,
    currentPokemon,
    isFetching
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.GameAction>): MapDispatchToProps => {
  return {
    gameStartHandler: () => startGame(dispatch),
    pokemonOptionSelectedHandler: (
      playerAnswer: string,
      correctAnswer: string,
      pokemons: Array<Pokemon>,
      currentPokemon: number
    ) => handleOptionSelected(playerAnswer, correctAnswer, pokemons, currentPokemon, dispatch)
  };
};

const mergeProps = (stateProps: MapStateToProps, dispatchProps: MapDispatchToProps) => {
  const {
    gameState,
    pokemonImage,
    pokemonName,
    isFetching,
    pokemonOptions,
    pokemons,
    currentPokemon
  } = stateProps;

  const { gameStartHandler, pokemonOptionSelectedHandler } = dispatchProps;

  return {
    gameState,
    pokemonImage,
    pokemonName,
    isFetching,
    pokemonOptions,
    onGameStart: () => gameStartHandler(),
    onPokemonOptionSelected: (playerAnswer: string) =>
      pokemonOptionSelectedHandler(playerAnswer, pokemonName, pokemons, currentPokemon)
  };
};

type MapStateToProps = {
  gameState: GameStates;
  pokemons: Array<Pokemon>;
  pokemonImage: string;
  pokemonName: string;
  pokemonOptions: Array<string>;
  currentPokemon: number;
  isFetching: boolean;
};

type MapDispatchToProps = {
  gameStartHandler: () => void;
  pokemonOptionSelectedHandler: (
    playerAnswer: string,
    correctAnswer: string,
    pokemons: Array<Pokemon>,
    currentPokemon: number
  ) => void;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(GameComponent);
