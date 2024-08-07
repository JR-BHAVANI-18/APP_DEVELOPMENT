// src/Components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data from local storage or context
    localStorage.removeItem('authToken');
    // Navigate to the login page
    navigate('/login');
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <b><p style={{ textAlign: 'center', fontSize: 30,color:'white' }}>Welcome to the E-Learning Platform</p></b>
        <nav>
          <ul>
            <li><button onClick={() => navigateTo('/courses')}>Courses</button></li>
            <li><button onClick={() => navigateTo('/profile')}>Profile</button></li>
            <li><button onClick={() => navigateTo('/setting')}>Settings</button></li>
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </ul>
        </nav>
      </header>
      <main>
        
      </main>
    </div>
  );
};

export default Dashboard;
