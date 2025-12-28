import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute'
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import ResumeCreate from "./pages/ResumeCreate";
import ResumePreview from "./pages/ResumePreview";
import Templates from "./pages/Templates";
import { ThemeProvider } from './lib/theme-context';
import { Navbar } from './components/Navbar';
import { AuthProvider } from "@/lib/auth-context";   // <<--- IMPORTANT

const queryClient = new QueryClient();

const App = () => { 
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>

        {/* ✅ Put AuthProvider here */}
        <AuthProvider>

          {/* your ThemeProvider */}
          <ThemeProvider>

            <BrowserRouter>
              <Navbar />

              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/resume-create/:templateId" element={<ProtectedRoute><ResumeCreate /></ProtectedRoute>} />
                <Route path="/templates" element={<ProtectedRoute><Templates /></ProtectedRoute>} />
                <Route path="/resume-preview/:pdfPath" element={<ProtectedRoute><ResumePreview /></ProtectedRoute>} />
                <Route path="*" element={<NotFound />} />

              </Routes>

            </BrowserRouter>

          </ThemeProvider>

        </AuthProvider>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
