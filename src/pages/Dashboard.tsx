import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react'
import { useAuth, useUser } from "@clerk/clerk-react"
import { useAxios } from '@/axios';
import { 
  Plus, 
  FileText, 
  Clock, 
  Download, 
  MoreHorizontal,
  Sparkles,
  TrendingUp,
  Eye
} from "lucide-react";

// Mock data for resumes
const MOCK_RESUMES = [
  { id: 1, name: "Software Engineer Resume", template: "Modern", lastEdited: "2 hours ago", views: 24, downloads: 3 },
  { id: 2, name: "Product Manager CV", template: "Professional", lastEdited: "Yesterday", views: 18, downloads: 2 },
  { id: 3, name: "Marketing Specialist", template: "Creative", lastEdited: "3 days ago", views: 12, downloads: 1 },
];

interface MockResumeType{
  id: number
  name: string
  description: string
  path: string
  thumbnail_url: string
  downloads: number

}

const STATS = [
  { label: "Total Resumes", value: "3", icon: FileText, color: "from-blue-500 to-blue-600" },
  { label: "Downloads", value: "6", icon: Download, color: "from-purple-500 to-pink-500" },
];


function ResumeSkeleton() {
  return (
    <div className="animate-pulse bg-card dark:bg-slate-800 border border-border dark:border-gray-700 rounded-2xl overflow-hidden">
      {/* Preview area */}
      <div className="h-40 bg-gray-200 dark:bg-gray-700/30 relative" />

      {/* Info area */}
      <div className="p-5 space-y-3">
        <div className="h-5 w-3/4 bg-gray-200 dark:bg-slate-700 rounded" />
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-slate-700 rounded" />
        <div className="flex gap-3 mt-4">
          <div className="h-4 w-10 bg-gray-200 dark:bg-slate-700 rounded" />
          <div className="h-4 w-10 bg-gray-200 dark:bg-slate-700 rounded" />
          <div className="h-4 w-10 bg-gray-200 dark:bg-slate-700 rounded" />
        </div>
      </div>
    </div>
  )
}




export default function Dashboard() {
  const { user } = useUser()
  const api = useAxios()
  const navigate = useNavigate();
  const [mockResumes, setMockResumes] = useState<MockResumeType[]>([])
  const [totalTemplates, setTotalTemplates] = useState()
  const [totalDownloads, setTotalDownloads] = useState()
  const [isLoading, setIsLoading] = useState(false)



  useEffect(()=>{
    const fetchTemplates = async()=>{
      setIsLoading(true)

      try{
       const res = await api.get("/resume/dashboard")
      console.log(res.data.templates)
      setMockResumes(res.data.templates)
      setTotalTemplates(res.data.total_templates)
      setTotalDownloads(res.data.total_downloads) 
    } catch(error)
    {
      console.error(error)
    }finally{
      setIsLoading(false)
    }
    
  }
    fetchTemplates()
    
  }, [])


  return (
    <div className="min-h-screen bg-background text-foreground dark:text-gray-100">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 animate-slide-in-up">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Welcome back, {user?.firstname || "User"}!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Manage your resumes and create new ones with AI assistance
            </p>
          </div>
          <Link to="/templates" className="mt-4 sm:mt-0">
            <Button className="bg-primary hover:scale-105 transition-all text-white gap-2 text-lg px-6 py-5">
              <Plus size={20} />
              Create New Resume
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div
                className="bg-card dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 animate-scale-in transition-smooth hover:border-accent"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4`}>
                  <FileText size={24} className="text-white" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{totalTemplates}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Total Templates</p>
              </div>
              <div
                className="bg-card dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 animate-scale-in transition-smooth hover:border-accent"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4`}>
                  <Download size={24} className="text-white" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{totalDownloads}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Total Downloads</p>
              </div>

        </div>

        {/* Recent Resumes */}
        <div className="animate-slide-in-up animate-delay-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Your Resumes</h2>
            <Button variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-foreground">
              View All
            </Button>
          </div>

          {mockResumes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockResumes.map((resume, index) => (
                <div
                  key={resume.id}
                  className="group bg-card dark:bg-slate-800 border border-border dark:border-gray-700 rounded-2xl overflow-hidden hover:border-accent/50 transition-smooth hover:shadow-xl animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${(index + 4) * 50}ms` }}
                  onClick={() => navigate(`/resume-preview/${encodeURIComponent(resume.path)}`)}
                >
                  {/* Resume Preview */}
                  <div className="h-40 bg-gray-100 dark:bg-gray-700/30 relative">
                    <div className="absolute inset-4 bg-card dark:bg-slate-900 rounded-lg shadow-md transform group-hover:scale-105 transition-smooth overflow-hidden">
                      <img
                        src={`${import.meta.env.VITE_API_URL}/static/${resume.thumbnail}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Quick actions overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center gap-2">
                      <Button size="sm" variant="secondary" className="gap-1">
                        <Eye size={16} />
                        Preview
                      </Button>
                    </div>
                  </div>

                  {/* Resume Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-accent transition-smooth">
                          {resume.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{resume.template} Template</p>
                      </div>
                      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-smooth">
                        <MoreHorizontal size={20} className="text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mt-4">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        
                      </span>
                      <span className="flex items-center gap-1">
                        <Download size={14} />
                        {resume.downloads}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Create New Card */}
              <Link
                to="/templates"
                className="group bg-card/50 dark:bg-slate-800/50 border-2 border-dashed border-border dark:border-gray-600 rounded-2xl min-h-[280px] flex flex-col items-center justify-center hover:border-accent/50 transition-smooth animate-scale-in cursor-pointer"
                style={{ animationDelay: `${(MOCK_RESUMES.length + 4) * 50}ms` }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                  <Plus size={32} className="text-gray-600 dark:text-gray-300 group-hover:text-accent transition-smooth" />
                </div>
                <p className="font-semibold text-foreground mb-1">Create New Resume</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Choose from 10+ templates</p>
              </Link>
            </div>
          ) : isLoading ?(
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <ResumeSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="bg-card dark:bg-slate-800 border border-border dark:border-gray-700 rounded-2xl p-12 text-center">
              <div className="w-20 h-20 rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center mx-auto mb-6">
                <FileText size={40} className="text-gray-600 dark:text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No resumes yet</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                Start building your professional resume with our AI-powered tools and beautiful templates
              </p>
              <Link to="/templates">
                <Button className="btn-gradient bg-accent text-white gap-2">
                  <Plus size={20} />
                  Create Your First Resume
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* AI Tips Section */}
        <div className="mt-12 animate-slide-in-up animate-delay-300">
          <div className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 border border-accent/20 rounded-2xl p-8 dark:bg-gray-800/20 dark:border-accent/30">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-blue-600 flex items-center justify-center shrink-0">
                <TrendingUp size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Pro Tip: Optimize for ATS</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Most companies use Applicant Tracking Systems to filter resumes. Use our AI to analyze your resume 
                  and get suggestions to improve your ATS score. Keywords, formatting, and structure all matter!
                </p>
                <Button variant="link" className="px-0 mt-2 text-accent">
                  Learn more about ATS optimization →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
