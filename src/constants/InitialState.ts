import { AuthState } from "../interfaces/AuthState";

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
};
