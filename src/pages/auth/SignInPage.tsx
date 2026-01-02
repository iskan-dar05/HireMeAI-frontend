import { SignIn, useTheme } from "@clerk/clerk-react";
import { dark, light } from '@clerk/themes'
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "@/lib/theme-context"
const SignInPage = () => {
  const { theme } = useContext(ThemeContext) 
  const [ clerkTheme, setClerkTheme ] = useState(light)

  useEffect(() => {
    setClerkTheme(theme === "dark" ? dark : light);
  }, [theme]);

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-card-primary dark:bg-card-secondary">
      <div className="w-2/4 flex items-center flex-col rounded-2xl shadow-custom-2xl animate-slide-in-up p-6">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-custom bg-accent shadow-float">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <span className="font-bold text-lg bg-accent bg-clip-text text-transparent">
            HireMeAI
          </span>
        </div>

        <SignIn
          path="/signin"
          routing="path"
          signUpUrl="/signup"
          appearance={{ theme: clerkTheme }} // <-- apply dark/light mode
        />
      </div>
    </div>
  );
};

export default SignInPage;
