import Cookies from "js-cookie";
import { parseIfJson } from "../helpers/ParseIfJson";

export const useCookies = (cookieName: string) => {
  const existsCookie = Cookies.get(cookieName);

  if (!existsCookie) throw new Error(`La Cookie ${cookieName} no existe`);

  const cookieValidated = parseIfJson(existsCookie);
  return cookieValidated;
};
