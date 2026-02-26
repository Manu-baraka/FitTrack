import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-black bg-opacity-30 p-3 flex gap-4 text-white font-semibold items-center">
      
      {user && (
        <>
          <Link to="/">Home</Link>
          <Link to="/daily">Daily Tracker</Link>
          <Link to="/weekly">Weekly History</Link>
        </>
      )}

      <div className="ml-auto">
        {user ? (
          <button
            onClick={handleLogout}
            className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>

    </nav>
  );
}
