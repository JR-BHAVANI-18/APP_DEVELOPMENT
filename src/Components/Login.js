import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../Components/AuthContext'; 
import './Login.css';
const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter all fields.');
    } else {
      setError('');
      try {
        // Fetch all users from db.json
        const response = await axios.get('http://localhost:3001/signup');
        const users = response.data;

        // Find user with matching email and password
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
          login({ email });
          navigate('/Dashboard'); // Redirect to the courses page
        } else {
          setError('Invalid email or password.');
        }
      } catch (error) {
        setError('An error occurred during login.');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <h2>Login</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{' '}
          <Link to="/signup">Signup</Link>
        </p>
        <p>
        If admin ?{' '}
          <Link to="/adminlogin">Admin</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
