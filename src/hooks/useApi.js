import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE,
});

export const useApi = () => ({
  signin: async (email, password, userType) => {
    const response = await api.post(
      "/auth",
      JSON.stringify({ email, password, userType }),
      { headers: { "Content-type": "application/json" } }
    );

    return response.data;
  },

  logout: async () => {
    const response = await api.get("/auth");
    return response.data;
  },

  signup: async (username, email, password, userType, accessCode) => {
    const response = await api.post(
      "/user",
      JSON.stringify({
        name: username,
        email: email,
        password: password,
        userType: userType,
        accessCode: accessCode,
      }),
      { headers: { "Content-Type": "application/json" } }
    );

    return response.data;
  },

  getFiles: async(userID) => {
    const response = await api.get(`/file/${userID}`)

    return response.data;
  }
});
