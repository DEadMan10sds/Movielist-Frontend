import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store/Store";
import type { CreateMovie } from "../types/Movies";
import { MovieInterface } from "../interfaces/Movie";

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
  tagTypes: ["Movies"],
  endpoints: (build) => ({
    getMovies: build.query<MovieInterface[], void>({
      query: () => "/movies",
      providesTags: ["Movies"],
    }),
    createMovie: build.mutation<unknown, FormData | CreateMovie>({
      query: (body) => ({
        method: "POST",
        url: "/movies",
        body,
      }),
      invalidatesTags: ["Movies"],
    }),
  }),
});

export const { useGetMoviesQuery, useCreateMovieMutation } = MoviesApi;
export default MoviesApi.reducer;
