import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/Store";

export const MoviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user?.token;
      if (token) headers.set("authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: (build) => ({
    getMovies: build.query<unknown, void>({
      query: () => "/movies",
    }),
  }),
});

export const { useGetMoviesQuery } = MoviesApi;
export default MoviesApi.reducer;
