import { DarkThemeToggle } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav className="flex w-full items-center justify-between px-5">
        <Link to="/">
          <h1>Inicio</h1>
        </Link>
        <DarkThemeToggle />
      </nav>
      <Outlet></Outlet>
    </>
  );
};
