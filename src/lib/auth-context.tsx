import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { api } from '@/axios'


interface User {
  id: string
  firstname: string
  lastname: string
  email: string
  isActive: boolean

}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  signUp: (email: string, password: string, name: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const url = "http://localhost:8000"


//  useEffect(() => {
//   const checkMe = async () => {
//     setIsLoading(true);
//     try {
//       const response = await api.get("/auth/me");
//       if (response.data && response.status === 200) {
//         setUser(response.data);
//         setIsAuthenticated(true);
//       } else {
//         setIsAuthenticated(false);
//         setUser(null);
//         localStorage.removeItem('access_token');
//       }
//     } catch {
//       setIsAuthenticated(false);
//       setUser(null);
//       localStorage.removeItem('access_token');
//     } finally {
//       setIsLoading(false);
//     }
//   }
//   checkMe();
// }, []);




  const signUp = async (formData) => {
    const response = await api.post("/auth/register", {
      firstname: formData.first_name, 
      lastname: formData.last_name, 
      email: formData.email, 
      password: formData.password
    });
    return response
    
  }

  const signIn = async (formData) => {
    try{
      const response = await api.post("/auth/login", 
        {
          email: formData.email, 
          password: formData.password
        });

      if(response.data && response.status === 200)
      {
        console.log(response.data)
        setUser(response.data.user)
        localStorage.setItem('refresh_token', response.data.refresh_token)
        localStorage.setItem('access_token', response.data.access_token)
        setIsAuthenticated(true)

      }

      return response
    }catch(error){
      throw error
    }
  }

 const signOut = async () => {
  const refresh_token = localStorage.getItem('refresh_token')

  await api.post("/auth/logout", { refresh_token })

  localStorage.clear()
  setUser(null)
  setIsAuthenticated(false)
}

  
  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthenticated, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
