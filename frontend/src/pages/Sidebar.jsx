import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-800 text-white p-6 space-y-6 min-h-screen">
      <h1 className="text-2xl font-bold">🏥 HMS</h1>
      <nav className="flex flex-col gap-4 text-lg">
        <Link to="/Dashboard" className="hover:bg-blue-700 p-2 rounded">Dashboard</Link>
        <Link to="/Patients" className="hover:bg-blue-700 p-2 rounded">Patients</Link>
        <Link to="/Doctors" className="hover:bg-blue-700 p-2 rounded">Doctors</Link>
        <Link to="/Appointments" className="hover:bg-blue-700 p-2 rounded">Appointments</Link>
        <Link to="/" className="hover:bg-blue-700 p-2 rounded">Logout</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
