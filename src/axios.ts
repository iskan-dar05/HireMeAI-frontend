import axios from "axios";

const API_URL = "https://hiremeai-backend.onrender.com/";



export const api = axios.create({
	baseURL: API_URL
});


api.interceptors.request.use((config)=>{
	const token = localStorage.getItem("access_token")
	if(token)
	{
		console.log("TOKEN::::::", token)
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})

api.interceptors.response.use(
	(response)=>response,
	async (error)=>{
		const originalRequest = error.config

		if(error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			const refresh_token = localStorage.getItem('refresh_token')
			if(!refresh_token)
			{
				return Promise.reject(error)
			}

			try {
		        const res = await axios.post(`${API_URL}auth/refresh`, { refresh_token });
		        const newAccessToken = res.data.access_token;

		        localStorage.setItem("access_token", newAccessToken);
		        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

		        return axios(originalRequest); // retry original request
		      } catch (err) {
		        localStorage.clear();
		        window.location.href = "/signin"; // redirect to login
		        return Promise.reject(err);
		      }
		}

		return Promise.reject(error)
	}
)