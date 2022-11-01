import { Router, Response, Request } from "express";

import { getGenres } from "../utils/getGenres";
import { saveGenresDB, showGenreDb } from "../controllers/genres";

const router = Router();

router.get("/", showGenreDb);

router.post("/", saveGenresDB);

router.post("/dbGenres", getGenres, saveGenresDB);

export { router };
