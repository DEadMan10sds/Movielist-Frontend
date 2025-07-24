import { FetchAsync } from "../helpers/FetchAsync";
import { MovieInterface } from "../interfaces/Movie";

export async function MoviesLoader(): Promise<MovieInterface | undefined> {
  const data = await FetchAsync<MovieInterface>("/movies");
  return data;
}
