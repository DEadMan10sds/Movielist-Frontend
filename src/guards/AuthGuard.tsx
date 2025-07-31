import { Navigate, useLocation } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { useCookies } from "../hooks/useCookies";

export const AuthGuard = () => {
  const location = useLocation();
  const { token } = useCookies("auth-token");

  if (!token)
    return <Navigate to="/login" replace state={{ from: location }}></Navigate>;

  return <Layout />;
};
