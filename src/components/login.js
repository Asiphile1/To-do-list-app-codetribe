import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

export default function Login({ setPage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(username)) {
      setError('Invalid email format');
      return;
    }

    try {
      const response = await axios.get('http://localhost:5000/users', {
        params: {
          username,
          password,
        },
      });

      const user = response.data.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        setPage('home');
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      setError('Failed to login');
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <video autoPlay loop muted className="video-background">
        <source src="/assets/5561389-uhd_3840_2160_25fps.mp4" type="video/mp4" />
      </video>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="login-input"
        />
        <button type="submit" className="login-button">Login</button>
        <button type="button" onClick={() => setPage('register')} className="register-button">Register</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}



// git init
// git add .
// git commmit -m "removing firebase 31/07/2024"
// git push 
// 'https://github.com/Asiphile1/To-do-list-app-codetribe.git'


// git init
// git add .
// git commmit -m "removing firebase 31/07/2024"
// git branch -M main
// git remote add origin 'https://github.com/Asiphile1/To-do-list-app-codetribe.git'
// git push -u origin main 


// git commit -m "first commit"