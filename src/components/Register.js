import React, { useState } from 'react';

import './register.css'; 

export default function Register({ setPage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(username)) {
      setError('Invalid email format');
      return;
    }

    createUserWithEmailAndPassword(auth, username, password)
      .then(() => {
        setPage('login');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="register-container">
      <video autoPlay loop muted className="video-background">
        <source src="/assets/5561389-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="register-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="register-input"
        />
        <button type="submit" className="register-button">Register</button>
        <button type="button" onClick={() => setPage('login')} className="back-to-login-button">Back to Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

