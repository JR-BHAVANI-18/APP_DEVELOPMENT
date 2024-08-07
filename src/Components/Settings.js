// src/Components/Settings.js
import React, { useState } from 'react';
import './Settings.css';

const Settings = ({ setTheme }) => {
  const [theme, setLocalTheme] = useState(localStorage.getItem('theme') || 'light');
  const [language, setLanguage] = useState('English');
  const [privacy, setPrivacy] = useState({
    profileVisibility: 'Everyone',
    activityStatus: true,
  });

  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setLocalTheme(newTheme);
    setTheme(newTheme);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handlePrivacyChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPrivacy({
      ...privacy,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleAccountAction = (action) => {
    console.log(`Account action: ${action}`);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>

      <div className="settings-section">
        <h3>Theme Settings</h3>
        <div className="form-group">
          <label>
            <input
              type="radio"
              value="light"
              checked={theme === 'light'}
              onChange={handleThemeChange}
            />
            Light Theme
          </label>
          <label>
            <input
              type="radio"
              value="dark"
              checked={theme === 'dark'}
              onChange={handleThemeChange}
            />
            Dark Theme
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h3>Language Settings</h3>
        <div className="form-group">
          <label>
            Preferred Language:
            <select value={language} onChange={handleLanguageChange}>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Chinese">Chinese</option>
            </select>
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h3>Privacy Settings</h3>
        <div className="form-group">
          <label>
            Profile Visibility:
            <select
              name="profileVisibility"
              value={privacy.profileVisibility}
              onChange={handlePrivacyChange}
            >
              <option value="Everyone">Everyone</option>
              <option value="Friends">Friends</option>
              <option value="Only Me">Only Me</option>
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="activityStatus"
              checked={privacy.activityStatus}
              onChange={handlePrivacyChange}
            />
            Show Activity Status
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h3>Account Settings</h3>
        <button
          className="danger-button"
          onClick={() => handleAccountAction('deactivate')}
        >
          Deactivate Account
        </button>
        <button
          className="danger-button"
          onClick={() => handleAccountAction('delete')}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Settings;
