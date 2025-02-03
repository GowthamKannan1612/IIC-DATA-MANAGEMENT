import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling
import logo from './assets/logo.png'; // Adjusted to direct image import

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Redirecting to home...");
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back!</h1>
        <img
          src={logo} 
          alt="Logo"
          className="logo"
        />
        <div className="info-portal">
          <h3>IIC Information Portal</h3>
        </div>
        <button className="login-button" onClick={handleLogin}>
          Google Sign In
        </button>
        <p>Sign in with your BIT account</p>
      </div>
    </div>
  );
};

export default Login;
