import { useSignIn } from "@clerk/clerk-react";
import { Chrome } from "lucide-react";


export default function SignInPage() {
  const { signIn } = useSignIn();

  const handleEmailLogin = async (email, password) => {
    try {
      const createdSignIn = await signIn.create({
        identifier: email,
        password,
      });

      if (createdSignIn.createdSessionId) {
        window.location.href = "/dashboard";
      }
    } catch (err) {
      console.error(err);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signIn.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/dashboard",
      });
    } catch (err) {
      console.error(err);
      alert("Google login failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div
        className="
          w-full max-w-md
          bg-[var(--card-primary)]
          p-8
          rounded-custom
          shadow-float
          animate-slide-in-up
        "
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">
            Welcome Back
          </h2>
          <p className="text-secondary dark:text-gray-300 text-sm">
            Sign in to continue building your resume
          </p>
        </div>

        {/* Email / Password */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEmailLogin(
              e.target.email.value,
              e.target.password.value
            );
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="
              p-3 rounded-lg border
              bg-transparent
              border-light
              focus:outline-none
              focus:ring-2
              focus:ring-[var(--accent)]
            "
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="
              p-3 rounded-lg border
              bg-transparent
              border-light
              focus:outline-none
              focus:ring-2
              focus:ring-[var(--accent)]
            "
            required
          />

          <button
            type="submit"
            className="
              mt-2
              bg-accent
              dark:bg-primary
              text-white
              py-3
              rounded-lg
              font-medium
              hover:opacity-90
              transition
            "
          >
            Sign In
          </button>
        </form>

        {/* OR */}
        <div className="flex items-center gap-3 my-6">
          <hr className="flex-1 border-light" />
          <span className="text-muted text-sm">OR</span>
          <hr className="flex-1 border-light" />
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="
            w-full
            flex items-center justify-center gap-3
            border border-light
            py-3 rounded-lg
            hover:bg-[var(--card-secondary)]
            transition
          "
        >
          <img
            src="/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          <span className="font-medium">
            Sign in with Google
          </span>
        </button>
      </div>
    </div>
  );
}
