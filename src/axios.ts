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
    
    // Check if it's a 401 error and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      const refresh_token = localStorage.getItem("refresh_token");
      if (!refresh_token) {
        localStorage.clear();
        window.location.href = "/signin";
        return Promise.reject(error);
      }
      
      try {
        // Create a NEW axios instance to avoid circular dependency
        const refreshAxios = axios.create({
          baseURL: API_URL,
          headers: {
            "Content-Type": "application/json",
          },
        });
        
        // Send refresh token as a string parameter (check your backend endpoint!)
        // Based on your backend: @router.post("/refresh") def refresh_token(refresh_token: str)
        const res = await refreshAxios.post("/auth/refresh", { 
          refresh_token: refresh_token 
        });
        
        const newAccessToken = res.data.access_token;
        
        // Store new token
        localStorage.setItem("access_token", newAccessToken);
        
        // Update original request with new token
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        
        // Retry original request with original axios instance
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        localStorage.clear();
        window.location.href = "/signin";
        return Promise.reject(refreshError);
      }
    }
    
    // Handle CORS errors specifically
    if (error.message?.includes("Network Error") || error.message?.includes("CORS")) {
      console.error("CORS/Network Error:", error.message);
      // Optionally redirect or show user-friendly message
    }
    
    return Promise.reject(error);
  }
);