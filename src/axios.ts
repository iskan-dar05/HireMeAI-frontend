import axios from "axios";
import { useAuth } from "@clerk/clerk-react"
// const API_URL = "https://hiremeai-backend.onrender.com/";

const API_URL = "http://127.0.0.1:8000";



export const useAxios = () => {
  const { getToken } = useAuth()

  const api = axios.create({ baseURL: API_URL, headers: { "Content-Type": "application/json" } });

  api.interceptors.request.use(async (config)=>{
    const token = await getToken({ template: "backend" })

    config.headers.Authorization = `Bearer ${token}`
    return config
  })

  return api

}

