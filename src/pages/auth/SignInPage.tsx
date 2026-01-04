import { SignIn, useTheme } from "@clerk/clerk-react";
import { dark, light, neobrutalism } from '@clerk/themes'
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "@/lib/theme-context"
const SignInPage = () => {
  const { theme } = useContext(ThemeContext) 
  const [ clerkTheme, setClerkTheme ] = useState(light)

  useEffect(() => {
    setClerkTheme(theme === "dark" ? dark : light);
  }, [theme]);

  return (
    <div className="min-h-[calc(100vh-100px)] bg-background flex items-center justify-center">
      <div className="w-2/4 flex items-center flex-col rounded-2xl shadow-custom-2xl animate-slide-in-up p-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary animate-float shadow-float">
            <span className="dark:text-gray-900 text-white font-bold text-lg">H</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            HireMeAI
          </span>
        </div>

        <SignIn
        path="/signin"
        routing="path"
        signUpUrl="/signup"
        appearance={{
          theme: clerkTheme,
          elements: {
            formButtonPrimary: {
              color: "black",
              fontWeight: "500",
            },
          },
        }}
      />

      </div>
    </div>
  );
};

export default SignInPage;
