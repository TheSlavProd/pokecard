import { AnyAction } from "redux";
import { EPokemonCards } from "../../types/globals";

// TODO: do not use any
interface IPokemon {
  id: number;
  sprites: any;
  name: string;
  stats: any; //TODO: use normal interfaces
  types: any;
  abilities: any;
  weight: number;
  height: number;
}

interface IPokemonState {
  allPokemons: Array<any>;
  currentPokemon: IPokemon | null;
  currentPage: number;
}

const initialState: IPokemonState = {
  allPokemons: [],
  currentPokemon: null,
  currentPage: 1,
};

export function pokemonReducer(
  state = initialState,
  action: AnyAction
): IPokemonState {
  switch (action.type) {
    case EPokemonCards.ADD_POKEMONS:
      return {
        ...state,
        allPokemons: [...action.payload],
      };

    case EPokemonCards.ADD_CURRENT_POKEMON:
      return {
        ...state,
        currentPokemon: action.payload,
      };

    case EPokemonCards.CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return state;
  }
}
