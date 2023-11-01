import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

export const useApi = () => ({
  signin: async (email, password) => {
    const response = await api.post(
      "/auth",
      JSON.stringify({ email, password }),
      { headers: { "Content-type": "application/json" } }
    );
    return response.data;
  },

  logout: async () => {
    const response = await api.get("/auth");
    return response.data;
  },
});
