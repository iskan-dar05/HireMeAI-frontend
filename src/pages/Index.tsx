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
    <div className="min-h-screen text-foreground dark:text-gray-100">
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
             <div className="group border-[0.5px] rounded-xl justify-self-center p-6 lg:p-10 md:p-8 sm:p-6 
                border-gray-300 dark:border-gray-600
                transition-transform duration-300 
                hover:scale-105 hover:border-accent dark:hover:border-primary 
                cursor-pointer bg-white dark:bg-card-primary
                hover:bg-primary/10 dark:hover:bg-primary/20">

              <div className="lg:w-[60px] lg:h-[60px] md:w-[45px] w-[60px] h-[60px] md:h-[45px] 
                              flex items-center justify-center 
                              bg-gradient-to-br from-[#5E6471] to-[#A0A3B0] 
                              dark:from-[#264270] dark:to-[#3B5A80]
                              rounded-xl transition-all duration-300
                              group-hover:from-blue-600 group-hover:to-blue-900">
                <Icon className="lg:w-12 lg:h-12 w-12 h-12 md:w-10 md:h-10 p-[10px] text-white" />
              </div>

              <h1 className="lg:text-2xl text-2xl md:text-xl mt-5 font-bold group-hover:text-primary transition-colors duration-300">{feature.title}</h1>
              <div className="mt-[30px] text-start">
                <span className="lg:text-[18px] text-[18px] md:text-[16px] text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                  {feature.desc}
                </span>
              </div>
            </div>

            )
          })}
        </div>

        <div className="text-center px-8 mt-[80px] py-10 rounded-2xl w-full bg-gradient-to-r dark:from-[#252C3D] dark:via-[#13203C] dark:to-[#252C3D] from-[#E8E8E9] via-[#EBF2FD] to-[#E8E8E9]">
          <h1 className="text-3xl font-bold">Ready to Create Your Resume?</h1>
          <div className="mt-6">
            <span className="text-gray-700 dark:text-gray-300 text-xl">
              Join thousands of professionals who've created stunning resumes with ResumeAI
            </span>
          </div>
          <Button className="py-6 mt-6 text-xl px-8 dark:text-black text-white !font-normal bg-gradient-to-r from-primary to-accent">
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  )  
}