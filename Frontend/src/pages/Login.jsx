import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.status === "success") {
        // Save token to localStorage
        localStorage.setItem("token", data.data.token);

        // Redirect to home page
        navigate("/");
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white px-2">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm border border-blue-200"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Login
        </h2>
        {error && <div className="mb-4 text-red-600 text-center">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6 relative">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type={showPassword ? "text" : "password"} // Toggle input type
            name="password"
            className="w-full px-3 py-2 border rounded"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-9 text-gray-600"
            onClick={() => setShowPassword(!showPassword)} // Toggle visibility
          >
            {showPassword ? "🙈" : "👁️"} {/* Eye icon */}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <div className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-blue-700 hover:underline font-medium"
          >
            Register from here
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;