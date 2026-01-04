import { useContext, useEffect, useState } from "react";
import { SignUp } from "@clerk/clerk-react";
import { dark, light } from "@clerk/themes";
import { ThemeContext } from "@/lib/theme-context";

const SignUpPage = () => {
  const { theme } = useContext(ThemeContext); // reactive theme
  const [clerkTheme, setClerkTheme] = useState(light);

  useEffect(() => {
    setClerkTheme(theme === "dark" ? dark : light);
  }, [theme]);

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center bg-background">
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

        {/* Clerk SignUp */}
        <SignUp
          path="/signup"
          routing="path"
          signInUrl="/signin"
          appearance={{ theme: clerkTheme }}
        />
      </div>
    </div>
  );
};

export default SignUpPage;
