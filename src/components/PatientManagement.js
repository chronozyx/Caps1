import React, { useState } from "react";

const PatientManagement = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "Juan Dela Cruz", age: 30, gender: "Male", diagnosis: "Fever" },
    { id: 2, name: "Maria Santos", age: 25, gender: "Female", diagnosis: "Check-up" }
  ]);

  const [form, setForm] = useState({ name: "", age: "", gender: "", diagnosis: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddPatient = () => {
    const newPatient = {
      id: patients.length + 1,
      ...form
    };
    setPatients([...patients, newPatient]);
    setForm({ name: "", age: "", gender: "", diagnosis: "" });
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b pb-2 border-blue-300">
        🏥 Patient Management
      </h2>

      {/* Encode New Patient */}
      <div className="bg-white shadow-xl rounded-xl p-6 mb-8 border border-blue-100">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          ➕ Encode New Patient
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-blue-300 focus:ring-2 focus:ring-blue-200 p-2 rounded-lg"
          />
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Age"
            type="number"
            className="border border-blue-300 focus:ring-2 focus:ring-blue-200 p-2 rounded-lg"
          />
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="border border-blue-300 focus:ring-2 focus:ring-blue-200 p-2 rounded-lg"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            name="diagnosis"
            value={form.diagnosis}
            onChange={handleChange}
            placeholder="Diagnosis/Reason"
            className="border border-blue-300 focus:ring-2 focus:ring-blue-200 p-2 rounded-lg"
          />
        </div>
        <button
          onClick={handleAddPatient}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
        >
          Add Patient
        </button>
      </div>

      {/* View Patients */}
      <div className="bg-white shadow-lg rounded-xl p-6 border border-blue-100">
        <h3 className="text-xl font-semibold text-blue-700 mb-4">
          📋 Patient List
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-200 rounded">
            <thead>
              <tr className="bg-blue-100 text-blue-800">
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Age</th>
                <th className="p-3 text-left">Gender</th>
                <th className="p-3 text-left">Diagnosis</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr
                  key={patient.id}
                  className="border-t border-blue-100 hover:bg-blue-50"
                >
                  <td className="p-3">{patient.id}</td>
                  <td className="p-3">{patient.name}</td>
                  <td className="p-3">{patient.age}</td>
                  <td className="p-3">{patient.gender}</td>
                  <td className="p-3">{patient.diagnosis}</td>
                </tr>
              ))}
              {patients.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-3 text-center text-gray-500">
                    No patient records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PatientManagement;



