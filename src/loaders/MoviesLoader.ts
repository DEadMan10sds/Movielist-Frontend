import { MovieInterface } from "../interfaces/Movie";
import { store } from "../store/Store";
import { MoviesApi } from "../api/Movies";

export async function MoviesLoader(): Promise<MovieInterface[] | unknown> {
  const sub = store.dispatch(MoviesApi.endpoints.getMovies.initiate());
  const { data, error } = await sub;

  if (!error) {
    sub.unsubscribe();
    return data ?? [];
  }

  throw new Response("Error loading movies", { status: 500 });
}
