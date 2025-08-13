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
  FaCalendarPlus,
  FaInfoCircle,
  FaPhoneAlt
} from "react-icons/fa";

// Components
import Home from "./components/Home";
import PatientManagement from "./components/PatientManagement";
import LaboratoryDiagnostic from "./components/LaboratoryDiagnostic";
import Reporting from "./components/Reporting";
import Inventory from "./components/Inventory";
import FinancialManagement from "./components/FinancialManagement";
import AddAppointment from "./components/AddAppointment";
import LoginPage from "./components/LoginPage";

// Admin Hospital Reports
import AdminPatientReports from "./components/admin/AdminPatientReports";
import AdminLaboratoryReports from "./components/admin/AdminLaboratoryReports";
import AdminInventoryReports from "./components/admin/AdminInventoryReports";
import AdminFinancialReports from "./components/admin/AdminFinancialReports";
import AdminSchedulingReports from "./components/admin/AdminSchedulingReports";

export default function ClinicUI() {
  const [tab, setTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [adminSection, setAdminSection] = useState("patient");

  const handleLogin = (role) => {
    setUserRole(role);
    setIsLoggedIn(true);
    setTab(0);
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
      {/* HOSPITAL ADMIN */}
      {userRole === "hospital" && (
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white flex flex-col justify-between shadow-lg">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 px-4 py-6 border-b border-blue-500">
                <div className="bg-white text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  SJ
                </div>
                <h2 className="text-lg font-bold">Saint James Admin</h2>
              </div>

              {/* Navigation */}
              <nav className="mt-6 space-y-1">
                <button
                  onClick={() => setAdminSection("patient")}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition-all duration-200 ${
                    adminSection === "patient" ? "bg-blue-500" : ""
                  }`}
                >
                  <FaUserMd /> Patient Management
                </button>

                <button
                  onClick={() => setAdminSection("laboratory")}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition-all duration-200 ${
                    adminSection === "laboratory" ? "bg-blue-500" : ""
                  }`}
                >
                  <FaVials /> Laboratory Diagnostic
                </button>

                <button
                  onClick={() => setAdminSection("inventory")}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition-all duration-200 ${
                    adminSection === "inventory" ? "bg-blue-500" : ""
                  }`}
                >
                  <FaBoxes /> Inventory
                </button>

                <button
                  onClick={() => setAdminSection("financial")}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition-all duration-200 ${
                    adminSection === "financial" ? "bg-blue-500" : ""
                  }`}
                >
                  <FaMoneyBill /> Financial Management
                </button>

                <button
                  onClick={() => setAdminSection("scheduling")}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition-all duration-200 ${
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
                className="bg-red-500 hover:bg-red-600 w-full py-2 rounded-lg shadow-md transition-all duration-200"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
            {adminSection === "patient" && <AdminPatientReports />}
            {adminSection === "laboratory" && <AdminLaboratoryReports />}
            {adminSection === "inventory" && <AdminInventoryReports />}
            {adminSection === "financial" && <AdminFinancialReports />}
            {adminSection === "scheduling" && <AdminSchedulingReports />}
          </div>
        </div>
      )}

      {/* CLINIC ADMIN */}
      {userRole === "clinic" && (
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white flex flex-col justify-between shadow-lg">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-3 px-4 py-6 border-b border-blue-500">
                <div className="bg-white text-blue-700 font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  SJ
                </div>
                <h2 className="text-lg font-bold">Saint James Clinic</h2>
              </div>

              {/* Navigation */}
              <nav className="mt-6 space-y-1">
                <button
                  onClick={() => setTab(0)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition-all duration-200 ${
                    tab === 0 ? "bg-blue-500" : ""
                  }`}
                >
                  <FaUserMd /> Patient Management
                </button>

                <button
                  onClick={() => setTab(1)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition-all duration-200 ${
                    tab === 1 ? "bg-blue-500" : ""
                  }`}
                >
                  <FaVials /> Laboratory Diagnostic
                </button>

                <button
                  onClick={() => setTab(2)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition-all duration-200 ${
                    tab === 2 ? "bg-blue-500" : ""
                  }`}
                >
                  <FaClipboardList /> Reporting
                </button>

                <button
                  onClick={() => setTab(3)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition-all duration-200 ${
                    tab === 3 ? "bg-blue-500" : ""
                  }`}
                >
                  <FaBoxes /> Inventory
                </button>

                <button
                  onClick={() => setTab(4)}
                  className={`flex items-center gap-3 px-4 py-3 w-full text-left hover:bg-blue-500 rounded-r-full transition-all duration-200 ${
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
                className="bg-red-500 hover:bg-red-600 w-full py-2 rounded-lg shadow-md transition-all duration-200"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
            {tab === 0 && <PatientManagement />}
            {tab === 1 && <LaboratoryDiagnostic />}
            {tab === 2 && <Reporting />}
            {tab === 3 && <Inventory />}
            {tab === 4 && <FinancialManagement />}
          </div>
        </div>
      )}

      {/* PATIENT ROLE - Promotional */}
      {userRole === "patient" && (
        <div className="flex flex-col h-screen bg-gray-50">
          {/* Top Bar */}
          <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 flex justify-between items-center shadow-md">
            <h1 className="text-xl font-bold">Saint James Clinic</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg shadow"
            >
              Logout
            </button>
          </header>

          {/* Main Content */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar Navigation */}
            <aside className="w-64 bg-white shadow-lg border-r p-4 space-y-3">
              <button
                onClick={() => setTab(0)}
                className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg hover:bg-blue-100 ${
                  tab === 0 ? "bg-blue-200 font-bold" : ""
                }`}
              >
                <FaHome /> Home
              </button>

              <button
                onClick={() => setTab(1)}
                className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg hover:bg-blue-100 ${
                  tab === 1 ? "bg-blue-200 font-bold" : ""
                }`}
              >
                <FaCalendarPlus /> Book Appointment
              </button>

              <button
                onClick={() => setTab(2)}
                className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg hover:bg-blue-100 ${
                  tab === 2 ? "bg-blue-200 font-bold" : ""
                }`}
              >
                <FaInfoCircle /> Services
              </button>

              <button
                onClick={() => setTab(3)}
                className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg hover:bg-blue-100 ${
                  tab === 3 ? "bg-blue-200 font-bold" : ""
                }`}
              >
                <FaPhoneAlt /> Contact
              </button>
            </aside>

            {/* Content Area */}
            <main className="flex-1 p-6 overflow-y-auto">
              {tab === 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">
                    Welcome to Saint James Clinic
                  </h2>
                  <p className="mb-6 text-gray-700">
                    Your health is our top priority. Book an appointment online, learn more about our services,
                    or get in touch with our team today.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                      <FaCalendarPlus className="text-blue-600 text-4xl mb-3" />
                      <h3 className="text-lg font-semibold mb-2">Book Appointment</h3>
                      <p className="text-gray-600">Easily schedule your visit with our doctors.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                      <FaInfoCircle className="text-blue-600 text-4xl mb-3" />
                      <h3 className="text-lg font-semibold mb-2">Our Services</h3>
                      <p className="text-gray-600">Discover what we offer to care for your health.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                      <FaPhoneAlt className="text-blue-600 text-4xl mb-3" />
                      <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                      <p className="text-gray-600">We’re here to help with your inquiries.</p>
                    </div>
                  </div>
                </div>
              )}

              {tab === 1 && <AddAppointment />}
              {tab === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Services</h2>
                  <p>List your services here.</p>
                </div>
              )}
              {tab === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h2>
                  <p>Show contact info here.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      )}
    </div>
  );
}
