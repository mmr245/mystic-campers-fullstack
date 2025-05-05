import React, { useState } from 'react';
import './AuthForms.css';
import '../../App.css';

const SignUpForm = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSignUp({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <h2>Sign Up</h2>
      <label>
        Username
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />
      </label>
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
      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignUpForm;
