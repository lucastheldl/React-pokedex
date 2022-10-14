import React, { useContext } from "react";
import FavoriteContext from "../context/favoriteContext";

const NavBar = () => {
  const { favPokemon } = useContext(FavoriteContext);
  const logoPng =
    "	https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img src={logoPng} alt="logo" className="navbar_img" />
      </div>
      <div>{favPokemon.length}💗</div>
    </nav>
  );
};

export default NavBar;
