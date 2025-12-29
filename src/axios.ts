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
