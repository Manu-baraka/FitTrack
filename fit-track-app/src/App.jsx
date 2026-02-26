import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import DailyPage from "./Pages/DailyPage";
import WeeklyPage from "./Pages/WeeklyPage";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  return (
    <Router>
      <div className="min-h-screen bg-[#49588C]">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/daily" element={<ProtectedRoute user={user}><DailyPage /></ProtectedRoute>} />
          <Route path="/weekly" element={<ProtectedRoute user={user}><WeeklyPage /></ProtectedRoute>} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
