import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.css';

import { createStore } from 'redux';
import { game } from './reducers/index';
import { StoreState, GameStates } from './types';

const store = createStore<StoreState>(game, {
  pokemonGame: { pokemonName: '', pokemonImage: '', gameState: GameStates.Stopped }
});
ReactDOM.render(<App store={store} />, document.getElementById('root'));
