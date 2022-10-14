import React, { useContext } from "react";
import FavoriteContext from "../context/favoriteContext";

const Pokemon = ({ pokemon }) => {
  const { favPokemon, updateFavPokemon } = useContext(FavoriteContext);

  const onHearthClick = () => {
    updateFavPokemon(pokemon.name);
  };
  const hearth = favPokemon.includes(pokemon.name) ? "💗" : "🖤";

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-image"
        />
      </div>

      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <p>{pokemon.id}</p>
        </div>

        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>
          <button className="pokemon-heart-btn" onClick={onHearthClick}>
            <p>{hearth}</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
