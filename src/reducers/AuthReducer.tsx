import { AuthAction } from "../constants/AuthActions";
import { AuthState } from "../interfaces/AuthState";
import Cookies from "js-cookie";

export function AuthReducer(state: AuthState, action: AuthAction) {
  switch (action.type) {
    case "LOGIN": {
      const newState = {
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
      Cookies.set("auth-token", JSON.stringify(newState));
      return newState;
    }

    case "LOGOUT":
      return {
        isAuthenticated: false,
        user: null,
        token: null,
      };
    default:
      return state;
  }
}
