import { useSignUp } from "@clerk/clerk-react";
import { useState } from "react";

export default function SignUpPage() {
  const { signUp } = useSignUp();
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signUp.create({
        emailAddress: email,
        password,
        firstName,
        lastName,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      alert("Verification email sent. Check your inbox.");
    } catch (err) {
      console.error(err);
      alert(err.errors?.[0]?.message || "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Sign Up
  const handleGoogleSignUp = async () => {
    try {
      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/dashboard",
      });
    } catch (err) {
      console.error(err);
      alert("Google sign up failed.");
    }
  };

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center px-4 bg-background">
      <div
        className="
          w-[3/4]
          flex flex-col items-center
          rounded-2xl
          shadow-float
          animate-slide-in-up
          p-8
          bg-[var(--card-primary)]
        "
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-accent to-primary animate-float shadow-float">
            <span className="dark:text-gray-900 text-white font-bold text-lg">
              H
            </span>
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            HireMeAI
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">
            Create an account
          </h2>
          <p className="text-secondary dark:text-gray-300 text-sm">
            Start building your AI-powered resume
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignUp} className="flex flex-col gap-4 w-full">
          <div className="flex gap-3">
            <input
              name="firstName"
              placeholder="First name"
              className="flex-1 p-3 rounded-lg border bg-transparent border-light focus:ring-2 focus:ring-[var(--accent)] outline-none"
              required
            />
            <input
              name="lastName"
              placeholder="Last name"
              className="flex-1 p-3 rounded-lg border bg-transparent border-light focus:ring-2 focus:ring-[var(--accent)] outline-none"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="p-3 rounded-lg border bg-transparent border-light focus:ring-2 focus:ring-[var(--accent)] outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 rounded-lg border bg-transparent border-light focus:ring-2 focus:ring-[var(--accent)] outline-none"
            required
          />

          <button
            disabled={loading}
            className="
              mt-2 bg-accent dark:bg-primary text-white py-3 rounded-lg font-medium
              hover:opacity-90 transition disabled:opacity-60
            "
          >
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {/* OR */}
        <div className="flex items-center gap-3 my-6 w-full">
          <hr className="flex-1 border-light" />
          <span className="text-muted text-sm">OR</span>
          <hr className="flex-1 border-light" />
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleSignUp}
          className="
            w-full
            flex items-center justify-center gap-3
            border border-light
            py-3 rounded-lg
            hover:bg-[var(--card-secondary)]
            transition
          "
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          <span className="font-medium">
            Sign up with Google
          </span>
        </button>

        {/* Footer */}
        <p className="text-sm text-muted mt-6">
          Already have an account?{" "}
          <a href="/signin" className="text-[var(--accent)] hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
