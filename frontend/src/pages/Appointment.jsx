import React, { useState } from "react";
import Sidebar from "./Sidebar";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [formData, setFormData] = useState({
    patientName: "",
    doctorName: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, formData]);
    setFormData({
      patientName: "",
      doctorName: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 text-purple-700">Appointments</h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Book New Appointment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="patientName"
              placeholder="Patient Name"
              value={formData.patientName}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="doctorName"
              placeholder="Doctor Name"
              value={formData.doctorName}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded"
          >
            Add Appointment
          </button>
        </form>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Appointment List</h2>
          <table className="w-full border">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border">Patient</th>
                <th className="p-2 border">Doctor</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Time</th>
              </tr>
            </thead>
            <tbody>
              {appointments.length > 0 ? (
                appointments.map((app, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-2 border">{app.patientName}</td>
                    <td className="p-2 border">{app.doctorName}</td>
                    <td className="p-2 border">{app.date}</td>
                    <td className="p-2 border">{app.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="p-4 text-gray-500 text-center">
                    No appointments scheduled yet.
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

export default Appointment;
