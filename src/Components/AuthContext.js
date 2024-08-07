// src/contexts/AuthContext.js
import React, { createContext, useState, useContext } from 'react';

// Create a context with default value
const AuthContext = createContext();

// AuthProvider component to provide authentication context
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Login function to set user data
  const login = (userData) => {
    setUser(userData);
  };

  // Logout function to clear user data
  const logout = () => {
    setUser(null);
  };

  // Check if user is authenticated
  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider, useAuth };
