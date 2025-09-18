import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/SingUp.tsx";
import { Projects } from "./pages/Projects.tsx";
import { AuthGuard } from "./loaders/AuthGuard.ts";
import { Provider, } from "react-redux";
import { store } from "./store/Store.ts";
import { MoviesLoader } from "./loaders/MoviesLoader.ts";
import { Layout } from "./layouts/Layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: AuthGuard,
    Component: Layout,
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

initThemeMode();
