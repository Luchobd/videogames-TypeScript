import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <Link to={"/videogame"}>
        <button>Create Videogame</button>
      </Link>
    </div>
  );
}
