import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import {
  Home,
  Login,
  Empresas,
  Contato,
  Cadastro,
  Aluno,
  Atividades,
  Turmas,
  Mochila,
  Conteudos,
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
      {
        path: "/Conteudos",
        element: (
          <RequireAuth>
            <>
              <MenuBar />
              <Conteudos />
            </>
          </RequireAuth>
        ),
      },
      {
        path: "/Atividades",
        element: (
          <RequireAuth>
            <>
              <MenuBar />
              <Atividades />
            </>
          </RequireAuth>
        ),
      },
      {
        path: "/Mochila",
        element: (
          <RequireAuth>
            <>
              <MenuBar />
              <Mochila />
            </>
          </RequireAuth>
        ),
      },
      {
        path: "/Turmas",
        element: (
          <RequireAuth>
            <>
              <MenuBar />
              <Turmas />
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
