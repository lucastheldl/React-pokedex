import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import { searchPokemon } from "./api.jsx";

function App() {
  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    console.log("pokemon:", result);
  };

  return (
    <div>
      <NavBar />
      <SearchBar onSearch={onSearchHandler} />
      <div className="App"></div>
    </div>
  );
}

export default App;
