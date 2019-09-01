import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./app.css";

import { createStore } from "redux";
import { game } from "./reducers/index";
import { StoreState } from "./types/index";

//@ts-ignore
const store = createStore<StoreState>(game, {
  pokemonGame: {}
});
ReactDOM.render(<App />, document.getElementById("root"));
