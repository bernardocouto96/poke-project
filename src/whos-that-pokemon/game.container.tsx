import { GameComponent } from './game.component';
import * as actions from '../actions/';
import { StoreState, Pokemon } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {
  startGame,
  handleOptionSelected,
  getSinglePokemonData,
  finishGame,
  restartGame
} from './game.selectors';
import config from '../config/config.json';

type MapDispatchToProps = {
  gameStartHandler: () => void;
  pokemonOptionSelectedHandler: (
    playerAnswer: string,
    correctAnswer: string,
    pokemons: Array<Pokemon>,
    currentPokemon: number
  ) => void;
  timerFinishedHandler: () => void;
  restartGameHandler: () => void;
};

const mapStateToProps = (state: StoreState): StoreState => {
  console.log('state', state);

  return state;
};

const mapDispatchToProps = (dispatch: Dispatch<actions.GameAction>): MapDispatchToProps => {
  return {
    gameStartHandler: () => startGame(dispatch),
    pokemonOptionSelectedHandler: (
      playerAnswer: string,
      correctAnswer: string,
      pokemons: Array<Pokemon>,
      currentPokemon: number
    ) => handleOptionSelected(playerAnswer, correctAnswer, pokemons, currentPokemon, dispatch),
    timerFinishedHandler: () => finishGame(dispatch),
    restartGameHandler: () => restartGame(dispatch)
  };
};

const mergeProps = (stateProps: StoreState, dispatchProps: MapDispatchToProps) => {
  const {
    gameState,
    pokemons,
    isFetching,
    currentPokemon,
    nextPokemon,
    correctAnswers,
    wrongAnswers
  } = stateProps.pokemonGame;

  const { pokemonName, pokemonImage, pokemonOptions } = getSinglePokemonData(
    pokemons,
    currentPokemon
  );

  const { pokemonImage: nextPokemonImage } = getSinglePokemonData(pokemons, nextPokemon);

  const {
    gameStartHandler,
    pokemonOptionSelectedHandler,
    timerFinishedHandler,
    restartGameHandler
  } = dispatchProps;

  return {
    gameState,
    pokemonImage,
    pokemonOptions,
    nextPokemonImage,
    correctAnswers,
    wrongAnswers,
    initialTimer: config.game.time,
    isFetching,
    onGameStart: () => gameStartHandler(),
    onPokemonOptionSelected: (playerAnswer: string) =>
      pokemonOptionSelectedHandler(playerAnswer, pokemonName, pokemons, currentPokemon),
    onTimerFinished: () => timerFinishedHandler(),
    onGameRestart: () => restartGameHandler()
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(GameComponent);
