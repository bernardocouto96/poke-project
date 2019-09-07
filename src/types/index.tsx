export enum GameStates {
  Stopped,
  Running,
  Finished
}

export interface StoreState {
  pokemonGame: {
    gameState: GameStates;
    pokemonNames: Array<string>;
    pokemonImages: Array<string>;
    pokemonOptionsList: Array<Array<string>> | [[]];
    currentPokemon: number;
    isFetching?: boolean;
  };
}
