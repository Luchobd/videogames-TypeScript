import axios, { AxiosResponse, AxiosError } from "axios";
import { getGenres } from "../genres/genresSlice";

export const getAllGenres =
  () =>
  async (dispatch: any): Promise<AxiosResponse | AxiosError> => {
    try {
      const resp: AxiosResponse = await axios.get(
        "http://localhost:3001/genres"
      );
      return dispatch(getGenres(resp.data));
    } catch (error) {
      return error as AxiosError;
    }
  };

// export const getGenres =
//   () => (dispatch: (arg0: { payload: undefined; type: string }) => any) => {
//     axios
//       .get("http://localhost:3001/genders")
//       .then((res) => dispatch(getGenres(res.data)))
//       .catch((e) => console.log(e));
//   };
