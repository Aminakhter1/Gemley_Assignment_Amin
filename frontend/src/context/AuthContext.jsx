
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [role, setRole] = useState(localStorage.getItem('role') || null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  const login = (newRole) => {
    localStorage.setItem('role', newRole);
    setRole(newRole);
  };

  const logout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
