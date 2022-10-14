import React, { useEffect, useState } from "react";
import "./App.css";

//hooks
import { getPokemonData, getPokemons } from "./api";
//components
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Pokedex from "./components/Pokedex";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, seLoading] = useState(false);

  const fetchPokemons = async () => {
    try {
      seLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return getPokemonData(pokemon.url);
      });

      const result = await Promise.all(promises);

      setPokemons(result);

      seLoading(false);
    } catch (error) {
      console.log("fetchPokemons:", error.message);
      seLoading(false);
    }
  };
  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading} />
      <div className="App"></div>
    </div>
  );
}

export default App;
