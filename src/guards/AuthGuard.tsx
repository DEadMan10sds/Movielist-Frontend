import { Navigate } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { useSelector } from "react-redux";

export const AuthGuard = () => {
  const user = useSelector((state) => state.user);
  console.log("AUTH GUARD ----------------------------------");
  console.log(user);

  if (!user) return <Navigate to="/login" replace />;

  return <Layout />;
};
