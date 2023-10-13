import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import {
  Home,
  Login,
  Vantagens,
  Empresas,
  Contato,
  Cadastro,
  Aluno,
} from "./pages";

import { MenuBar } from "./components/MenuBar";

import { AuthProvider } from "./contexts/Auth/AuthProvider";
import { RequireAuth } from "./contexts/Auth/RequireAuth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Cadastro",
        element: <Cadastro />,
      },
      {
        path: "/Vantagens",
        element: <Vantagens />,
      },
      {
        path: "/Empresas",
        element: <Empresas />,
      },
      {
        path: "/Contato",
        element: <Contato />,
      },
      {
        path: "/Aluno",
        element: (
          <RequireAuth>
            <>
              <MenuBar />
              <Aluno />
            </>
          </RequireAuth>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
