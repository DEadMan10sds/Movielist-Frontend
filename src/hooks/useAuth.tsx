import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("Se debe usar el useAuth dentro del AuthProvider");
  return context;
}
