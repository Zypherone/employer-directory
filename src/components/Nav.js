import React from "react";
import Search from "./Search.js";
import "../styles/Nav.css";

function Nav({ handleSearchChange }) {
  return (
    <nav>
      <Search handleSearchChange = {handleSearchChange} />
    </nav>
  );
}

export default Nav;