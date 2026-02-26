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
    <nav className="bg-black bg-opacity-30 p-3 flex gap-4 items-center font-semibold">
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
          <>
            <Link to="/login" className="mr-2">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
