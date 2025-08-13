import React from "react";

export default function LaboratoryDiagnostic() {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg mt-6 border border-blue-200">
      <h2 className="text-2xl font-bold text-blue-800 mb-6 border-b pb-2">
        🧪 Laboratory Diagnostic
      </h2>

      {/* Patient Info */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md mb-6">
        <h3 className="text-lg font-semibold text-blue-700 mb-4">
          👤 Patient Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Surname"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Middle Name"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="First Name"
            className="border p-2 rounded w-full"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="border p-2 rounded w-full"
          />
          <select className="border p-2 rounded w-full">
            <option>Civil Status</option>
            <option>Single</option>
            <option>Married</option>
            <option>Widowed</option>
            <option>Divorced</option>
          </select>
          <input
            type="text"
            placeholder="Address"
            className="border p-2 rounded w-full col-span-1 md:col-span-3"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CBC */}
        <div className="bg-red-50 border border-red-300 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-red-700 mb-3">
            🩸 Complete Blood Count
          </h3>
          {[
            ["Hgb Male", "120-150 g/L"],
            ["Hgb Female", "110-140 g/L"],
            ["Hct Male", "0.40-0.54%"],
            ["Hct Female", "0.36-0.47%"],
            ["RBC", "4.5-6.0 x10^12/L"],
            ["RBC Female", "4.5-5.0 x10^12/L"],
            ["WBC", "5-10 x10^9/L"],
            ["Seg", "0.50-0.65"],
            ["Lympho", "0.20-0.40"],
            ["Mixed", "0.01-0.13"],
            ["Mono", "0-0.05"],
            ["Stab", "0-0.04"],
            ["Eo", "0-0.04"],
            ["Baso", "0-0.01"],
            ["Total Diff Count", "0"],
            ["Plt", "150-400 x10^9/L"]
          ].map(([label, ref]) => (
            <div key={label} className="mb-2">
              <label className="text-sm font-medium">{label}</label>
              <div className="flex items-center gap-2">
                <input type="text" className="border rounded p-1 w-1/2" />
                <span className="text-xs text-gray-500">{ref}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Urinalysis */}
        <div className="bg-green-50 border border-green-300 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-green-700 mb-3">
            💧 Urinalysis
          </h3>
          {[
            ["Color", ["Yellow", "Amber", "Light Yellow"]],
            ["Transparency", ["Clear", "Cloudy"]],
            ["SG", ["1.005", "1.010", "1.015", "1.020"]],
            ["pH", ["5", "6", "7", "8"]],
            ["Albumin", ["Negative", "Positive"]],
            ["Sugar", ["Negative", "Positive"]],
            ["Bacteria", ["None", "Few", "Many"]],
            ["Epithelial Cells", ["None", "Few", "Many"]],
            ["Mucus Threads", ["None", "Few", "Many"]]
          ].map(([label, options]) => (
            <div key={label} className="mb-2">
              <label className="text-sm font-medium">{label}</label>
              <select className="border rounded p-1 w-full">
                {options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

          {[
            "Pus",
            "Red Cells",
            "Casts",
            "Crystals",
            "Other Findings",
            "Comments"
          ].map((field) => (
            <div key={field} className="mb-2">
              <label className="text-sm font-medium">{field}</label>
              <input type="text" className="border rounded p-1 w-full" />
            </div>
          ))}
        </div>

        {/* Fecalysis */}
        <div>
          <div className="bg-purple-50 border border-purple-300 p-4 rounded-md mb-4">
            <h3 className="text-lg font-semibold text-purple-700 mb-3">
              💩 Fecalysis
            </h3>
            <div className="mb-3">
              <label className="text-sm font-medium">Color/Consistency:</label>
              <input type="text" className="border p-1 rounded w-full" />
            </div>
            <div className="mb-3">
              <label className="text-sm font-medium">Parasites:</label>
              <input
                type="text"
                className="border p-1 rounded w-full"
                placeholder="Type here or select"
              />
            </div>
          </div>

          {/* Ancillary */}
          <div className="bg-yellow-50 border border-yellow-300 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-yellow-700 mb-3">
              🧾 Ancillary Tests
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                ["HbsAg", ["Positive", "Negative"]],
                ["Anti Hbs", ["Positive", "Negative"]],
                ["VDRL", ["Reactive", "Non-Reactive"]]
              ].map(([label, options]) => (
                <div key={label} className="mb-2">
                  <label className="text-sm font-medium">{label}</label>
                  <select className="border rounded p-1 w-full">
                    {options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}

              {[
                "T3T4",
                "Pap's Smear",
                "Widal",
                "Prothrombin",
                "Blood Type",
                "Others",
                "Others Result"
              ].map((field) => (
                <div key={field}>
                  <label className="text-sm font-medium">{field}:</label>
                  <input type="text" className="border rounded p-1 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Generate Result Button */}
      <div className="mt-8 text-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Generate Result
        </button>
      </div>
    </div>
  );
}
