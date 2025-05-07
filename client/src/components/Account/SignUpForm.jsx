import axios from "axios";
import React, { useState } from 'react';
import "./AuthForms.css"; 
import "../../App.css";

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/signup", {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        setMessage("Account created successfully!");
        setUsername("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage("Failed to create account");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-wrapper">
      <h2>Sign Up</h2>
      {message && <p>{message}</p>}

      <label>
        Username
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignUpForm;
