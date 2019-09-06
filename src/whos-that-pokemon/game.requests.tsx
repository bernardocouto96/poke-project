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

    // dispatch(actions.setGameState(GameStates.Running));
    dispatch(actions.pokemonApiFetchSuccessful());
    dispatch(actions.setPokemonName(name));
    dispatch(actions.setPokemonImage(front_default));
  } catch (error) {
    dispatch(actions.pokemonApiFetchFailed());
  }
};

export const getPokemonOptions = async (
  pokemonNumberList: Array<number>,
  dispatch: Dispatch<actions.GameAction>
) => {
  dispatch(actions.fetchPokemonApi());

  const url = config.api.pokemonUrl;
  try {
    const requests = pokemonNumberList.map(pokemonNumber => axios.get(`${url}/${pokemonNumber}`));
    const responses = await Promise.all(requests);
    const pokemonOptions = responses.map(response => response.data.name);

    dispatch(actions.pokemonApiFetchSuccessful());
    dispatch(actions.setPokemonOptions(pokemonOptions));
    dispatch(actions.setGameState(GameStates.Running));
  } catch (error) {
    dispatch(actions.pokemonApiFetchFailed());
  }
};
