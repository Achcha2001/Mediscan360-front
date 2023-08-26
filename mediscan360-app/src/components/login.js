// Login.js

import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle login, e.g., sending login credentials to a server
    console.log('Submitted:', email, password);
  };

  return (
    <div className="login-container">
        {/* <div className="background-image"> */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button  className='loginbut' type="submit">Login</button>
      </form>
      {/* </div> */}
    </div>
  );
};

export default Login;
