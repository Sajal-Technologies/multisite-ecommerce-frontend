import { Navigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  console.log(user);

  if (!user) {
    return <Navigate to="/SignUp" />;
  }

  return children;
}

export default ProtectedRoute;
