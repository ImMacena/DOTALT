import { useContext } from "react";

import { Navigate } from "react-router-dom";

import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if (auth.user) {
    return <Navigate to="/Login" />;
  }

  return children;
};
