import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-30 p-3 flex gap-4 text-white font-semibold">
      <Link to="/">Home</Link>
      <Link to="/daily">Daily Tracker</Link>
      <Link to="/weekly">Weekly History</Link>
    </nav>
  );
}
