import { FetchAsync } from "../helpers/FetchAsync";
import Cookies from "js-cookie";

export async function Loader<T>(
  url: string,
  auth: boolean = false,
  options?: any,
): Promise<T | undefined> {
  if (auth) {
    const token = Cookies.get("auth-token");
    options!.headers.Authorization = `Bearer ${token}`;
  }

  const response = await FetchAsync<T>(url, options);

  return response;
}
