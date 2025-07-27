import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Patient = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPatients([...patients, formData]);
    setFormData({
      name: "",
      age: "",
      gender: "",
      contact: "",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Patient Page</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Add Patient</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              type="text"
              name="contact"
              placeholder="Contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
          >
            Add Patient
          </button>
        </form>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Patient List</h2>
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Age</th>
                <th className="p-2 border">Gender</th>
                <th className="p-2 border">Contact</th>
              </tr>
            </thead>
            <tbody>
              {patients.length > 0 ? (
                patients.map((patient, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-2 border">{patient.name}</td>
                    <td className="p-2 border">{patient.age}</td>
                    <td className="p-2 border">{patient.gender}</td>
                    <td className="p-2 border">{patient.contact}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="p-4 text-gray-500 text-center"
                  >
                    No patients added yet.
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

export default Patient;
