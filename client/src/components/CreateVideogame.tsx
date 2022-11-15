import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  postVideogame,
  getAllVideogames,
} from "../redux/videogames/videogamesActions";
import { getAllGenres } from "../redux/genres/genresActions";

import { platformsList } from "../hooks/utils/platformsList";

import { Link } from "react-router-dom";
import { useCustomDispatch, useCustomSelector } from "../hooks/redux/index";
import { validateError, validateInput } from "../interfaces/create.interfaces";
import { GenreCreate } from "../interfaces/create.interfaces";

export function CreateVideogame() {
  const dispatch = useCustomDispatch();
  const location = useLocation();
  const { videogames } = useCustomSelector((state) => state.videogames);
  const { genres } = useCustomSelector((state) => state.genres);

  function validate({ input }: validateInput) {
    let errors: validateError = {
      name: "",
      description: "",
      platforms: "",
      background_image: "",
    };
    if (!input.name) {
      errors.name = "Please complete the input name";
    } else if (
      videogames.find(
        (item: any) =>
          item.name.replace(/\s+/g, "").toLowerCase() ===
          input.name.replace(/\s+/g, "").toLowerCase()
      )
    ) {
      errors.name = "the game exists!!";
    } else if (!input.description) {
      errors.description = "Please complete the input description";
    } else if (!input.platforms.length) {
      errors.platforms = "requires placing at least one platform";
    } else if (!input.background_image) {
      errors.background_image = "Please complete the input image";
    }
    return errors;
  }

  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    description: "",
    released: "",
    rating: 0,
    platforms: [],
    genders: [{}],
    background_image: "",
    createdInDb: true,
  });

  return (
    <div>
      <div>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>

      <form action="">
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={input.name}
          placeholder="Enter Name"
          className=""
        />

        <label htmlFor="">Image</label>
        <input
          type="text"
          name="background_image"
          value={input.background_image}
          placeholder="Enter Image"
          className=""
        />

        <label htmlFor="">Rating</label>
        <input
          type="number"
          name="rating"
          value={input.rating}
          placeholder="Enter Rating"
          className=""
          min="1"
          max="5"
          step="0.01"
        />

        <label htmlFor="">Release Date</label>
        <input
          type="date"
          name="released"
          value={input.released}
          placeholder="Enter Released Date"
          className=""
          min="1900-04-01"
          max="2022-08-30"
        />

        <label htmlFor="">Description</label>
        <textarea
          name="description"
          placeholder="Enter Description"
          value={input.description}
          className=""
        />

        <label htmlFor="">All Genres</label>
        <select name="genre" className="">
          <option value="All">All</option>
          {genres?.map((genre: any) => (
            <option value={`${genre._id}, ${genre.name}`} key={genre._id}>
              {genre.name}
            </option>
          ))}
        </select>

        <label htmlFor="">All Platforms</label>
        <select name="platforms" className="">
          <option value="All">All</option>
          {platformsList?.map((list: any, index) => (
            <option value={`${list}`} key={index}>
              {list}
            </option>
          ))}
        </select>

        <div>
          <button type="submit" className="">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
