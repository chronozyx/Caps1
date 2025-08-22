import React from "react";
import { FaFilePdf, FaCalendarCheck } from "react-icons/fa";

export default function AdminSchedulingReports() {
  const data = [
    ["A001", "Juan Dela Cruz", "Dr. Santos", "Cardiology", "01/08/2025"],
    ["A002", "Maria Santos", "Dr. Reyes", "Pediatrics", "01/09/2025"],
    ["A003", "Pedro Reyes", "Dr. Cruz", "General Checkup", "01/10/2025"],
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="flex items-center gap-2 text-xl font-bold text-green-800">
          <FaCalendarCheck /> Scheduling Success Reports
        </h2>
        <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow">
          <FaFilePdf /> Export as PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-green-300 rounded-lg overflow-hidden">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th className="border p-3 text-left">Appointment ID</th>
              <th className="border p-3 text-left">Patient Name</th>
              <th className="border p-3 text-left">Doctor</th>
              <th className="border p-3 text-left">Department</th>
              <th className="border p-3 text-left">Date</th>
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