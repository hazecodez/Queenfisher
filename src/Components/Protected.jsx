import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const agreedTerms = localStorage.getItem("agreedTerms") === "true";

  return agreedTerms ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
