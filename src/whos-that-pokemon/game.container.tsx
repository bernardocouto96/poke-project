import { GameComponent } from './game.component';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getPokemon } from './game.requests';

export const mapStateToProps = (state: StoreState) => {
  const { gameState, pokemonImage, pokemonName, isFetching } = state.pokemonGame;
  return {
    gameState,
    pokemonImage,
    pokemonName,
    isFetching
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.GameAction>) => {
  return {
    getPokemon: (pokemonNumber: number) => getPokemon(pokemonNumber, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameComponent);
