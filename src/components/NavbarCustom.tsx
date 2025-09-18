import {
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { LogOutButton } from "./LogOutButton";

const links = [
  {
    path: "/",
    text: "Inicio",
  },
  {
    path: "/projects",
    text: "Proyectos",
  },
];

export function NavbarCustom() {
  const url = useLocation().pathname;


  return (
    <Navbar fluid>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Movie Randomizer
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse className="flex items-center">
        {links.map((link) => {
          return (
            <Link key={link.path} to={link.path}>
              <p
                className={`${url === link.path && "font-extrabold"} light:text-black flex h-full items-center dark:text-white`}
              >
                {link.text}
              </p>
            </Link>
          );
        })}
        <DarkThemeToggle />
        <LogOutButton />
      </NavbarCollapse>
    </Navbar>
  );
}
