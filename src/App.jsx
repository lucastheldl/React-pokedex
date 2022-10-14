import React, { useEffect, useState } from "react";
import "./App.css";

//hooks
import { getPokemonData, getPokemons, searchPokemon } from "./api";
//components
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Pokedex from "./components/Pokedex";

//context
import { FavoriteProvider } from "./context/favoriteContext";

const favoritesKey = "f";

function App() {
  const itensPerPage = 25;

  const [page, setPage] = useState(0);
  const [totalPages, settotalPages] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFount, setnotFount] = useState();

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setnotFount(false);
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return getPokemonData(pokemon.url);
      });

      const result = await Promise.all(promises);

      setPokemons(result);

      settotalPages(Math.ceil(data.count / itensPerPage));
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons:", error.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const loadFavoritePokemons = () => {
    const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey));
    setFavorites(pokemons);
  };

  useEffect(() => {
    if (window.localStorage.getItem(favoritesKey)) {
      loadFavoritePokemons();
    }
  }, []);

  const updateFavPokemon = (name) => {
    const updatedFavorites = [...favorites];
    const favoriteIndex = favorites.indexOf(name);

    if (favoriteIndex >= 0) {
      updatedFavorites.slice(favoriteIndex, 1);
    } else {
      updatedFavorites.push(name);
    }
    window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  const onSearchHandler = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setnotFount(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setnotFount(true);
      setLoading(false);
    } else {
      setPage(0);
      settotalPages(1);
      setPokemons([result]);
      setLoading(false);
    }
  };

  return (
    <FavoriteProvider
      value={{ favPokemon: favorites, updateFavPokemon: updateFavPokemon }}
    >
      <div className="App">
        <NavBar />
        <SearchBar onSearchHandler={onSearchHandler} />
        {notFount ? (
          <p className="not-found">Pokemon não encontrado!</p>
        ) : (
          <Pokedex
            pokemons={pokemons}
            loading={loading}
            page={page}
            totalPages={totalPages}
            setPages={setPage}
          />
        )}
      </div>
    </FavoriteProvider>
  );
}

export default App;
