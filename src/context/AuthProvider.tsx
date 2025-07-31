import { ReactNode, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { initialState } from "../constants/InitialState";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
