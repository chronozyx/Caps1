import React from "react";
import { FaUserMd, FaVials, FaCalendarCheck } from "react-icons/fa";

export default function Home({ setTab }) {
  return (
    <div className="p-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-8 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-bold mb-3">🏥 Welcome to Saint James Clinic</h1>
        <p className="text-lg mb-4">
          Your trusted healthcare partner. Manage appointments, access lab results, and schedule consultations—all in one place.
        </p>
        <button
          onClick={() => setTab(1)} // Switch to Book Appointment tab
          className="bg-white text-blue-700 px-6 py-3 rounded-lg shadow hover:bg-blue-100 transition font-semibold"
        >
          Book an Appointment
        </button>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Patient Management */}
        <div className="bg-white border border-blue-200 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <FaUserMd className="text-blue-600 text-4xl mb-4" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Patient Management</h2>
          <p className="text-sm text-gray-600 mb-4">
            Register, update, and manage patient records with ease.
          </p>
          <button className="text-blue-600 font-medium hover:underline">
            Learn More →
          </button>
        </div>

        {/* Laboratory Diagnostic */}
        <div className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <FaVials className="text-green-600 text-4xl mb-4" />
          <h2 className="text-xl font-semibold text-green-700 mb-2">Laboratory Diagnostic</h2>
          <p className="text-sm text-gray-600 mb-4">
            Record and view diagnostic results for lab tests.
          </p>
          <button className="text-green-600 font-medium hover:underline">
            Learn More →
          </button>
        </div>

        {/* Consultation Scheduling */}
        <div className="bg-white border border-yellow-200 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <FaCalendarCheck className="text-yellow-600 text-4xl mb-4" />
          <h2 className="text-xl font-semibold text-yellow-700 mb-2">Consultation Scheduling</h2>
          <p className="text-sm text-gray-600 mb-4">
            Manage consultation appointments and doctor availability.
          </p>
          <button className="text-yellow-600 font-medium hover:underline">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}
