import { GameComponent } from './game.component';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { getPokemon, getPokemonOptions } from './game.requests';

export const mapStateToProps = (state: StoreState) => {
  console.log('state', state);

  const { gameState, pokemonImage, pokemonName, isFetching, pokemonOptions } = state.pokemonGame;
  return {
    gameState,
    pokemonImage,
    pokemonName,
    isFetching,
    pokemonOptions
  };
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.GameAction>) => {
  return {
    getPokemon: (pokemonNumber: number) => getPokemon(pokemonNumber, dispatch),
    getPokemonOptions: (pokemonNumberList: Array<number>) =>
      getPokemonOptions(pokemonNumberList, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameComponent);
