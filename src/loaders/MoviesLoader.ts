import { FetchAsync } from "../helpers/FetchAsync";
//import { useCookies } from "../hooks/useCookies";
import { MovieInterface } from "../interfaces/Movie";
import Cookies from "js-cookie";

export async function MoviesLoader(): Promise<MovieInterface | undefined> {
  const cookie = JSON.parse(Cookies.get("auth-token")!);
  console.log(cookie);
  //const cookie = useCookies("auth-token");
  //console.log(cookie);

  const data = await FetchAsync<MovieInterface>("/movies", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.token}`,
    },
  });

  console.log(data);

  return data;
}
