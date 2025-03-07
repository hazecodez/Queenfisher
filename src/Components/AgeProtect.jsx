import { Navigate, Outlet } from "react-router-dom";

const AgeProtectedRoute = () => {
  const isLegallyAged = localStorage.getItem("legallyAged") === "true";

  return isLegallyAged ? <Outlet /> : <Navigate to="/" replace />;
};

export default AgeProtectedRoute;