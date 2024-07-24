import React, { useState } from "react";

export default function Login({ setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    setPage("home");
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
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
      <button type="submit">Login</button>
      <button type="button" onClick={() => setPage("register")}>Register</button>
    </form>
  );
}










































// import React, { useState } from 'react';

// function Login({ setCurrentPage, setUser }) {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     // Dummy login validation
//     if (username === 'user' && password === 'password') {
//       setUser({ username });
//       setCurrentPage('home');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
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
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={() => setCurrentPage('register')}>Register</button>
//     </div>
//   );
// }

// export default Login;
