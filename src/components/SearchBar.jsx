import React from "react";
import { useState } from "react";
import { searchPokemon } from "../api";

const SearchBar = () => {
  const [search, setSearch] = useState("pika");
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = (e) => {
    onSearchHandler(search);
  };

  //link para fetch 20 pokemons
  //https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log(result);
    setPokemon(result);
  };

  return (
    <div className="searchBar_container">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Buscar pokemon"
          onChange={onChangeHandler}
        ></input>
      </div>

      <div className="searchBar_btn">
        <button onClick={onButtonClickHandler}>Buscar</button>
      </div>
      {pokemon && (
        <div>
          <p>Nome :{pokemon.name}</p>
          <p>Altura :{pokemon.height}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
