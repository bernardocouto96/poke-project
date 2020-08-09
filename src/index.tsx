import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './app.scss';
import './styles/index.scss';
import { StoreState } from './types';
import { INITIAL_GAME_STATE } from './constants';

ReactDOM.render(<App />, document.getElementById('root'));
