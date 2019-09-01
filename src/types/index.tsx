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
    isFetching?: boolean;
    pokemonOptionList?: Array<string>;
  };
}
