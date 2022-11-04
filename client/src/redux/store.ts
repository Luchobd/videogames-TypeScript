import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import videogamesReducer from "./videogames/videogamesSlice";
import genresReducer from "./genres/genresSlice";

export const store = configureStore({
  reducer: {
    videogames: videogamesReducer,
    genres: genresReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Thunk = ThunkAction<
  Promise<unknown>,
  RootState,
  unknown,
  Action<unknown>
>;

export default store;
