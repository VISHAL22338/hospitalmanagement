import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Patient from "./pages/Patients";
import Doctors from "./pages/Doctor";
import Appointment from "./pages/Appointment";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Patients" element={<Patient />} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Appointments" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
