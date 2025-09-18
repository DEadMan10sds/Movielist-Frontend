import { MovieInterface } from "../interfaces/Movie";
import { store } from "../store/Store";
import { MoviesApi } from "../api/Movies";

export async function MoviesLoader(): Promise<MovieInterface | unknown> {
  const { data, error } = await store.dispatch(
    MoviesApi.endpoints.getMovies.initiate(),
  );

  if (error) throw new Response("Error loading movies", { status: 500 });

  return data;
}
