import React from "react";
import Sidebar from "./Sidebar";
import { FaUserInjured, FaUserMd, FaCalendarCheck } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <main className="flex-1 p-8 bg-gradient-to-br from-gray-50 to-gray-200">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-800">🏥 Hospital Dashboard</h1>
          <p className="text-gray-600 mt-1 text-lg">Manage everything in one place</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-blue-700">Total Patients</h3>
                <p className="text-3xl font-bold mt-2 text-gray-700">124</p>
              </div>
              <FaUserInjured className="text-blue-500 text-5xl" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-green-700">Total Doctors</h3>
                <p className="text-3xl font-bold mt-2 text-gray-700">16</p>
              </div>
              <FaUserMd className="text-green-500 text-5xl" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-purple-700">Appointments Today</h3>
                <p className="text-3xl font-bold mt-2 text-gray-700">34</p>
              </div>
              <FaCalendarCheck className="text-purple-500 text-5xl" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
