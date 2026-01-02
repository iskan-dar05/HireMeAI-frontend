import { Hero } from '../components/Hero'
import { Sparkles, Zap, Layout } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth, useUser } from '@clerk/clerk-react'

export default function Index() {

  const { isSignedIn, isLoaded } = useAuth()
  const { user } = useUser()
  const navigate = useNavigate()

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Writing",
      desc: "Let AI help you craft compelling content that highlights your achievements",
    },
    {
      icon: Layout,
      title: "10+ Premium Templates",
      desc: "Beautiful, professionally designed templates that work with any industry",
    },
    {
      icon: Zap,
      title: "Instant Download",
      desc: "Get your resume as a PDF instantly and start applying today",
    },
  ]

  if (!isLoaded) return null

  if (isSignedIn && user) 
  {
    navigate("/dashboard", { replace: true })
    return null
  }
 
  return (
    <div className="min-h-screen bg-background dark:bg-slate-900 text-foreground dark:text-gray-100">
      <Hero />
      <section className="flex flex-col px-8 items-center pt-10">
        <h1 className="text-5xl tracking-normal font-bold">Why Choose ResumeAI?</h1>
        <span className="text-gray-700 dark:text-gray-300 mt-5 tracking-normal text-xl">
          Everything you need to create a stunning, ATS-friendly resume
        </span>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div className="border rounded-xl justify-self-center p-6 lg:p-10 md:p-8 sm:p-6 border-gray-300 dark:border-gray-600
                transition-transform duration-300 
                hover:scale-105 cursor-pointer bg-white dark:bg-slate-800">
                
                <div className="lg:w-[60px] lg:h-[60px] md:w-[45px] w-[60px] h-[60px] md:h-[45px] flex items-center justify-center bg-gradient-to-r from-card-primary to-card-secondary dark:from-gray-700 dark:to-gray-600 rounded-xl">
                  <Icon className="lg:w-12 lg:h-12 text-accent w-12 h-12 md:w-10 md:h-10 p-[10px] dark:text-blue-400 border-gray-200" />
                </div>

                <h1 className="lg:text-2xl text-2xl md:text-xl mt-5 font-bold">{feature.title}</h1>
                <div className="mt-[30px] text-start">
                  <span className="lg:text-[18px] text-[18px] md:text-[16px] text-gray-700 dark:text-gray-300">{feature.desc}</span>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center px-8 mt-[80px] py-10 rounded-2xl w-full bg-gradient-to-r from-card-primary via-card-secondary to-card-primary dark:bg-slate-800">
          <h1 className="text-3xl font-bold">Ready to Create Your Resume?</h1>
          <div className="mt-6">
            <span className="text-gray-700 dark:text-gray-300 text-xl">
              Join thousands of professionals who've created stunning resumes with ResumeAI
            </span>
          </div>
          <Button className="py-6 mt-6 text-xl px-8 text-white bg-gradient-to-r from-primary to-accent">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  )  
}