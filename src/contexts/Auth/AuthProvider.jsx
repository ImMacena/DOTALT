import { useEffect, useState } from "react";

import { AuthContext } from "./AuthContext";

import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }) => {
  const api = useApi();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const hasUser = localStorage.getItem("user");

    const userStorage = JSON.parse(hasUser);

    if (hasUser !== undefined) setUser(userStorage);
  }, []);

  const signin = async (email, password, userType, accessCode) => {
    const data = await api.signin(email, password, userType, accessCode);

    if (data) {
      setUser(data);

      localStorage.setItem("user", JSON.stringify(data));

      return true;
    }

    return false;
  };

  const signout = () => {
    setUser(null);

    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
