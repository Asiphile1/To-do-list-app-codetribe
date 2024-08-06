import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Home from './components/Home';
import PrivateRoute from './PrivateRoute';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <video autoPlay loop muted id="background-video">
          <source src="/background.mp4" type="video/mp4" />
        </video>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
