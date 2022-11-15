import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Video } from "../../interfaces/slices.interfaces";

const initialState: Video = {
  videogames: [],
  copyVideogames: [],
  videogamesDetail: {},
  allPlatforms: [],
};

const videogamesSlice = createSlice({
  name: "videogames",
  initialState,
  reducers: {
    getVideogames: (state, action: PayloadAction<string[]>) => {
      state.videogames = action.payload;
      state.copyVideogames = action.payload;
    },
    getNameVideogames: (state, action: PayloadAction<Array<string>>) => {
      state.videogames = action.payload;
    },
    getDetail: (state, action: PayloadAction<Object>) => {
      state.videogamesDetail = action.payload;
    },
    postVideogames: (state) => {
      return { ...state };
    },
    getPlatformsList: (state, action: PayloadAction<Array<string>>) => {
      state.allPlatforms = action.payload;
    },
  },
});

export const {
  getVideogames,
  getNameVideogames,
  getDetail,
  postVideogames,
  getPlatformsList,
} = videogamesSlice.actions;

export default videogamesSlice.reducer;
