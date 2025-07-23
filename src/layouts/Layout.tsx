import { Outlet } from "react-router-dom";
import { NavbarCustom } from "../components/NavbarCustom";

export const Layout = () => {
  return (
    <>
      <NavbarCustom />
      <Outlet />
    </>
  );
};
