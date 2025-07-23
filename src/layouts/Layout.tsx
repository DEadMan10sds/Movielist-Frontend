import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <h1>This is the navbar</h1>
      </nav>
      <Outlet></Outlet>
    </>
  );
};
