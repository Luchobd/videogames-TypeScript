export interface arrayGetGames {
  idVideogames: string;
  name: string[];
  background_image: string;
  genres: string[];
  description: string;
  released: string;
  rating: number;
  platforms: string[];
}

export interface apiGetGames {
  id: string;
  name: string[];
  genresFind: string[];
  background_image: string;
  released: string;
  rating: number;
  platforms: string[];
}

export interface genresName {
  name: string;
}
