import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src="../images/logo.png" alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li className="nav-link"><a href='/'>Home</a></li>
        <li className="nav-link">Dosage Calculation</li>
        <li className="dropdown">
          <div className="nav-link">Allergies</div>
          <div className="dropdown-content">
            <div className="dropdown-item">Food Allergies</div>
            <div className="dropdown-item">Historical Allergies</div>
          </div>
        </li>
        <li className="nav-link"><a href='/contact'>Contact</a></li>
        <li className="nav-link"><a href='/aboutus'>About</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="login-button"><a href='/login'> Login</a></button>
        <button className="signup-button"> <a href='/signup'>Signup</a></button>
      </div>
    </div>
  );
};

export default Navbar;
