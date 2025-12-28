import { Navigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth-context';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return null; // or a spinner
  if (!isAuthenticated) return <Navigate to="/signin" replace />;

  return children;
}
