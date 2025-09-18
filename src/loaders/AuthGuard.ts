import { redirect } from "react-router-dom";
import { RootState, store } from "../store/Store";

export const AuthGuard = () => {
  const user = (store.getState() as RootState).user;
  if (!user) throw redirect("/login");
};
