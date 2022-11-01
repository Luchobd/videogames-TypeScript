import { Types } from "mongoose";

export interface Videogame {
  idVideogame: string;
  name: string;
  description: string;
  released: string;
  rating: number;
  platforms: string[];
  background_image: string;
  createdInDb: boolean;
  genres: string[];
}
