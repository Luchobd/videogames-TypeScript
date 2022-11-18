import React, { useState, useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../hooks/redux";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

import { getAllVideogames } from "../redux/videogames/videogamesActions";
import { getAllGenres } from "../redux/genres/genresActions";
import { Paginated } from "./Paginated";
import { CardVideogame } from "./CardVideogame";
import { SearchBar } from "./SearchBar";

export const CardsVideogames: React.FC = () => {
  const dispatch = useCustomDispatch();
  const { videogames } = useCustomSelector((state) => state.videogames);
  const { genres } = useCustomSelector((state) => state.genres);

  console.log(videogames);
  console.log(genres);

  useEffect(() => {
    dispatch(getAllVideogames());
    dispatch(getAllGenres());
  }, [dispatch]);

  // Paginated
  const [currentPage, setCurrentPage] = useState(1);
  const [videogamesPerPage] = useState(15);

  const indexOfLastVideogames = currentPage * videogamesPerPage;
  const indexOfFirstVideogames = indexOfLastVideogames - videogamesPerPage;
  const currentVideogames = videogames.slice(
    indexOfFirstVideogames,
    indexOfLastVideogames
  );

  const paginatedFunction = (
    pageNumber: React.SetStateAction<number>
  ): void => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Navbar />
      <div>
        <SearchBar setCurrentPege={setCurrentPage} />
      </div>
      <div>
        <Paginated
          videogamesPerPage={videogamesPerPage}
          allVideogames={videogames.length}
          paginated={paginatedFunction}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {videogames.length ? (
        currentVideogames.map((game: any, index) => {
          return (
            <div key={index} className="cards__container">
              <Link to={`/${game._id}`} style={{ textDecoration: "none" }}>
                <CardVideogame
                  name={game.name}
                  genres={game.genres.map((e: string) => e)}
                  rating={game.rating}
                  background_image={game.background_image}
                  // platforms={game.platforms}
                />
              </Link>
            </div>
          );
        })
      ) : (
        <div>Loading</div>
      )}
      <div>
        <Paginated
          videogamesPerPage={videogamesPerPage}
          allVideogames={videogames.length}
          paginated={paginatedFunction}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
