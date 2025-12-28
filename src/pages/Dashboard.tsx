import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
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

const STATS = [
  { label: "Total Resumes", value: "3", icon: FileText, color: "from-blue-500 to-blue-600" },
  { label: "Downloads", value: "6", icon: Download, color: "from-purple-500 to-pink-500" },
];

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background dark:bg-slate-900 text-foreground dark:text-gray-100">

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 animate-slide-in-up">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Welcome back, {user?.name || "User"}!
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Manage your resumes and create new ones with AI assistance
            </p>
          </div>
          <Link to="/templates" className="mt-4 sm:mt-0">
            <Button className="bg-accent text-white gap-2 text-lg px-6 py-5">
              <Plus size={20} />
              Create New Resume
            </Button>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-card dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 animate-scale-in transition-smooth hover:border-accent"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <Icon size={24} className="text-white" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Recent Resumes */}
        <div className="animate-slide-in-up animate-delay-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Your Resumes</h2>
            <Button variant="ghost" className="text-gray-600 dark:text-gray-300 hover:text-foreground">
              View All
            </Button>
          </div>

          {MOCK_RESUMES.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {MOCK_RESUMES.map((resume, index) => (
                <div
                  key={resume.id}
                  className="group bg-card dark:bg-slate-800 border border-border dark:border-gray-700 rounded-2xl overflow-hidden hover:border-accent/50 transition-smooth hover:shadow-xl animate-scale-in cursor-pointer"
                  style={{ animationDelay: `${(index + 4) * 50}ms` }}
                  onClick={() => navigate(`/create?resume=${resume.id}`)}
                >
                  {/* Resume Preview */}
                  <div className="h-40 bg-gray-100 dark:bg-gray-700/30 relative">
                    <div className="absolute inset-4 bg-card dark:bg-slate-900 rounded-lg shadow-md p-3 transform group-hover:scale-105 transition-smooth">
                      <div className="h-2 bg-gray-300 dark:bg-gray-600 rounded w-1/2 mb-2" />
                      <div className="h-1.5 bg-gray-300/50 dark:bg-gray-500/50 rounded w-3/4 mb-1" />
                      <div className="h-1.5 bg-gray-300/50 dark:bg-gray-500/50 rounded w-full mb-3" />
                      <div className="border-t border-border dark:border-gray-700 pt-2 space-y-1">
                        <div className="h-1 bg-gray-300/30 dark:bg-gray-500/30 rounded w-full" />
                        <div className="h-1 bg-gray-300/30 dark:bg-gray-500/30 rounded w-5/6" />
                      </div>
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
                        {resume.lastEdited}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye size={14} />
                        {resume.views}
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
                <Button className="btn-gradient gap-2">
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
