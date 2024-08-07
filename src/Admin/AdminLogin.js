import React, { useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add authentication logic here
    if (username === 'admin' && password === 'password') {
      navigate('/dash');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className='gaint'>
    <div className='admin-login-container'>
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='login-btn'>
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default AdminLogin;
