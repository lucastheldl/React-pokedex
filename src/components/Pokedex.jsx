import React from "react";
import Pokemon from "./Pokemon";

const Pokedex = ({ pokemons, loading }) => {
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Paginação</div>
      </div>
      {loading ? (
        <p>Carregando, segura as pontas...</p>
      ) : (
        <div className="pokedex-grid">
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon pokemon={pokemon} key={index} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
