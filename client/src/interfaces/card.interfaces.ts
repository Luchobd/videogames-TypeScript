export interface PropsCard {
  name: string;
  genres: Array<{
    createdAt: string;
    deleted: boolean;
    name: string;
    updatedAt: string;
    _id: string;
  }>;
  rating: number;
  background_image: string;
  platforms?: string[];
}

export interface PropsPaginated {
  videogamesPerPage: number;
  allVideogames: number;
  paginated: any;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface genreName {
  name: string;
}
