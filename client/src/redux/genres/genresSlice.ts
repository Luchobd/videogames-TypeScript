import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genre } from "../../interfaces/slices.interfaces";

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
