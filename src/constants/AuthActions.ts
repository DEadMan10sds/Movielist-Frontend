import { User } from "../interfaces/AuthState";

export type AuthAction =
  | { type: "LOGIN"; payload: { user: User; token: string } }
  | { type: "LOGOUT" }
  | { type: "GET_TOKEN" };
