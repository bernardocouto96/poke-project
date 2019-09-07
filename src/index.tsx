import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.css';

import { createStore } from 'redux';
import { game } from './reducers/index';
import { StoreState, GameStates } from './types';

const store = createStore<StoreState>(game, {
  pokemonGame: {
    pokemonNames: [],
    pokemonImages: [],
    currentPokemon: 0,
    gameState: GameStates.Stopped,
    pokemonOptionsList: [[]]
  }
});
ReactDOM.render(<App store={store} />, document.getElementById('root'));
