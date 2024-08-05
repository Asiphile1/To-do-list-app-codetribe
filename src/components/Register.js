import React, { useState } from 'react';
<<<<<<< HEAD
import './register.css';
import { addUser } from '../database';
=======
import axios from 'axios';
import './register.css';
>>>>>>> 1b31acaf9232b46aafa7456b81183f5cc25ef0be

export default function Register({ setPage, db }) {
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
<<<<<<< HEAD
      await addUser(db, username, password);
      setPage('login');
=======
      const response = await axios.post('http://localhost:3000/users', { username, password });
      if (response.status === 201) {
        setPage('login');
      } else {
        setError('Failed to register');
      }
>>>>>>> 1b31acaf9232b46aafa7456b81183f5cc25ef0be
    } catch (error) {
      setError('Failed to register');
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="register-container">
      <video autoPlay loop muted className="video-background">
        <source src="/public/assets/5561389-uhd_3840_2160_25fps.mp4" type="video/mp4" />
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
        <button type="button" onClick={() => setPage('login')} className="login-button">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}
<<<<<<< HEAD

























// import React, { useState } from 'react';
// import axios from 'axios';
// import './register.css';

// export default function Register({ setPage }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateEmail(username)) {
//       setError('Invalid email format');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:3000/users', { username, password });
//       if (response.status === 201) {
//         setPage('login');
//       } else {
//         setError('Failed to register');
//       }
//     } catch (error) {
//       setError('Failed to register');
//       console.error('Error registering user:', error);
//     }
//   };

//   return (
//     <div className="register-container">
//       <video autoPlay loop muted className="video-background">
//         <source src="/public/assets/5561389-uhd_3840_2160_25fps.mp4" type="video/mp4" />
//       </video>
//       <form onSubmit={handleSubmit} className="register-form">
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           placeholder="Username"
//           className="register-input"
//         />
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           placeholder="Password"
//           className="register-input"
//         />
//         <button type="submit" className="register-button">Register</button>
//         <button type="button" onClick={() => setPage('login')} className="back-to-login-button">Back to Login</button>
//         {error && <p className="error-message">{error}</p>}
//       </form>
//     </div>
//   );
// }
=======
>>>>>>> 1b31acaf9232b46aafa7456b81183f5cc25ef0be
