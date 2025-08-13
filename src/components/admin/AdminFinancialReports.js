import React from "react";
import { FaFilePdf, FaMoneyBill } from "react-icons/fa";

export default function AdminFinancialReports() {
  const data = [
    ["T001", "Juan Dela Cruz", "₱500", "Cash", "01/08/2025"],
    ["T002", "Maria Santos", "₱1,200", "Card", "01/09/2025"],
    ["T003", "Pedro Reyes", "₱700", "HMO", "01/10/2025"],
  ];

  return (
    <div className="bg-white shadow-xl p-6 rounded-2xl border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
          <FaMoneyBill /> Financial Management Reports
        </h2>
        <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-2 rounded-full shadow">
          <FaFilePdf /> Export as PDF
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-blue-100 to-blue-200">
            <tr>
              <th className="border p-3 text-left">Transaction ID</th>
              <th className="border p-3 text-left">Patient Name</th>
              <th className="border p-3 text-left">Amount</th>
              <th className="border p-3 text-left">Payment Type</th>
              <th className="border p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-blue-50 transition-colors duration-200">
                {row.map((cell, j) => (
                  <td key={j} className="border p-3">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
