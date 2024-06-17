import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox(props) {
  const [search, setSearch] = useState("");
  function handleSearch(event) {
    const { value } = event.target;
    setSearch(value);
  }

  function handleClick() {
    props.onAdd(search);
    setSearch("");
  }
  return (
    <div className="search">
      <input
        onChange={handleSearch}
        name="inputBox"
        placeholder="Search"
        value={search}
      />
      <button onClick={handleClick}>
        <SearchIcon />
      </button>
    </div>
  );
}
export default SearchBox;
