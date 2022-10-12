import React from "react";
import { useState } from "react";

const SearchBar = (props) => {
  const { onSearch } = props;
  const [search, setSearch] = useState("pika");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = (e) => {
    onSearch(search);
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
