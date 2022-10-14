import React from "react";
import { useState } from "react";
//css
import "./SearchBar.css";

const SearchBar = ({ onSearchHandler }) => {
  const [search, setSearch] = useState("pika");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length === 0) {
      onSearchHandler(undefined);
    }
  };

  const onButtonClickHandler = (e) => {
    onSearchHandler(search);
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
    </div>
  );
};

export default SearchBar;
