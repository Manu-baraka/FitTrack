import { Navigate } from "react-router-dom";
 function ProtectedRoute({ user, children }) {
  // If no user, redirect to home or login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // If user exists, render the protected component
  return children;
}
export default ProtectedRoute;