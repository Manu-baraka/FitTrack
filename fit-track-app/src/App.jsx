import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import DailyPage from "./Pages/DailyPage";
import WeeklyPage from "./Pages/WeeklyPage";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="min-h-screen bg-[#49588C] font-poppins text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/daily"
          element={
            <ProtectedRoute>
              <DailyPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/weekly"
          element={
            <ProtectedRoute>
              <WeeklyPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<h1 className="text-center mt-10">404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}
export default App;