import { useState } from "react";

import { AuthContext } from "./AuthContext";

import { useApi } from "../../hooks/useApi";

export const AuthProvider = ({ children }) => {
  const api = useApi();

  const [user, setUser] = useState(null);

  const signin = async (email, password) => {
    const data = await api.signin(email, password);

    if (data.user && data.token) {
      setUser(data.user);

      return true;
    }

    return false;
  }

  const signout = async () => {
    await api.logout();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};
