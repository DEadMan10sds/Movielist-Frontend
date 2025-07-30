import { AuthState } from "./AuthState";

export interface AuthReducerAction {
  payload: AuthState;
  type: string;
}
