import React, { useState } from "react";

export default function FinancialManagement() {
  const [tab, setTab] = useState("payments");

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-yellow-800">Financial Management</h2>
        <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">Export as PDF</button>
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setTab("payments")}
          className={`px-4 py-2 rounded font-semibold ${
            tab === "payments"
              ? "bg-yellow-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Payment Module
        </button>
        <button
          onClick={() => setTab("doctors")}
          className={`px-4 py-2 rounded font-semibold ${
            tab === "doctors"
              ? "bg-yellow-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Doctors Payment
        </button>
        <button
          onClick={() => setTab("transactions")}
          className={`px-4 py-2 rounded font-semibold ${
            tab === "transactions"
              ? "bg-yellow-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Transaction Reports
        </button>
        <button
          onClick={() => setTab("hmo")}
          className={`px-4 py-2 rounded font-semibold ${
            tab === "hmo"
              ? "bg-yellow-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          HMO Providers
        </button>
      </div>

      {tab === "payments" && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Patient Payment Module</h3>
          <ul className="list-disc ml-6">
            <li>Cash Payments</li>
            <li>Card Payments</li>
            <li>Discounts Applied</li>
          </ul>
        </div>
      )}

      {tab === "doctors" && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Doctors Payment</h3>
          <ul className="list-disc ml-6">
            <li>Payment Summary</li>
            <li>Payment per Consultation</li>
            <li>Incentives and Bonuses</li>
          </ul>
        </div>
      )}

      {tab === "transactions" && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Reported Transactions</h3>
          <p>View all recorded financial transactions between patients and doctors filtered by date.</p>
        </div>
      )}

      {tab === "hmo" && (
        <div>
          <h3 className="text-lg font-semibold mb-2">HMO Providers</h3>
          <ul className="list-disc ml-6">
            <li>HMO Partner List</li>
            <li>Patient-HMO Transactions</li>
            <li>Billing Statements</li>
          </ul>
        </div>
      )}
    </div>
  );
}
