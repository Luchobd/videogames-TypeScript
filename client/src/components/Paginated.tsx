import React from "react";
import { PropsPaginated } from "../interfaces/card.interfaces";

export function Paginated({
  videogamesPerPage,
  allVideogames,
  paginated,
  setCurrentPage,
}: PropsPaginated) {
  const pageNumbers = [];

  for (let i = 0; i < Math.ceil(allVideogames / videogamesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <>
      <nav className="container__nav">
        <ul className="nav__ul">
          {pageNumbers &&
            pageNumbers.map((page) => (
              <li key={page} className="nav__ul_list">
                <button
                  onClick={() => paginated(page)}
                  className="nav__ul_btn"
                >{`${page}`}</button>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}
