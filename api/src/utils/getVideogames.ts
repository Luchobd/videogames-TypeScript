import axios from "axios";
import GenreModel from "../models/genres";
const { API_KEY } = process.env;
import { RequestHandler } from "express";
import {
  arrayGetGames,
  apiGetGames,
  genresName,
} from "../interfaces/getVideogames.interface";

const getApiInfo: RequestHandler = async (req, res, next) => {
  const genresFind = await GenreModel.find({});

  let getGames: arrayGetGames[] = [];
  for (let i = 1; i <= 6; i++) {
    let api = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`
    );
    api.data.results.map(async (e: apiGetGames) => {
      let searchId = await axios.get(
        `https://api.rawg.io/api/games/${e.id}?key=${API_KEY}`
      );
      let descriptionGame = searchId.data.description_raw;
      const genresEach = e.genres.map((e) => e.name);
      // console.log(genresEach);

      let arrayGenres = [];
      for (let i = 0; i < genresEach.length; i++) {
        const genresFilter = genresFind.filter((e) => e.name === genresEach[i]);
        arrayGenres.push(genresFilter);
      }

      const genresFlat = arrayGenres.flat();
      const genresMap = genresFlat.map((e) => e._id);
      // const platfomsMap = e.platforms.map((e:prueba) => e.platform);
      // console.log(e.platforms);
      console.log(genresMap);

      getGames.push({
        idVideogames: e.id,
        name: e.name,
        background_image: e.background_image,
        genres: genresMap,
        description: descriptionGame,
        released: e.released,
        rating: e.rating,
        platforms: e.platforms.map((e: string | any) => e.platform.name),
      });
    });
  }
  req.body = getGames;

  next();
};

export { getApiInfo };
