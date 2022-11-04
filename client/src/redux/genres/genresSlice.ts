import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Genre {
  genres: Array<string> | void;
}

const initialState: Genre = {
  genres: [],
};

const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    getGenres: (state, action: PayloadAction<Array<string>>) => {
      state.genres = action.payload;
    },
  },
});

export const { getGenres } = genresSlice.actions;

export default genresSlice.reducer;
