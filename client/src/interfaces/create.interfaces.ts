export interface validateInput {
  input: {
    name: string;
    description: string;
    platforms: string[];
    background_image: string;
  };
}

export interface validateError {
  name: string;
  description: string;
  platforms: string;
  background_image: string;
}

export interface GenreCreate {
  genre: {
    _id: string;
    name: string;
  };
}
