import axios from 'axios';
import config from '../config';

export const getPokemons = async (pokemonNumber: Array<number>) => {
  const url = config.api.pokemonUrl;

  const requests = pokemonNumber.map(pokemonNumber => axios.get(`${url}/${pokemonNumber}`));
  const responses = await Promise.all(requests);
  const pokemonNames = responses.map(response => response.data.name);
  const pokemonImages = responses.map(response => response.data.sprites.front_default);

  return { pokemonNames, pokemonImages };
};

export const getPokemonOptions = async (pokemonNumbersList: Array<Array<number>>) => {
  const url = config.api.pokemonUrl;

  const pokemonOptionsList = await Promise.all(
    pokemonNumbersList.map(async pokemonNumbers => {
      const requests = pokemonNumbers.map(pokemonNumber => axios.get(`${url}/${pokemonNumber}`));
      const responses = await Promise.all(requests);
      return responses.map(response => response.data.name);
    })
  );

  return pokemonOptionsList;
};
