import React, { useState } from "react";

export default function Register({ setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    setPage("login");
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Register</button>
      <button type="button" onClick={() => setPage("login")}>Back to Login</button>
    </form>
  );
}



































// import React, { useState } from 'react';

// function Register({ setCurrentPage }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = () => {
//     // Dummy registration logic
//     alert(`User ${username} registered!`);
//     setCurrentPage('login');
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleRegister}>Register</button>
//       <button onClick={() => setCurrentPage('login')}>Back to Login</button>
//     </div>
//   );
// }

// export default Register;
