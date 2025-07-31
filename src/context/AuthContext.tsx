import { createContext, Dispatch } from "react";
import { AuthState } from "../interfaces/AuthState";
import { AuthAction } from "../constants/AuthActions";

type AuthContextType = {
  state: AuthState;
  dispatch: Dispatch<AuthAction>;
};

export const AuthContext = createContext<AuthContextType | null>(null);
