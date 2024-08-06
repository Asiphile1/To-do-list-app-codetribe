import React, { useState } from 'react';
import { registerUser } from '../services/auth';
import { useNavigate } from 'react-router-dom'; 
import { TextField, Button, Container, Typography } from '@mui/material';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      registerUser(username, password);
      navigate('/login'); 
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField label="Username" fullWidth value={username} onChange={(e) => setUsername(e.target.value)} />
        <TextField type="password" label="Password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" variant="contained" color="primary">Register</Button>
      </form>
    </Container>
  );
};

export default Registration;
