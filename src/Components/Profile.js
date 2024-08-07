// src/Components/Profile.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Pie, Bar } from 'react-chartjs-2';
import './Profile.css';
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale
} from 'chart.js';

// Register Chart.js components
Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  RadialLinearScale
);


const Profile = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    username: 'johndoe',
  });
  const [passwordDetails, setPasswordDetails] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleEditProfile = () => {
    // Handle profile update logic
    console.log('Profile updated:', profileDetails);
    setIsEditingProfile(false);
  };

  const handleChangePassword = () => {
    // Handle password change logic
    console.log('Password changed:', passwordDetails);
    setIsChangingPassword(false);
  };

  // Data for charts
  const pieData = {
    labels: ['Completed', 'In Progress', 'Not Started'],
    datasets: [
      {
        data: [10, 5, 2],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  const barData = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    datasets: [
      {
        label: 'Courses Completed',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.4)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <h2>Your Profile</h2>
        <div className="profile-card">
          <div className="profile-avatar">
            <FontAwesomeIcon icon={faUserCircle} size="6x" />
          </div>
          <div className="profile-details">
            <h3>{profileDetails.name}</h3>
            <p>Email: {profileDetails.email}</p>
            <p>Username: {profileDetails.username}</p>
          </div>
        </div>

        <div className="profile-section">
          <h3>Enrolled Courses</h3>
          <ul>
            <li>Course 1</li>
            <li>Course 2</li>
            <li>Course 3</li>
          </ul>
        </div>

        <div className="profile-section">
          <h3>Settings</h3>
          <button className="profile-btn" onClick={() => setIsChangingPassword(true)}>
            Change Password
          </button>
          <button className="profile-btn" onClick={() => setIsEditingProfile(true)}>
            Edit Profile
          </button>
          <button className="profile-btn">Logout</button>
        </div>

        {isEditingProfile && (
          <div className="modal">
            <h3>Edit Profile</h3>
            <input
              type="text"
              name="name"
              value={profileDetails.name}
              onChange={handleProfileChange}
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              value={profileDetails.email}
              onChange={handleProfileChange}
              placeholder="Email"
            />
            <input
              type="text"
              name="username"
              value={profileDetails.username}
              onChange={handleProfileChange}
              placeholder="Username"
            />
            <button className="profile-btn" onClick={handleEditProfile}>
              Save Changes
            </button>
            <button className="profile-btn" onClick={() => setIsEditingProfile(false)}>
              Cancel
            </button>
          </div>
        )}

        {isChangingPassword && (
          <div className="modal">
            <h3>Change Password</h3>
            <input
              type="password"
              name="currentPassword"
              value={passwordDetails.currentPassword}
              onChange={handlePasswordChange}
              placeholder="Current Password"
            />
            <input
              type="password"
              name="newPassword"
              value={passwordDetails.newPassword}
              onChange={handlePasswordChange}
              placeholder="New Password"
            />
            <input
              type="password"
              name="confirmNewPassword"
              value={passwordDetails.confirmNewPassword}
              onChange={handlePasswordChange}
              placeholder="Confirm New Password"
            />
            <button className="profile-btn" onClick={handleChangePassword}>
              Save Changes
            </button>
            <button className="profile-btn" onClick={() => setIsChangingPassword(false)}>
              Cancel
            </button>
          </div>
        )}
      </div>

      <div className="profile-right">
        <h3>Course Progress</h3>
        <div className="chart-container">
          <Pie data={pieData} />
        </div>
        <div className="chart-container">
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
