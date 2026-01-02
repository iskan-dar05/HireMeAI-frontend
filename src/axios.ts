import axios from "axios";
import { useAuth } from "@clerk/clerk-react"


const API_URL = import.meta.env.VITE_API_URL

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

