import React from "react";

export default function Reporting() {
  const reports = [
    {
      patient: "Juan Dela Cruz",
      doctor: "Dr. Santos",
      specialty: "Pediatrics",
      date: "2025-08-01",
      time: "10:30",
      procedure: "Routine Checkup"
    },
    {
      patient: "Maria Clara",
      doctor: "Dr. Reyes",
      specialty: "Internal Medicine",
      date: "2025-08-03",
      time: "14:00",
      procedure: "Blood Test"
    },
    {
      patient: "Pedro Penduko",
      doctor: "Dr. Garcia",
      specialty: "Dermatology",
      date: "2025-08-05",
      time: "09:30",
      procedure: "Skin Allergy Test"
    }
  ];

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-300">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Full Patient and Doctor Report</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border border-collapse border-gray-300">
          <thead className="bg-blue-100 text-blue-800">
            <tr>
              <th className="border px-4 py-2">Patient</th>
              <th className="border px-4 py-2">Doctor</th>
              <th className="border px-4 py-2">Specialty</th>
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Time</th>
              <th className="border px-4 py-2">Procedure</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((r, index) => (
              <tr key={index} className="odd:bg-white even:bg-blue-50">
                <td className="border px-4 py-2">{r.patient}</td>
                <td className="border px-4 py-2">{r.doctor}</td>
                <td className="border px-4 py-2">{r.specialty}</td>
                <td className="border px-4 py-2">{r.date}</td>
                <td className="border px-4 py-2">{r.time}</td>
                <td className="border px-4 py-2">{r.procedure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={() => alert("Export to PDF functionality will be added here.")}
          className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Export Report as PDF
        </button>
      </div>
    </div>
  );
}
