// src/App.js
import React, { useState } from "react";
import {
  FaUserMd,
  FaVials,
  FaBoxes,
  FaMoneyBill,
  FaCalendarCheck,
  FaClipboardList,
  FaHome,
  FaCalendarPlus
} from "react-icons/fa";

import logo from "./assets/logo.png"; // ✅ PNG logo

// Clinic (internal) components
import PatientManagement from "./components/PatientManagement";
import LaboratoryDiagnostic from "./components/LaboratoryDiagnostic";
import Reporting from "./components/Reporting";
import Inventory from "./components/Inventory";
import FinancialManagement from "./components/FinancialManagement";
import AddAppointment from "./components/AddAppointment";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";

// Hospital Admin reports
import AdminPatientReports from "./components/admin/AdminPatientReports";
import AdminLaboratoryReports from "./components/admin/AdminLaboratoryReports";
import AdminInventoryReports from "./components/admin/AdminInventoryReports";
import AdminFinancialReports from "./components/admin/AdminFinancialReports";
import AdminSchedulingReports from "./components/admin/AdminSchedulingReports";

export default function App() {
  const [tab, setTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null); // "hospital" | "clinic" | "patient"
  const [adminSection, setAdminSection] = useState("patient");

  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
    setTab(0);
    setAdminSection("patient");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole(null);
    setTab(0);
    setAdminSection("patient");
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="p-0 relative">
      {/* ======================= HOSPITAL ADMIN ======================= */}
      {userRole === "hospital" && (
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white flex flex-col justify-between shadow-lg">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 px-4 py-6 border-b border-blue-500">
                <img
                  src={logo}
                  alt="Saint James Logo"
                  className="w-10 h-10 rounded-full object-cover border border-white shadow"
                />
                <h2 className="text-lg font-bold">Saint James Admin</h2>
              </div>

              {/* Navigation */}
              <nav className="mt-6 space-y-1">
                <button
                  onClick={() => setAdminSection("patient")}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition ${
                    adminSection === "patient" ? "bg-blue-500" : ""
                  }`}
                >
                  <FaUserMd /> Patient Management
                </button>
                <button
                  onClick={() => setAdminSection("laboratory")}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition ${
                    adminSection === "laboratory" ? "bg-blue-500" : ""
                  }`}
                >
                  <FaVials /> Laboratory Diagnostic
                </button>
                <button
                  onClick={() => setAdminSection("inventory")}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition ${
                    adminSection === "inventory" ? "bg-blue-500" : ""
                  }`}
                >
                  <FaBoxes /> Inventory
                </button>
                <button
                  onClick={() => setAdminSection("financial")}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition ${
                    adminSection === "financial" ? "bg-blue-500" : ""
                  }`}
                >
                  <FaMoneyBill /> Financial Management
                </button>
                <button
                  onClick={() => setAdminSection("scheduling")}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition ${
                    adminSection === "scheduling" ? "bg-blue-500" : ""
                  }`}
                >
                  <FaCalendarCheck /> Scheduling Success
                </button>
              </nav>
            </div>

            {/* Logout */}
            <div className="p-4 border-t border-blue-500">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 w-full py-2 rounded-lg shadow-md transition"
              >
                Logout
              </button>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
            {adminSection === "patient" && <AdminPatientReports />}
            {adminSection === "laboratory" && <AdminLaboratoryReports />}
            {adminSection === "inventory" && <AdminInventoryReports />}
            {adminSection === "financial" && <AdminFinancialReports />}
            {adminSection === "scheduling" && <AdminSchedulingReports />}
          </main>
        </div>
      )}

      {/* ======================= CLINIC ADMIN ======================= */}
      {userRole === "clinic" && (
        <div className="flex h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white flex flex-col justify-between shadow-lg">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 px-4 py-6 border-b border-blue-500">
                <img
                  src={logo}
                  alt="Saint James Logo"
                  className="w-10 h-10 rounded-full object-cover border border-white shadow"
                />
                <h2 className="text-lg font-bold">Saint James Clinic</h2>
              </div>

              {/* Navigation */}
              <nav className="mt-6 space-y-1">
                <button
                  onClick={() => setTab(0)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition ${
                    tab === 0 ? "bg-blue-500" : ""
                  }`}
                >
                  <FaUserMd /> Patient Management
                </button>
                <button
                  onClick={() => setTab(1)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition ${
                    tab === 1 ? "bg-blue-500" : ""
                  }`}
                >
                  <FaVials /> Laboratory Diagnostic
                </button>
                <button
                  onClick={() => setTab(2)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition ${
                    tab === 2 ? "bg-blue-500" : ""
                  }`}
                >
                  <FaClipboardList /> Reporting
                </button>
                <button
                  onClick={() => setTab(3)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition ${
                    tab === 3 ? "bg-blue-500" : ""
                  }`}
                >
                  <FaBoxes /> Inventory
                </button>
                <button
                  onClick={() => setTab(4)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition ${
                    tab === 4 ? "bg-blue-500" : ""
                  }`}
                >
                  <FaMoneyBill /> Financial Management
                </button>
              </nav>
            </div>

            {/* Logout */}
            <div className="p-4 border-t border-blue-500">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 w-full py-2 rounded-lg shadow-md transition"
              >
                Logout
              </button>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
            {tab === 0 && <PatientManagement />}
            {tab === 1 && <LaboratoryDiagnostic />}
            {tab === 2 && <Reporting />}
            {tab === 3 && <Inventory />}
            {tab === 4 && <FinancialManagement />}
          </main>
        </div>
      )}

      {/* ======================= Updated Patient Sidebar ======================= */}
      {userRole === "patient" && (
        <div className="flex flex-col h-screen bg-gray-50">
          {/* Top Header */}
          <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Saint James Logo"
                className="w-10 h-10 rounded-full object-cover border border-white shadow"
              />
              <h1 className="text-xl font-bold">Saint James Clinic</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTab(2)}
                className="hover:bg-blue-600 px-3 py-1 rounded transition"
              >
                Services
              </button>
              <button
                onClick={() => setTab(3)}
                className="hover:bg-blue-600 px-3 py-1 rounded transition"
              >
                Contact
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg shadow transition"
              >
                Logout
              </button>
            </div>
          </header>

          {/* Body */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <aside className="w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white shadow-lg">
              <nav className="mt-4 space-y-1">
                <button
                  onClick={() => setTab(0)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-r-full hover:bg-blue-500 transition ${
                    tab === 0 ? "bg-blue-500 font-semibold" : ""
                  }`}
                >
                  <FaHome /> Home
                </button>
                <button
                  onClick={() => setTab(1)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-r-full hover:bg-blue-500 transition ${
                    tab === 1 ? "bg-blue-500 font-semibold" : ""
                  }`}
                >
                  <FaCalendarPlus /> Book Appointment
                </button>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto">
              {tab === 0 && <Home setTab={setTab} />}
              {tab === 1 && <AddAppointment />}
              {tab === 2 && (
                <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Services</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>General Consultation</li>
                    <li>Laboratory Diagnostics</li>
                    <li>Cardiology</li>
                    <li>Pediatrics</li>
                    <li>Preventive Care</li>
                  </ul>
                </div>
              )}
              {tab === 3 && (
                <div className="bg-white p-6 rounded-xl shadow border border-blue-100">
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-2">Phone: (02) 1234 5678</p>
                  <p className="text-gray-700 mb-2">Email: hello@saintjamesclinic.ph</p>
                  <p className="text-gray-700">Address: 123 Health St., Manila</p>
                </div>
              )}
            </main>
          </div>
        </div>
      )}
    </div>
  );
}
