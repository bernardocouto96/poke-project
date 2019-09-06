export enum GameStates {
  Stopped,
  Running,
  Finished
}

export interface StoreState {
  pokemonGame: {
    gameState: GameStates;
    pokemonName: string;
    pokemonImage: string;
    pokemonOptions: Array<string> | [];
    isFetching?: boolean;
  };
}
