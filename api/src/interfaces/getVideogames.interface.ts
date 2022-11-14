import { ObjectId } from "mongodb";

export interface arrayGetGames {
  idVideogames: string;
  name: string[];
  background_image: string;
  genres: ObjectId[];
  description: string;
  released: string;
  rating: number;
  platforms: string[];
}

export interface apiGetGames {
  id: string;
  name: string[];
  genres: [
    {
      id: string;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }
  ];

  background_image: string;
  released: string;
  rating: number;
  platforms: string[];
}

export interface genresName {
  name: string;
}
