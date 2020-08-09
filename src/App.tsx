import React from 'react';
import axios from 'axios';
import { SWRConfig } from 'swr';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HeaderComponent } from './header/header.component';
import GameContainer from './whos-that-pokemon/game.container';
import config from './config/config.json';

const App: React.FC = () => {
  return (
    <Router>
      <SWRConfig
        value={{
          refreshInterval: 0,
          fetcher: url => axios.get(url).then(res => res.data),
        }}
      >
        <div className="app-container">
          <div className="game-container">
            <HeaderComponent />
            <Route path="/" component={GameContainer} />
          </div>
        </div>
      </SWRConfig>
    </Router>
  );
};

export default App;
