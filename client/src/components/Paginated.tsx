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
    <div>
      <div>
        <nav>
          <ul>
            {pageNumbers &&
              pageNumbers.map((page) => (
                <li key={page}>
                  <button onClick={() => paginated(page)}>{`${page}`}</button>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
