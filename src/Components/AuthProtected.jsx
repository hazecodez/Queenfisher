import { Navigate, Outlet } from "react-router-dom";

const AuthProtectedRoute = () => {
  const isFormFilled = localStorage.getItem("formCompleted") === "true";

  return isFormFilled ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthProtectedRoute;
