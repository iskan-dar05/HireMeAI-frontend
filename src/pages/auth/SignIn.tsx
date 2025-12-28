import { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { useAuth } from '@/lib/auth-context'
import { AlertCircle } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {

  const { signIn } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (field: string, value: string)=>{
    setFormData(prev=>({...prev, [field]: value}))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await signIn(formData);  
      navigate("/dashboard");  
    } catch (error) {
      const message =
        error?.response?.data?.detail ||
        error?.message ||
        "Invalid email or password";

      setError(message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex flex-col gap-6 items-center justify-center text-center mt-10 bg-background dark:bg-slate-900 text-foreground dark:text-gray-100 min-h-screen">
      
      {error && (
        <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg text-sm flex items-start gap-3 animate-slide-in-up">
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <h2 className="text-3xl font-bold my-4">Welcome Back</h2>
        <span className="text-gray-700 dark:text-gray-300">Sign in to continue building your resume</span>
      </div>

      <div className="border border-gray-300 dark:border-gray-600 p-5 w-3/4 md:w-2/4 lg:w-1/3 rounded-custom text-start shadow-custom-2xl animate-slide-in-up bg-white dark:bg-slate-800">
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <label className="text-foreground text-sm">Email</label>
            <Input 
              id="email"
              type="email"
              placeholder="skous2034@gmail.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="h-12 bg-background dark:bg-slate-900 border-border dark:border-gray-600 focus:border-accent transition-smooth text-foreground dark:text-gray-100"
              required
            />
          </div>
          <div className="my-2">
            <label className="text-foreground text-sm">Password</label>
            <Input 
              id="password"
              type="password"
              placeholder="*************"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className="h-12 bg-background dark:bg-slate-900 border-border dark:border-gray-600 focus:border-accent transition-smooth text-foreground dark:text-gray-100"
              required
            />
          </div>
          <div className="my-5">
            <Button 
              type="submit" 
              disabled={isLoading} 
              className="text-white bg-gradient-to-r from-primary to-accent text-xl w-full py-6 tracking-tight flex items-center justify-center"
            >
              Sign In
            </Button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Don't have an account? <Link className="text-accent" to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
