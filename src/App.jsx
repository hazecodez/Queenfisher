import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Terms from "./pages/terms";
import Login from "./pages/login";
import Congrats from "./pages/congrats";
import Error from "./pages/error";
import Thanks from "./pages/thankyou";
import ProtectedRoute from "./Components/Protected";
import AuthProtectedRoute from "./Components/AuthProtected";

export default function App() {
  return (
    <Router>
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/Queens Day BG.png')" }}
      >
        <Routes>
          <Route path="/" element={<Terms />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/login" element={<Login />} />
            <Route element={<AuthProtectedRoute />}>
              <Route path="/congrats" element={<Congrats />} />
              <Route path="/error" element={<Error />} />
              <Route path="/thanks" element={<Thanks />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
