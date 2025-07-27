import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes"; // your routes setup
import { AuthProvider } from "./context/AuthContext"; // ✅ import AuthProvider
import "./styles/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> {/* ✅ This is required */}
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>
);
