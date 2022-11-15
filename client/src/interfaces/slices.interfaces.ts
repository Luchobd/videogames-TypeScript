export interface Video {
  videogames: Array<string>;
  copyVideogames: Array<string> | void;
  videogamesDetail: {
    background_image?: string;
    createdAt?: string;
    createdInDb?: boolean;
    deleted?: boolean;
    description?: string;
    genres?: [
      {
        createdAt: string;
        deleted: boolean;
        name: string;
        updatedAt: string;
        _id: string;
      }
    ];
    name?: string;
    platforms?: string[];
    rating?: number;
    released?: string;
    updatedAt?: string;
    _id?: string;
  };
  allPlatforms: string[];
}

export interface Genre {
  genres: Array<string> | void;
}
