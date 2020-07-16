import React from "react";
import Search from "./Search.js";
import "../styles/Nav.css";

function Nav({ handleSearchChange }) {
    return (
        <nav>
            <div>
                <Search handleSearchChange = {handleSearchChange} />
            </div>
        </nav>
        );
    }

export default Nav;