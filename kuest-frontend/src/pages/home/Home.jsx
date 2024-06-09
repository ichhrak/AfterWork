// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <p>Please log in to access your account:</p>
      <Link to="/login" className="login-link">Login</Link>
    </div>
  );
}

export default Home;
