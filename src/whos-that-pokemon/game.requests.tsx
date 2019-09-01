import axios from 'axios';
import config from '../config';
import { Dispatch } from 'redux';
import * as actions from '../actions/';
import { GameStates } from '../types';

export const getPokemon = async (pokemonNumber: number, dispatch: Dispatch<actions.GameAction>) => {
  dispatch(actions.fetchPokemonApi());

  const url = config.api.pokemonUrl;
  try {
    const { data } = await axios.get(`${url}/${pokemonNumber}`);
    const { name, sprites } = data;
    const { front_default } = sprites;

    dispatch(actions.setGameState(GameStates.Running));
    dispatch(actions.setPokemonName(name));
    dispatch(actions.setPokemonImage(front_default));
    dispatch(actions.pokemonApiFetchSuccessful());
  } catch (error) {
    dispatch(actions.pokemonApiFetchFailed());
  }
};
