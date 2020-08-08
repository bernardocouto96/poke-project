import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HeaderComponent } from './header/header.component';
import GameContainer from './whos-that-pokemon/game.container';
import { Provider } from 'react-redux';

type AppProps = {
  store: any;
};

const App: React.FC<AppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <div className="game-container">
            <HeaderComponent />
            <Route path="/" component={GameContainer} />
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
