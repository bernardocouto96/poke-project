import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HeaderComponent } from './header/header.component';
import GameContainer from './whos-that-pokemon/game.container';
import { Provider } from 'react-redux';

interface AppProps {
  store: any;
}

const App: React.FC<AppProps> = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app-container">
          <HeaderComponent />
          <Route path="/" component={GameContainer} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
