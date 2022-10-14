import React from "react";

//components
import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = ({ pokemons, loading, page, totalPages, setPages }) => {
  const onLeftClick = () => {
    if (page > 0) {
      setPages(page - 1);
    }
  };
  const onRightClick = () => {
    if (page !== totalPages) {
      setPages(page + 1);
    }
  };
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>
          <Pagination
            page={page + 1}
            totalPages={totalPages}
            setPages={setPages}
            onLeftClick={onLeftClick}
            onRightClick={onRightClick}
          />
        </div>
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
