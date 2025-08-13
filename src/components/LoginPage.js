import React, { useState } from "react";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("clinic"); // default selected

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock credentials
    const credentials = {
      clinic: { username: "clinicadmin", password: "clinic123" },
      hospital: { username: "hospitaladmin", password: "hospital123" },
      patient: { username: "patient", password: "patient123" },
    };

    const user = credentials[role];

    if (username === user.username && password === user.password) {
      onLogin(role); // return role to App.js
    } else {
      alert("Invalid username or password for " + role);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-800">Login</h2>

        {/* Role Selector */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600">Login as</label>
          <select
            className="w-full border px-3 py-2 rounded"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="clinic">Admin Clinic</option>
            <option value="hospital">Admin Hospital</option>
            <option value="patient">Patient</option>
          </select>
        </div>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm text-gray-600">Username</label>
          <input
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Login button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
