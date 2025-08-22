import React from "react";
import { FaFilePdf, FaBoxes } from "react-icons/fa";

export default function AdminInventoryReports() {
  const data = [
    ["S001", "Syringes", "100", "Used: 20", "Rejected: 0"],
    ["S002", "Bandages", "200", "Used: 50", "Rejected: 5"],
    ["S003", "Gloves", "500", "Used: 100", "Rejected: 2"],
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-green-800">
          <FaBoxes /> Inventory Reports
        </h2>
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow">
          <FaFilePdf /> Export as PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-green-300 rounded-lg overflow-hidden">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="border p-3 text-left">Stock ID</th>
              <th className="border p-3 text-left">Item</th>
              <th className="border p-3 text-left">Available</th>
              <th className="border p-3 text-left">Used</th>
              <th className="border p-3 text-left">Rejected</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-green-50 transition-colors duration-200">
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