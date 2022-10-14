import React from "react";

const Pokemon = ({ pokemon }) => {
  const onHearthClick = () => {
    console.log("pokemon favritado");
  };
  const hearth = "❤";
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
