import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("clinic");

  const handleLogin = (e) => {
    e.preventDefault();
    const credentials = {
      clinic: { username: "clinicadmin", password: "clinic123" },
      hospital: { username: "hospitaladmin", password: "hospital123" },
      patient: { username: "patient", password: "patient123" },
    };

    const user = credentials[role];
    if (username === user.username && password === user.password) {
      onLogin(role);
    } else {
      alert("Invalid username or password for " + role);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-green-200">
        <div className="text-center mb-6">
          <img 
            src={logo} 
            alt="St. James Clinic Logo" 
            className="w-16 h-16 mx-auto mb-2 rounded-full border-2 border-green-200"
          />
          <h1 className="text-2xl font-bold text-green-800">St. James Clinic</h1>
          <p className="text-green-600">Hospital Management System</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">Login as</label>
            <select
              className="w-full p-2 border border-green-300 rounded focus:ring-2 focus:ring-green-200"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="clinic">Admin Clinic</option>
              <option value="hospital">Admin Hospital</option>
              <option value="patient">Patient</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-green-300 rounded focus:ring-2 focus:ring-green-200"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-green-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-green-300 rounded focus:ring-2 focus:ring-green-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}