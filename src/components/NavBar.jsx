import React from "react";

const NavBar = () => {
  const logoPng =
    "	https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";
  return (
    <nav>
      <div>
        <img src={logoPng} alt="logo" className="navbar_img" />
      </div>
      <div>❤</div>
    </nav>
  );
};

export default NavBar;
