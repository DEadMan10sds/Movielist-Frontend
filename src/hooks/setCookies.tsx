import Cookies from "js-cookie";

export const setCookie = (cookieName: string, payload: any) => {
  const data = typeof payload === "object" ? JSON.stringify(payload) : payload;

  Cookies.set(cookieName, data);
};
