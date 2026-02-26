import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

 function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (!savedUser || savedUser.username !== username || savedUser.password !== password) {
      return alert("Invalid credentials!");
    }
    login(savedUser);
    navigate("/daily");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl mb-6">Login</h1>
      <form
        className="flex flex-col gap-4 bg-white p-6 rounded shadow-md text-black"
        onSubmit={handleLogin}
      >
        <input
          type="text"
          placeholder="Username"
          className="p-2 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#49588C] text-white p-2 rounded hover:bg-[#37476C]"
        >
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;