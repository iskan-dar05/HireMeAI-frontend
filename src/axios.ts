import axios from "axios";

const API_URL = "https://hiremeai-backend.onrender.com/";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  withCredentials: false, // Important: false for Bearer token auth
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      console.log("TOKEN::::::", token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Ensure Content-Type is set for all requests
    if (!config.headers["Content-Type"]) {
      config.headers["Content-Type"] = "application/json";
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refresh_token = localStorage.getItem("refresh_token");

      // ❌ DO NOT redirect here
      if (!refresh_token) {
        localStorage.clear();
        return Promise.reject(error);
      }

      try {
        const refreshAxios = axios.create({
          baseURL: API_URL,
          headers: { "Content-Type": "application/json" },
        });

        const res = await refreshAxios.post("/auth/refresh", {
          refresh_token,
        });

        const newAccessToken = res.data.access_token;
        localStorage.setItem("access_token", newAccessToken);

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.clear();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);