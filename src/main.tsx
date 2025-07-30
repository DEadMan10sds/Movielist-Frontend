import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/SingUp.tsx";
import { Projects } from "./pages/Projects.tsx";
import { MoviesLoader } from "./loaders/MoviesLoader.ts";
import { AuthGuard } from "./guards/AuthGuard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AuthGuard,
    children: [
      {
        index: true,
        Component: Home,
        loader: MoviesLoader,
      },
      {
        path: "projects",
        Component: Projects,
      },
    ],
  },
  {
    path: "login",
    Component: Login,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

initThemeMode();
