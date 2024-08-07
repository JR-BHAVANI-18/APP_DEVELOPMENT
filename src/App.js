// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignupForm from './Components/Signup';
import Dashboard from './Components/Dashboard';
import Courses from './Components/Courses';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import CourseDetails from './Components/CourseDetails';
import { AuthProvider, useAuth } from './Components/AuthContext';
import AdminLogin from './Admin/AdminLogin';
import AdminDashboard from './Admin/AdminDashboard';
import AdminSettings from './Admin/Admins';
import Assessment from './Admin/Assessment';
import Leaderboard from './Admin/Leaderboard';
import Footer from './Components/Footer'; // Import the Footer component

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route path="/dash" element={<AdminDashboard/>} />
            <Route path="/settings" element={<AdminSettings />} />
            <Route path="/assessment" element={<Assessment/>} />
            <Route path="/leaderboard" element={<Leaderboard/>}/>
            <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/courses" element={<PrivateRoute><Courses /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/setting" element={<PrivateRoute><Settings /></PrivateRoute>} />
            <Route path="/courses/:courseId" element={<PrivateRoute><CourseDetails /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
          <ConditionalFooter />
        </div>
      </Router>
    </AuthProvider>
  );
}

// PrivateRoute component to protect routes
function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// ConditionalFooter component to render footer based on the route
function ConditionalFooter() {
  const location = useLocation();
  const showFooter = location.pathname === '/Dashboard';
  return showFooter ? <Footer /> : null;
}

export default App;
