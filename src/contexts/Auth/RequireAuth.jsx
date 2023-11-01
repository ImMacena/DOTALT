import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const isAuth = () => {
    return localStorage.getItem("user") !== null;
  };

  const auth = isAuth();

  if (!auth) {
    return <Navigate to="/Login" />;
  }

  return children;
};
