import axios, { AxiosResponse, AxiosError } from "axios";
import {
  getVideogames,
  getNameVideogames,
  getDetail,
  // getPlatformsList,
  // postVideogames,
} from "../videogames/videogamesSlice";

// All Videogames
export const getAllVideogames =
  () =>
  async (
    dispatch: (arg0: {
      payload: string[];
      type: string;
    }) =>
      | AxiosResponse<any, any>
      | AxiosError<unknown, any>
      | PromiseLike<AxiosResponse<any, any> | AxiosError<unknown, any>>
  ): Promise<AxiosResponse | AxiosError> => {
    try {
      const resp: AxiosResponse = await axios.get(
        "http://localhost:3001/videogames"
      );
      return dispatch(getVideogames(resp.data));
    } catch (error) {
      return error as AxiosError;
    }
  };

// Query Videogames
export const getNameVideogame =
  (name: any) =>
  async (
    dispatch: (arg0: {
      payload: string[];
      type: string;
    }) =>
      | AxiosResponse<any, any>
      | AxiosError<unknown, any>
      | PromiseLike<AxiosResponse<any, any> | AxiosError<unknown, any>>
  ): Promise<AxiosResponse | AxiosError> => {
    try {
      const resp: AxiosResponse = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      return dispatch(getNameVideogames(resp.data));
    } catch (error) {
      return error as AxiosError;
    }
  };

// Create Videogames
export const postVideogame = (payload: any) => async () => {
  const resp: AxiosResponse = await axios.post(
    "http://localhost:3001/videogames",
    payload
  );
  return resp;
};

// Detail Videogames
export const getDetailVideogames =
  (id: string | undefined) =>
  async (dispatch: (arg0: { payload: Object; type: string }) => any) => {
    try {
      const resp: AxiosResponse = await axios.get(
        `http://localhost:3001/videogames/${id}`
      );
      return dispatch(getDetail(resp.data));
    } catch (error) {
      return error as AxiosError;
    }
  };

// List Platforms
// export const getPlatformsLists = () => async () => {
//   const resp: AxiosResponse = await axios.post(

//     payload:
//   );
//   return resp;
// };
