import { useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
import { initialState } from "../constants/InitialState";

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
