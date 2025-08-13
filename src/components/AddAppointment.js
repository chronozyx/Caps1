import React, { useState } from "react";

export default function AddAppointment() {
  const [formData, setFormData] = useState({
    surname: "",
    middleName: "",
    firstName: "",
    dob: "",
    contactNumber: "",
    civilStatus: "",
    address: "",
    reason: "",
    doctor: "",
    timeSlot: "",
    date: "",
  });

  const doctorAvailability = {
    "Dr. Santos": ["9:00 AM", "10:00 AM", "2:00 PM"],
    "Dr. Reyes": ["11:00 AM", "1:00 PM", "4:00 PM"],
    "Dr. Cruz": ["10:30 AM", "12:30 PM", "3:00 PM"],
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment request submitted!");
    // You can send `formData` to your backend or Firebase here
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">🩺 Add Appointment</h2>

      {/* Doctor Availability */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Doctor Availability</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(doctorAvailability).map(([doctor, times]) => (
            <div key={doctor} className="p-4 border border-blue-100 rounded bg-blue-50">
              <h4 className="font-bold text-blue-800">{doctor}</h4>
              <ul className="mt-1 list-disc ml-5 text-sm text-blue-900">
                {times.map((time, idx) => (
                  <li key={idx}>{time}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Patient Fill-up Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Civil Status</label>
            <select
              name="civilStatus"
              value={formData.civilStatus}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">-- Select --</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Separated">Separated</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="2"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Symptoms / Reason for Visit</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            rows="3"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Select Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">-- Choose Doctor --</option>
              {Object.keys(doctorAvailability).map((doctor) => (
                <option key={doctor} value={doctor}>
                  {doctor}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block font-medium">Preferred Time Slot</label>
            <select
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            >
              <option value="">-- Choose Time --</option>
              {formData.doctor &&
                doctorAvailability[formData.doctor].map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block font-medium">Preferred Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Appointment
        </button>
      </form>
    </div>
  );
}
