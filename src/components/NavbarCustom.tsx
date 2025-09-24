import {
  DarkThemeToggle,
  HomeIcon,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { LogOutButton } from "./LogOutButton";
import { useSelector } from "react-redux";
import { RootState } from "../store/Store";

const links = [
  {
    path: "/",
    text: "Inicio",
    element: <HomeIcon />
  },
  {
    path: "/lists",
    text: "Listas",
  }
];

export function NavbarCustom() {
  const user = useSelector((state: RootState) => state.user)
  const url = useLocation().pathname;


  return (
    <Navbar fluid className="bg-gray-100">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Movie Randomizer
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="flex items-center">
        {links.map((link) => {
          return (
            <Link key={link.path} to={link.path} className="flex gap-2 items-center transition dark:text-white border border-transparent rounded-sm hover:border-black dark:hover:border-white p-2">
              {link.element || null}
              <p
                className={`${url === link.path && "font-extrabold"} light:text-black flex h-full items-center`}
              >
                {link.text}
              </p>
            </Link>
          );
        })}
        <div className="flex items-center gap-2">
          {
            user &&
            <p className="dark:text-white font-semibold text-lg">{user.name}</p>
          }
          <DarkThemeToggle />
          <LogOutButton />
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
