import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.css';

import { createStore } from 'redux';
import { game } from './reducers/index';
import { StoreState, GameStates } from './types';

const store = createStore<StoreState>(game, {
  pokemonGame: {
    pokemons: [],
    currentPokemon: 0,
    gameState: GameStates.Stopped,
    correctAnswers: 0,
    wrongAnswers: 0,
    isFetching: true
  }
});
ReactDOM.render(<App store={store} />, document.getElementById('root'));
