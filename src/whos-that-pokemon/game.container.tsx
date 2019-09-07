import { GameComponent } from './game.component';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { startGame, getCurrentPokemonData } from './game.selectors';

const mapStateToProps = (state: StoreState) => {
  console.log('state', state);

  const {
    gameState,
    pokemonImages,
    pokemonNames,
    isFetching,
    pokemonOptionsList,
    currentPokemon
  } = state.pokemonGame;

  return {
    gameState,
    pokemonImage: getCurrentPokemonData(pokemonImages, currentPokemon),
    pokemonName: getCurrentPokemonData(pokemonNames, currentPokemon),
    isFetching,
    pokemonOptions: getCurrentPokemonData(pokemonOptionsList, currentPokemon)
  };
};

const mapDispatchToProps = (dispatch: Dispatch<actions.GameAction>) => {
  return {
    gameStartHandler: () => startGame(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameComponent);
