import { EPokemonCards } from "../../types/globals";

// TODO: any??
export const GetCurrentPokemon = (data: any) => {
  return {
    type: EPokemonCards.ADD_CURRENT_POKEMON,
    payload: data,
  };
};
