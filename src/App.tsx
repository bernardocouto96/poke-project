import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HeaderComponent } from "./header/header.component";
import { GameContainer } from "./whos-that-pokemon/game.container";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <HeaderComponent />
        <Route path="/game" component={GameContainer} />
      </div>
    </Router>
  );
};

export default App;
