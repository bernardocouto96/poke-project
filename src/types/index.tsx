export enum GameStates {
  Stopped,
  Running,
  Finished
}

export type Pokemon = {
  number: number;
  name: string;
  image: string;
  options: Array<string>;
};

export interface StoreState {
  pokemonGame: {
    pokemons: Array<Pokemon>;
    gameState: GameStates;
    currentPokemon: number;
    playerAnswer: string;
    nextPokemon: number;
    optionIsSelected: boolean;
    isFetching: boolean;
    correctAnswers: number;
    wrongAnswers: number;
  };
}
