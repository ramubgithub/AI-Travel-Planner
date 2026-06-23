import { Navigate } from "react-router-dom";
import "../styles/protectedRoute.css";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <div className="auth-redirect">
        <div className="loader"></div>
        <h2>Redirecting to Login...</h2>
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;