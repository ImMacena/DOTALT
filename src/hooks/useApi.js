import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

export const useApi = () => ({
  validateToken: async (token) => {
    const response = await api.post("/validade", { token });
    return response.data;
  },

  signin: async (email, password) => {
    const response = await api.post("/signin", { email, password });
    return response.data;
  },

  logout: async () => {
    const response = await api.post("/logout");
    return response.data;
  },
});
