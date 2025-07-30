import { Navigate, useLocation } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import Cookies from "js-cookie";

export const AuthGuard = () => {
  const location = useLocation();
  const authCookies = Cookies.get("authToken");

  if (!authCookies)
    return <Navigate to="/login" replace state={{ from: location }}></Navigate>;

  const { token } = JSON.parse(authCookies);
  console.log(token);

  if (!token)
    return <Navigate to="/login" replace state={{ from: location }}></Navigate>;

  return <Layout />;
};
