import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import DailyPage from "./Pages/DailyPage";
import WeeklyPage from "./Pages/WeeklyPage";
import Navbar from "./components/Navbar";

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
          <Route path="/daily" element={<DailyPage />} />
          <Route path="/weekly" element={<WeeklyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
