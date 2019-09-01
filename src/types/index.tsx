export interface StoreState {
  pokemonGame: {
    pokemonName?: string;
    pokemonImage?: string;
    isFetching?: boolean;
    pokemonOptionList?: Array<string>;
  };
}
