import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function FinancialManagement() {
  const [tab, setTab] = useState("payments");

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-green-200">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={logo}
          alt="St. James Clinic Logo"
          className="w-12 h-12 rounded-full border-2 border-green-300"
        />
        <div>
          <h2 className="text-2xl font-bold text-green-800">Financial Management</h2>
          <p className="text-sm text-green-600">St. James Clinic</p>
        </div>
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setTab("payments")}
          className={`px-4 py-2 rounded font-semibold ${
            tab === "payments"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Payment Module
        </button>
        <button
          onClick={() => setTab("doctors")}
          className={`px-4 py-2 rounded font-semibold ${
            tab === "doctors"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Doctors Payment
        </button>
        <button
          onClick={() => setTab("transactions")}
          className={`px-4 py-2 rounded font-semibold ${
            tab === "transactions"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Transaction Reports
        </button>
        <button
          onClick={() => setTab("hmo")}
          className={`px-4 py-2 rounded font-semibold ${
            tab === "hmo"
              ? "bg-green-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          HMO Providers
        </button>
      </div>

      {tab === "payments" && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-700">Patient Payment Module</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Cash Payments</li>
            <li>Card Payments</li>
            <li>Discounts Applied</li>
          </ul>
        </div>
      )}

      {tab === "doctors" && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-700">Doctors Payment</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>Payment Summary</li>
            <li>Payment per Consultation</li>
            <li>Incentives and Bonuses</li>
          </ul>
        </div>
      )}

      {tab === "transactions" && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-700">Reported Transactions</h3>
          <p className="text-gray-700">View all recorded financial transactions between patients and doctors filtered by date.</p>
        </div>
      )}

      {tab === "hmo" && (
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-700">HMO Providers</h3>
          <ul className="list-disc ml-6 text-gray-700">
            <li>HMO Partner List</li>
            <li>Patient-HMO Transactions</li>
            <li>Billing Statements</li>
          </ul>
        </div>
      )}
    </div>
  );
}