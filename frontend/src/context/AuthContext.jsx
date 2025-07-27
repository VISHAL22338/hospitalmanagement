import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(); 

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage/token
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token }); // You can replace this with decoded user later
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
