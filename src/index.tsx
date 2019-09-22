import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.scss';
import './styles/index.scss';

import { createStore } from 'redux';
import { game } from './reducers/index';
import { StoreState } from './types';
import { INITIAL_GAME_STATE } from './constants';

const store = createStore<StoreState>(game, {
  pokemonGame: INITIAL_GAME_STATE
});
ReactDOM.render(<App store={store} />, document.getElementById('root'));
