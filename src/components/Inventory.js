import React, { useState, useEffect } from "react";

export default function Inventory() {
  const [tab, setTab] = useState("manage");
  const [supplies, setSupplies] = useState([
    { name: "Syringes", total: 100, used: 30, rejected: 2 },
    { name: "Gloves", total: 200, used: 100, rejected: 5 },
    { name: "Alcohol", total: 150, used: 60, rejected: 1 }
  ]);

  const [newSupply, setNewSupply] = useState({ name: "", stock: 0 });
  const [lowStockAlerts, setLowStockAlerts] = useState([]);

  useEffect(() => {
    const lowStock = supplies.filter(s => currentStock(s) <= 20).map(s => s.name);
    setLowStockAlerts(lowStock);
  }, [supplies]);

  const currentStock = (supply) => supply.total - (supply.used + supply.rejected);

  const handleAddSupply = () => {
    if (!newSupply.name.trim()) return;
    setSupplies([...supplies, {
      name: newSupply.name,
      total: newSupply.stock,
      used: 0,
      rejected: 0
    }]);
    setNewSupply({ name: "", stock: 0 });
  };

  const handleDeleteSupply = (index) => {
    const updated = [...supplies];
    updated.splice(index, 1);
    setSupplies(updated);
  };

  const handleEditUsedRejected = (index, field, value) => {
    const updated = [...supplies];
    updated[index][field] = parseInt(value) || 0;
    setSupplies(updated);
  };

  const handleEditInitialStock = (index, value) => {
    const updated = [...supplies];
    updated[index].total = parseInt(value) || 0;
    setSupplies(updated);
  };

  return (
    <div className="mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-yellow-800">Clinic Inventory Management</h2>
        <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">Export as PDF</button>
      </div>

      {lowStockAlerts.length > 0 && (
        <div className="mb-4 p-4 bg-red-100 text-red-800 rounded">
          <strong>Low Stock Alert:</strong> {lowStockAlerts.join(", ")}
        </div>
      )}

      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setTab("manage")}
          className={`px-4 py-2 rounded font-semibold ${tab === "manage" ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          Manage Clinic Supplies
        </button>
        <button
          onClick={() => setTab("used")}
          className={`px-4 py-2 rounded font-semibold ${tab === "used" ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          Used / Rejected Report
        </button>
        <button
          onClick={() => setTab("inout")}
          className={`px-4 py-2 rounded font-semibold ${tab === "inout" ? "bg-yellow-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
        >
          In / Out Report
        </button>
      </div>

      {tab === "manage" && (
        <div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Supply Name"
              value={newSupply.name}
              onChange={(e) => setNewSupply({ ...newSupply, name: e.target.value })}
              className="border px-2 py-1 mr-2"
            />
            <input
              type="number"
              placeholder="Initial Stock"
              value={newSupply.stock}
              onChange={(e) => setNewSupply({ ...newSupply, stock: parseInt(e.target.value) || 0 })}
              className="border px-2 py-1 mr-2"
            />
            <button
              onClick={handleAddSupply}
              className="bg-yellow-600 text-white px-4 py-1 rounded"
            >
              Add Supply
            </button>
          </div>

          <table className="min-w-full text-sm text-left border border-collapse border-gray-300">
            <thead className="bg-yellow-100 text-yellow-800">
              <tr>
                <th className="border px-4 py-2">Supply Name</th>
                <th className="border px-4 py-2">Initial Stock</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {supplies.map((item, i) => (
                <tr key={i} className="odd:bg-white even:bg-yellow-50">
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      value={item.total}
                      onChange={(e) => handleEditInitialStock(i, e.target.value)}
                      className="w-20 px-1 border"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <button
                      onClick={() => handleDeleteSupply(i)}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "used" && (
        <div>
          <table className="min-w-full text-sm text-left border border-collapse border-gray-300">
            <thead className="bg-yellow-100 text-yellow-800">
              <tr>
                <th className="border px-4 py-2">Supply Name</th>
                <th className="border px-4 py-2">Used</th>
                <th className="border px-4 py-2">Rejected</th>
              </tr>
            </thead>
            <tbody>
              {supplies.map((item, i) => (
                <tr key={i} className="odd:bg-white even:bg-yellow-50">
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      value={item.used}
                      onChange={(e) => handleEditUsedRejected(i, "used", e.target.value)}
                      className="w-20 px-1 border"
                    />
                  </td>
                  <td className="border px-4 py-2">
                    <input
                      type="number"
                      value={item.rejected}
                      onChange={(e) => handleEditUsedRejected(i, "rejected", e.target.value)}
                      className="w-20 px-1 border"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "inout" && (
        <div>
          <table className="min-w-full text-sm text-left border border-collapse border-gray-300">
            <thead className="bg-yellow-100 text-yellow-800">
              <tr>
                <th className="border px-4 py-2">Supply Name</th>
                <th className="border px-4 py-2">Initial Stock</th>
                <th className="border px-4 py-2">Supplies Out</th>
                <th className="border px-4 py-2">Current Stock</th>
              </tr>
            </thead>
            <tbody>
              {supplies.map((item, i) => (
                <tr key={i} className="odd:bg-white even:bg-yellow-50">
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.total}</td>
                  <td className="border px-4 py-2">{item.used + item.rejected}</td>
                  <td className="border px-4 py-2">{currentStock(item)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
