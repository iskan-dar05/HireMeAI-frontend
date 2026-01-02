import { SignIn } from '@clerk/clerk-react'


const SignInPage = ()=>{
  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
        <h1>Sign In</h1>
        <SignIn path="/signin" routing="path" signUpUrl="/signup" />
      </div>
  )
}

export default SignInPage;