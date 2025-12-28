import { useState } from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { useAuth } from '@/lib/auth-context'
import { AlertCircle } from "lucide-react";

export default function SignUp() {

  const { signUp } = useAuth()

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (field: string, value: string)=>{
    setFormData(prev=>({...prev, [field]: value}))
  }

  const handleSubmit = async (e: React.FormEvent)=>{
    e.preventDefault();
    setIsLoading(true)
    try{
      await signUp(formData)
    }catch(error: any){
      setError(error?.response?.data?.detail || error.message || "Something went wrong")
    }finally{
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-6 items-center justify-center text-center mt-10 min-h-screen bg-background dark:bg-slate-900 text-foreground dark:text-gray-100">

      {error && (
        <div className="p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg text-sm flex items-start gap-3 animate-slide-in-up">
          <AlertCircle size={20} className="shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      <div>
        <h2 className="text-3xl font-bold my-4">Create Your Account</h2>
        <span className="text-gray-700 dark:text-gray-300">Start building professional resumes with AI</span>
      </div>

      <div className="border border-gray-300 dark:border-gray-600 p-5 md:w-1/3 rounded-custom text-start shadow-custom-2xl bg-white dark:bg-slate-800 animate-slide-in-up">
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <label className="text-foreground text-sm">First Name</label>
            <Input 
              id="first_name"
              type="text"
              placeholder="Iskandar"
              value={formData.first_name}
              onChange={(e) => handleChange('first_name', e.target.value)}
              className="h-12 bg-background dark:bg-slate-900 border-border dark:border-gray-600 focus:border-accent transition-smooth text-foreground dark:text-gray-100"
              required
            />
          </div>

          <div className="my-2">
            <label className="text-foreground text-sm">Last Name</label>
            <Input 
              id="last_name"
              type="text"
              placeholder="Boukhenoufa"
              value={formData.last_name}
              onChange={(e) => handleChange('last_name', e.target.value)}
              className="h-12 bg-background dark:bg-slate-900 border-border dark:border-gray-600 focus:border-accent transition-smooth text-foreground dark:text-gray-100"
              required
            />
          </div>

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
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
