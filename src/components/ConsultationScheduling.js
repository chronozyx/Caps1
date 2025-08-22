import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function ConsultationScheduling() {
  const [patientName, setPatientName] = useState("");
  const [doctorSpecialist, setDoctorSpecialist] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const doctorSchedules = [
    {
      name: "Dr. Santos",
      specialty: "Pediatrics",
      schedule: {
        Monday: ["10:00", "10:30", "11:00", "11:30"],
        Wednesday: ["11:00", "11:30", "12:00", "12:30"],
        Friday: ["10:00", "10:30", "11:00", "11:30"]
      }
    },
    {
      name: "Dr. Garcia",
      specialty: "Dermatology",
      schedule: {
        Tuesday: ["09:00", "09:30", "10:00"],
        Thursday: ["09:00", "09:30", "10:00"],
        Saturday: ["09:00", "09:30", "10:00"]
      }
    },
    {
      name: "Dr. Reyes",
      specialty: "Internal Medicine",
      schedule: {
        Monday: ["13:00", "13:30", "14:00"],
        Wednesday: ["13:00", "13:30", "14:00"],
        Friday: ["13:00", "13:30", "14:00"]
      }
    }
  ];

  const uniqueSpecialties = [...new Set(doctorSchedules.map(doc => doc.specialty))];
  const filteredDoctors = doctorSchedules.filter(doc => doc.specialty === doctorSpecialist);
  const selectedDoctor = doctorSchedules.find(doc => doc.name === doctorName);

  const getDayOfWeek = (dateString) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = new Date(dateString).getDay();
    return days[dayIndex];
  };

  const availableTimes = selectedDoctor && date
    ? selectedDoctor.schedule[getDayOfWeek(date)] || []
    : [];

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-green-200">
      <div className="flex items-center gap-4 mb-6">
        <img
          src={logo}
          alt="St. James Clinic Logo"
          className="w-12 h-12 rounded-full border-2 border-green-300"
        />
        <h2 className="text-2xl font-bold text-green-800">Consultation Scheduling</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium text-green-700">Patient Name:</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="w-full p-2 border border-green-300 rounded"
            placeholder="Enter patient name"
          />
        </div>

        <div>
          <label className="block font-medium text-green-700">Doctor Specialist:</label>
          <select
            value={doctorSpecialist}
            onChange={(e) => {
              setDoctorSpecialist(e.target.value);
              setDoctorName("");
              setTime("");
            }}
            className="w-full p-2 border border-green-300 rounded"
          >
            <option value="">Select a specialist</option>
            {uniqueSpecialties.map((specialty, idx) => (
              <option key={idx} value={specialty}>{specialty}</option>
            ))}
          </select>
        </div>

        {doctorSpecialist && (
          <div>
            <label className="block font-medium text-green-700">Doctor Name:</label>
            <select
              value={doctorName}
              onChange={(e) => {
                setDoctorName(e.target.value);
                setTime("");
              }}
              className="w-full p-2 border border-green-300 rounded"
            >
              <option value="">Select a doctor</option>
              {filteredDoctors.map((doc, idx) => (
                <option key={idx} value={doc.name}>{doc.name}</option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label className="block font-medium text-green-700">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setTime("");
            }}
            className="w-full p-2 border border-green-300 rounded"
          />
        </div>

        {doctorName && date && (
          <div>
            <label className="block font-medium text-green-700">Time:</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border border-green-300 rounded"
            >
              <option value="">Select time</option>
              {availableTimes.length > 0 ? (
                availableTimes.map((t, idx) => (
                  <option key={idx} value={t}>{t}</option>
                ))
              ) : (
                <option disabled>No available time</option>
              )}
            </select>
          </div>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-green-700">Doctor's Available Schedules</h3>
        <div className="space-y-4">
          {doctorSchedules.map((doc, index) => (
            <div key={index} className="p-4 border border-green-200 rounded bg-green-50">
              <h4 className="font-bold text-md text-green-800">{doc.name}</h4>
              <p className="text-sm text-green-700">Specialty: {doc.specialty}</p>
              <ul className="list-disc list-inside mt-2">
                {Object.entries(doc.schedule).map(([day, times], i) => (
                  <li key={i} className="text-sm text-green-700">
                    {day}: {times.join(", ")}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}