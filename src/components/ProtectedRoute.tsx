import { useUser } from '@clerk/clerk-react'
import { useNavigate } from "react-router-dom"


const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useUser()
  const navigate = useNavigate()

  if(!isSignedIn) return navigate("/signin", { replace: true });

  return children;

};


export default ProtectedRoute