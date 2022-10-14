import { createContext } from "react";

const FavoriteContext = createContext({
  favPokemon: [],
  updateFavPokemon: (id) => null,
});

export const FavoriteProvider = FavoriteContext.Provider;

export default FavoriteContext;
