import React, { useState, useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../hooks/redux";
import { Link } from "react-router-dom";

import { getAllVideogames } from "../redux/videogames/videogamesActions";
import { getAllGenres } from "../redux/genres/genresActions";

import { CardVideogame } from "./CardVideogame";

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

  return (
    <div>
      {videogames.length &&
        videogames.map((game: any, index) => {
          return (
            <div key={index}>
              <Link to={`/${game._id}`} className="">
                <CardVideogame
                  name={game.name}
                  genres={game.genres.map((e: string) => e)}
                  rating={game.rating}
                  background_image={game.background_image}
                />
              </Link>
            </div>
          );
        })}
    </div>
  );
};
