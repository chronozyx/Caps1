import React from "react";
import { FaUserMd, FaVials, FaCalendarCheck } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Home({ setTab }) {
  return (
    <div className="p-6">
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-8 rounded-lg shadow-lg mb-8">
        <div className="flex items-center justify-center mb-4">
          <img 
            src={logo} 
            alt="St. James Clinic Logo"
            className="w-16 h-16 mr-4 rounded-full border-2 border-white"
          />
          <div>
            <h1 className="text-3xl font-bold">Welcome to St. James Clinic</h1>
            <p className="text-lg">
              Your trusted healthcare partner since 1985
            </p>
          </div>
        </div>
        <button
          onClick={() => setTab(1)}
          className="bg-white text-green-700 px-6 py-3 rounded-lg shadow hover:bg-green-50 transition font-semibold"
        >
          Book an Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <FaUserMd className="text-green-600 text-4xl mb-4" />
          <h2 className="text-xl font-semibold text-green-700 mb-2">Patient Management</h2>
          <p className="text-sm text-gray-600 mb-4">
            Register, update, and manage patient records with ease.
          </p>
          <button className="text-green-600 font-medium hover:underline">
            Learn More →
          </button>
        </div>

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

        <div className="bg-white border border-green-200 p-6 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <FaCalendarCheck className="text-green-600 text-4xl mb-4" />
          <h2 className="text-xl font-semibold text-green-700 mb-2">Consultation Scheduling</h2>
          <p className="text-sm text-gray-600 mb-4">
            Manage consultation appointments and doctor availability.
          </p>
          <button className="text-green-600 font-medium hover:underline">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
}