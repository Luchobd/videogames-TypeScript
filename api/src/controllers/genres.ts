import dotenv from "dotenv";
dotenv.config();
import GenreModel from "../models/genres";
import { Request, Response } from "express";

// Mostrar todos los generos
const showGenreDb = async (req: Request, res: Response) => {
  const genresResult = await GenreModel.find({});
  res.send(genresResult);
};

// Guardar todos los generos en la base de datos
const saveGenresDB = async (req: Request, res: Response) => {
  try {
    const apiGenres = req.body;
    // console.log(apiGenres);
    const genresResult = await GenreModel.create(apiGenres);
    res.status(200).send(genresResult);
  } catch (error) {
    error instanceof Error
      ? res.status(400).send(error.message)
      : res.status(500).send("Unexpected Error");
  }
};

export { saveGenresDB, showGenreDb };
