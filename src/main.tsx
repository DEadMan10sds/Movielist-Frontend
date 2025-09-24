import { initThemeMode } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/SingUp.tsx";
import { AuthGuard } from "./loaders/AuthGuard.ts";
import { Provider, } from "react-redux";
import { store } from "./store/Store.ts";
import { MoviesLoader } from "./loaders/MoviesLoader.ts";
import { Layout } from "./layouts/Layout.tsx";
import { ErrorPage } from "./components/Error.tsx";
import { ListsPage } from "./pages/Lists.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: AuthGuard,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: MoviesLoader,
      },
      {
        path: "/lists",
        element: <ListsPage />,
        //loader: MoviesLoader,
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Login />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

initThemeMode();
