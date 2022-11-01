import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
const API_KEY = process.env.API_KEY;
import { RequestHandler } from "express";
import { getGenres } from "../interfaces/getGenres.interface";

const getGenres: RequestHandler = async (req, res, next) => {
  try {
    const genres = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );

    const genreInfo = await genres.data.results.map((genre: getGenres) => ({
      name: genre.name,
    }));

    req.body = genreInfo;
    console.log(getGenres);
    next();
  } catch (error) {
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Unexpected Error");
  }
};

export { getGenres };
