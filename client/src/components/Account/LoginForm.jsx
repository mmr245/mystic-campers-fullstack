import React, { useState } from 'react';
import './AuthForms.css';
import '../../App.css';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Pass the entered credentials back up to the parent
    onLogin({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <h2>Log In</h2>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LoginForm;