import { EPokemonCards } from "../../types/globals";

// TODO: any??
export const GetPokemonList = (data: any) => {
  return {
    type: EPokemonCards.ADD_POKEMONS,
    payload: data,
  };
};
