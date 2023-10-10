import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import { Home, Login, Vantagens, Empresas, Contato } from "./pages";
import { Cadastro } from "./pages/Cadastro";
import { Aluno } from "./pages/Aluno";

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
        element: <Aluno />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
