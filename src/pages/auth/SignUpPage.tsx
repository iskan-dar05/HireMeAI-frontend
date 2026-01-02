import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => {
  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h1>Sign Up</h1>
      <SignUp path="/signup" routing="path" signInUrl="/signin" />
    </div>
  );
};

export default SignUpPage;
