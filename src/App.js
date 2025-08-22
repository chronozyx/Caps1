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
  FaFilePdf,
  FaSearch
} from "react-icons/fa";
import logo from "./assets/logo.png";

// Import all components
import PatientManagement from "./components/PatientManagement";
import LaboratoryDiagnostic from "./components/LaboratoryDiagnostic";
import Reporting from "./components/Reporting";
import Inventory from "./components/Inventory";
import FinancialManagement from "./components/FinancialManagement";
import AddAppointment from "./components/AddAppointment";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import ConsultationScheduling from "./components/ConsultationScheduling";

// Admin reports
import AdminPatientReports from "./components/admin/AdminPatientReports";
import AdminLaboratoryReports from "./components/admin/AdminLaboratoryReports";
import AdminInventoryReports from "./components/admin/AdminInventoryReports";
import AdminFinancialReports from "./components/admin/AdminFinancialReports";
import AdminSchedulingReports from "./components/admin/AdminSchedulingReports";

export default function App() {
  const [tab, setTab] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);
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
    <div className="min-h-screen bg-gray-100">
      {/* HOSPITAL ADMIN VIEW */}
      {userRole === "hospital" && (
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-green-800 text-white min-h-screen">
            <div className="p-4 border-b border-green-700 flex items-center gap-3">
              <img
                src={logo}
                alt="St. James Clinic Logo"
                className="w-10 h-10 rounded-full object-cover border border-white shadow"
              />
              <div>
                <h1 className="text-lg font-bold">St. James Clinic</h1>
                <p className="text-xs text-green-200">Hospital Admin</p>
              </div>
            </div>
            
            <nav className="mt-4">
              <div className="px-4 py-2 text-green-300 text-sm font-medium">Dashboard</div>
              <button
                onClick={() => setAdminSection("patient")}
                className={`flex items-center w-full px-4 py-2 text-left ${adminSection === "patient" ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <FaUserMd className="mr-2" /> Patients
              </button>
              <button
                onClick={() => setAdminSection("laboratory")}
                className={`flex items-center w-full px-4 py-2 text-left ${adminSection === "laboratory" ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <FaVials className="mr-2" /> Laboratory
              </button>
              <button
                onClick={() => setAdminSection("inventory")}
                className={`flex items-center w-full px-4 py-2 text-left ${adminSection === "inventory" ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <FaBoxes className="mr-2" /> Pharmacy
              </button>
              <button
                onClick={() => setAdminSection("financial")}
                className={`flex items-center w-full px-4 py-2 text-left ${adminSection === "financial" ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <FaMoneyBill className="mr-2" /> Billing
              </button>
              <button
                onClick={() => setAdminSection("scheduling")}
                className={`flex items-center w-full px-4 py-2 text-left ${adminSection === "scheduling" ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <FaCalendarCheck className="mr-2" /> Appointments
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-800">
                {adminSection === "patient" && "Patient Management"}
                {adminSection === "laboratory" && "Laboratory Reports"}
                {adminSection === "inventory" && "Pharmacy Inventory"}
                {adminSection === "financial" && "Financial Reports"}
                {adminSection === "scheduling" && "Appointment Reports"}
              </h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="pl-8 pr-4 py-2 border rounded-lg"
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <div className="text-sm text-gray-500">Today</div>
                <div className="text-2xl font-bold text-green-600">0.05%</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <div className="text-sm text-gray-500">Total</div>
                <div className="text-2xl font-bold text-green-600">3,120</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <div className="text-sm text-gray-500">Out patients</div>
                <div className="text-2xl font-bold text-green-600">31.26%</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <div className="text-sm text-gray-500">In patients</div>
                <div className="text-2xl font-bold text-green-600">68.74%</div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              {adminSection === "patient" && <AdminPatientReports />}
              {adminSection === "laboratory" && <AdminLaboratoryReports />}
              {adminSection === "inventory" && <AdminInventoryReports />}
              {adminSection === "financial" && <AdminFinancialReports />}
              {adminSection === "scheduling" && <AdminSchedulingReports />}
            </div>
          </div>
        </div>
      )}

      {/* CLINIC ADMIN VIEW */}
      {userRole === "clinic" && (
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-green-800 text-white min-h-screen">
            <div className="p-4 border-b border-green-700 flex items-center gap-3">
              <img
                src={logo}
                alt="St. James Clinic Logo"
                className="w-10 h-10 rounded-full object-cover border border-white shadow"
              />
              <div>
                <h1 className="text-lg font-bold">St. James Clinic</h1>
                <p className="text-xs text-green-200">Clinic Management</p>
              </div>
            </div>
            
            <nav className="mt-4">
              <div className="px-4 py-2 text-green-300 text-sm font-medium">Dashboard</div>
              <button
                onClick={() => setTab(0)}
                className={`flex items-center w-full px-4 py-2 text-left ${tab === 0 ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <FaUserMd className="mr-2" /> Patients
              </button>
              <button
                onClick={() => setTab(1)}
                className={`flex items-center w-full px-4 py-2 text-left ${tab === 1 ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <FaVials className="mr-2" /> Laboratory
              </button>
              <button
                onClick={() => setTab(2)}
                className={`flex items-center w-full px-4 py-2 text-left ${tab === 2 ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <FaClipboardList className="mr-2" /> Reports
              </button>
              <button
                onClick={() => setTab(3)}
                className={`flex items-center w-full px-4 py-2 text-left ${tab === 3 ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <FaBoxes className="mr-2" /> Inventory
              </button>
              <button
                onClick={() => setTab(4)}
                className={`flex items-center w-full px-4 py-2 text-left ${tab === 4 ? 'bg-green-700' : 'hover:bg-green-700'}`}
              >
                <FaMoneyBill className="mr-2" /> Billing
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-green-800">
                {tab === 0 && "Patient Management"}
                {tab === 1 && "Laboratory Diagnostic"}
                {tab === 2 && "Reporting"}
                {tab === 3 && "Inventory Management"}
                {tab === 4 && "Financial Management"}
              </h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="pl-8 pr-4 py-2 border rounded-lg"
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Logout
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              {tab === 0 && <PatientManagement />}
              {tab === 1 && <LaboratoryDiagnostic />}
              {tab === 2 && <Reporting />}
              {tab === 3 && <Inventory />}
              {tab === 4 && <FinancialManagement />}
            </div>
          </div>
        </div>
      )}

      {/* PATIENT VIEW */}
      {userRole === "patient" && (
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="bg-green-800 text-white p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="St. James Clinic Logo"
                  className="w-10 h-10 rounded-full object-cover border border-white shadow"
                />
                <h1 className="text-xl font-bold">St. James Clinic</h1>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setTab(2)}
                  className="hover:text-green-200"
                >
                  Services
                </button>
                <button 
                  onClick={() => setTab(3)}
                  className="hover:text-green-200"
                >
                  Contact
                </button>
                <button 
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded"
                >
                  Logout
                </button>
              </div>
            </div>
          </header>

          <div className="flex flex-1">
            {/* Sidebar */}
            <div className="w-48 bg-green-700 text-white">
              <nav className="mt-4">
                <button
                  onClick={() => setTab(0)}
                  className={`flex items-center w-full px-4 py-3 text-left ${tab === 0 ? 'bg-green-600' : 'hover:bg-green-600'}`}
                >
                  <FaHome className="mr-2" /> Home
                </button>
                <button
                  onClick={() => setTab(1)}
                  className={`flex items-center w-full px-4 py-3 text-left ${tab === 1 ? 'bg-green-600' : 'hover:bg-green-600'}`}
                >
                  <FaCalendarPlus className="mr-2" /> Book Appointment
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <main className="flex-1 p-6 bg-gray-100">
              {tab === 0 && <Home setTab={setTab} />}
              {tab === 1 && <AddAppointment />}
              {tab === 2 && (
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <h2 className="text-2xl font-bold text-green-800 mb-4">Our Services</h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>General Consultation</li>
                    <li>Laboratory Diagnostics</li>
                    <li>Cardiology</li>
                    <li>Pediatrics</li>
                    <li>Preventive Care</li>
                  </ul>
                </div>
              )}
              {tab === 3 && (
                <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                  <h2 className="text-2xl font-bold text-green-800 mb-4">Contact Us</h2>
                  <p className="text-gray-700 mb-2">Phone: (02) 1234 5678</p>
                  <p className="text-gray-700 mb-2">Email: hello@stjamesclinic.com</p>
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