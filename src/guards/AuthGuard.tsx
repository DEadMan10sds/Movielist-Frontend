import { Navigate, useLocation } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import Cookies from "js-cookie";

export const AuthGuard = () => {
  const authToken = Cookies.get("auth-token");
  const location = useLocation();
  console.log(authToken);
  if (!authToken || authToken === undefined)
    return <Navigate to="/login" replace state={{ from: location }}></Navigate>;

  return <Layout />;
};
