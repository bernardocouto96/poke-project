import axios from 'axios';
import config from '../config';

const getPokemonRequestUrl = (pokemonNumber: number) => `${config.api.pokemonUrl}/${pokemonNumber}`;

export const getPokemon = async (pokemonNumber: number) => {
  const { data } = await axios.get(getPokemonRequestUrl(pokemonNumber));

  return { pokemonName: data.name, pokemonImage: data.sprites.front_default };
};

export const getPokemons = async (pokemonNumbers: Array<number>) => {
  const requests = pokemonNumbers.map(pokemonNumber =>
    axios.get(getPokemonRequestUrl(pokemonNumber))
  );
  const responses = await Promise.all(requests);
  console.log('responses', responses);
  const pokemonNames = responses.map(response => response.data.name);
  const pokemonImages = responses.map(response => response.data.sprites.front_default);

  return { pokemonNames, pokemonImages };
};

export const getPokemonOptions = async (pokemonNumbers: Array<number>) => {
  const requests = pokemonNumbers.map(pokemonNumber =>
    axios.get(getPokemonRequestUrl(pokemonNumber))
  );
  const responses = await Promise.all(requests);
  return responses.map(response => response.data.name);
};

export const getPokemonOptionsList = async (pokemonNumbersList: Array<Array<number>>) => {
  const pokemonOptionsList = await Promise.all(
    pokemonNumbersList.map(async pokemonNumbers => {
      return await getPokemonOptions(pokemonNumbers);
    })
  );

  return pokemonOptionsList;
};
