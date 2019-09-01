import GameComponent from "./game.component";
import * as actions from "../actions/";
import { StoreState } from "../types/index";
import { connect } from "react-redux";
import { Dispatch } from "redux";

export function mapStateToProps({ pokemonGame }: StoreState) {
  const { pokemonImage, pokemonName, isFetching } = pokemonGame;
  return {
    pokemonImage,
    pokemonName,
    isFetching
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.GameAction>) {
  return {
    setPokemonName: (name: string) => dispatch(actions.setPokemonName(name)),
    setPokemonImage: (url: string) => dispatch(actions.setPokemonImage(url))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameComponent);
