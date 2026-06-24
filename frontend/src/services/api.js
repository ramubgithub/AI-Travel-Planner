import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-travel-planner-1-f7x5.onrender.com",
});

api.interceptors.request.use(
  (config) => {
    const token =
      localStorage.getItem("token");

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
