import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <div className="w-full mx-auto px-8 min-h-[calc(100vh-100px)] grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-items-center md:justify-items-stretch">
      
      {/* Left Column */}
      <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold">
          Create Your Perfect Resume with{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer">
            AI
          </span>
        </h1>

        <div className="text-gray-600 text-lg md:text-[20px] max-w-md">
          Choose from professionally designed templates, let AI help craft your content, and download your resume instantly. Stand out to employers with a resume that makes an impact.
        </div>

        <div className="flex gap-5 items-center mt-5 flex-wrap justify-center md:justify-start">
          <Link to="#">
            <Button className="dark:text-gray-900 hover:shadow-lg text-gray-200 !font-normal bg-gradient-to-r from-primary to-accent dark:from-accent dark:to-primary text-xl px-3 py-6 tracking-tight flex items-center">
              Get Started Free
              <Sparkles className="ml-2" size={20} />
            </Button>
          </Link>
          <Link to="#">
            <Button className="border-[2px] text-xl bg-background tracking-tight px-10 py-6 border-gray-200 hover:bg-gray-100">
              Sign In
            </Button>
          </Link>
        </div>
      </div>

      {/* Right Column */}
      <div className="justify-self-center md:justify-self-end w-full">
        <div className="flex flex-col bg-card-primary gap-4 p-[50px] dark:shadow-dark shadow-light rounded-3xl animate-scale-in overflow-hidden">
          <div className="w-3/4 animate-shimmer h-4 bg-gradient-to-b dark:from-primary dark:to-accent from-gray-200 to-gray-100 rounded-md"></div>
          <div className="w-full animate-shimmer h-4 bg-gradient-to-b dark:from-primary dark:to-accent from-gray-200 to-gray-100 rounded-md"></div>
          <div className="w-5/6 animate-shimmer h-4 bg-gradient-to-b dark:from-primary dark:to-accent from-gray-200 to-gray-100 rounded-md"></div>
          <div className="pt-6 space-y-3 border-t dark:border-gray-800 border-gray-100">
            <div className="w-3/4 animate-shimmer h-4 bg-gradient-to-b dark:from-primary dark:to-accent from-gray-200 to-gray-100 rounded-md"></div>
            <div className="w-full animate-shimmer h-4 bg-gradient-to-b dark:from-primary dark:to-accent from-gray-200 to-gray-100 rounded-md"></div>
          </div>
        </div>
      </div>

    </div>
  );
}
