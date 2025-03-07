import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgeConfirm from "./pages/ageConfirm";
import Terms from "./pages/terms";
import Login from "./pages/login";
import Congrats from "./pages/congrats";
import Error from "./pages/error";
import Thanks from "./pages/thankyou";
import ProtectedRoute from "./Components/Protected";
import AuthProtectedRoute from "./Components/AuthProtected";
import { Toaster } from "sonner";
import AgeProtectedRoute from "./Components/AgeProtect";
import Sorry from "./pages/sorry";

export default function App() {
  return (
    <Router>
      <Toaster position="top-center" richColors />
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Queens Day BG.png')" }}
      >
        <Routes>
          <Route path="/" element={<AgeConfirm />} />
          <Route path="/sorry" element={<Sorry />} />
          <Route element={<AgeProtectedRoute />}>
            <Route path="/terms" element={<Terms />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/login" element={<Login />} />
              <Route element={<AuthProtectedRoute />}>
                <Route path="/congrats" element={<Congrats />} />
                <Route path="/error" element={<Error />} />
                <Route path="/thanks" element={<Thanks />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
