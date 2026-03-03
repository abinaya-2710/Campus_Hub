import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../services/authContextType";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: "club_head" | "admin";
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const authContext = useContext(AuthContext);

  if (authContext?.isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3a5b22] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!authContext?.currentUser || !authContext?.userProfile) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && authContext.userProfile.role !== requiredRole && authContext.userProfile.role !== "admin") {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
