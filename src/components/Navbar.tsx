import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeContext } from '@/lib/theme-context';
import { useContext, useState } from 'react';
import {
  useAuth,
  useUser,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/clerk-react";


export function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isSignedIn, signOut } = useAuth();
  const { user } = useUser();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const onSignInPage = location.pathname === '/signin';
  const onSignUpPage = location.pathname === '/signup';

  const handleSignOut = async () => {
    await signOut();
    navigate('/signin');
  };

    const authButtons = !isSignedIn ? (
    <>
      {!onSignInPage && (
        <Button
          onClick={() => navigate("/signin")}
          className="bg-primary text-white hover:scale-105 transition-all shadow-float"
        >
          Sign In
        </Button>
      )}

      {!onSignUpPage && (
        <Button
        onClick={() => navigate("/signup")}
        className="bg-accent text-white hover:scale-105 transition-all shadow-float"
      >
        Sign Up
      </Button>
      )}
    </>
  ) : (
    <div className="flex items-center gap-4">
      <span className="bg-card-secondary px-3 py-1 rounded-full shadow-float text-sm">
        {user?.primaryEmailAddress?.emailAddress}
      </span>

      {/* Clerk built-in user menu (logout, profile, etc.) */}
      <UserButton afterSignOutUrl="/signin" />
    </div>
  );
  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-card-primary/90 dark:bg-primary/90 backdrop-blur-md border-b border-card-secondary shadow-custom-2xl">
      <div className="w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-[70px]">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-custom bg-accent animate-float shadow-float">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            HireMeAI
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          <Button
            onClick={toggleTheme}
            className="flex items-center justify-center gap-2 bg-card-secondary dark:bg-primary text-foreground dark:text-foreground hover:bg-accent hover:text-white shadow-float transition-all"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>

          {authButtons}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <Button
            onClick={() => setMenuOpen(!menuOpen)}
            className="bg-card-secondary dark:bg-primary text-foreground dark:text-foreground hover:bg-accent hover:text-white shadow-float transition-all"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-card-primary dark:bg-primary border-t border-card-secondary shadow-custom-2xl transform transition-all origin-top ${
          menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3 px-4 py-4">
          <Button
            onClick={toggleTheme}
            className="flex justify-start gap-2 bg-card-secondary dark:bg-primary text-foreground dark:text-foreground hover:bg-accent hover:text-white w-full shadow-float transition-all"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            Toggle Theme
          </Button>

          {authButtons}
        </div>
      </div>
    </nav>
  );
}
