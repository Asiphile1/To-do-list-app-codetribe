import React, { useState } from 'react';
import { loginUser } from '../services/auth';
import { useNavigate } from 'react-router-dom'; // Updated import
import { TextField, Button, Container, Typography } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Updated hook

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      loginUser(username, password);
      navigate('/'); // Updated method
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField type="password" label="Password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </form>
    </Container>
  );
};

export default Login;
