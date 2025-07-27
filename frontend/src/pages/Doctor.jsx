import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    experience: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.specialization &&
      formData.experience &&
      formData.contact
    ) {
      setDoctors([...doctors, formData]);
      setFormData({
        name: "",
        specialization: "",
        experience: "",
        contact: "",
      });
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4 text-green-700">Doctor Management</h1>

        {/* Doctor Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow-md mb-6"
        >
          <h2 className="text-xl font-semibold mb-4">Add New Doctor</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              className="border p-2 rounded"
              name="name"
              placeholder="Doctor Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="border p-2 rounded"
              name="specialization"
              placeholder="Specialization"
              value={formData.specialization}
              onChange={handleChange}
              required
            />
            <input
              className="border p-2 rounded"
              name="experience"
              placeholder="Experience (in years)"
              type="number"
              value={formData.experience}
              onChange={handleChange}
              required
            />
            <input
              className="border p-2 rounded"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white mt-4 py-2 px-4 rounded"
          >
            Add Doctor
          </button>
        </form>

        {/* Doctor List */}
        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Doctor List</h2>
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Specialization</th>
                <th className="p-2 border">Experience</th>
                <th className="p-2 border">Contact</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map((doc, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border">{doc.name}</td>
                  <td className="p-2 border">{doc.specialization}</td>
                  <td className="p-2 border">{doc.experience} years</td>
                  <td className="p-2 border">{doc.contact}</td>
                </tr>
              ))}
              {doctors.length === 0 && (
                <tr>
                  <td colSpan="4" className="p-4 text-gray-500 text-center">
                    No doctors added yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Doctor;
