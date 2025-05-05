import React, { useState } from 'react';
import LoginForm from '../components/Account/LoginForm';
import SignUpForm from '../components/Account/SignUpForm';

const AccountPage = () => {
  const [mode, setMode] = useState(null); // 'login' | 'signup' | null

  return (
    <div className="account-page">
      <h1>Account</h1>
      <p>Log in to manage your account settings and preferences. Or sign up to get started with Mystic Campers.</p>
      {!mode ? (
        <div className="cta-group">
          <button className="primary-button" onClick={() => setMode('login')}>
            Log In
          </button>
          <button className="primary-button" onClick={() => setMode('signup')}>
            Sign Up
          </button>
        </div>
      ) : mode === 'login' ? (
        <div className="form-wrapper">
          <LoginForm onLogin={(creds) => console.log('Logging in:', creds)} />
          <p>
            Need to{' '}
            <span onClick={() => setMode('signup')} className="toggle-link">
              sign up
            </span>
            ?
          </p>
        </div>
      ) : (
        <div className="form-wrapper">
          <SignUpForm onSignUp={(data) => console.log('Signing up:', data)} />
          <p>
            Already have an account?{' '}
            <span onClick={() => setMode('login')} className="toggle-link">
              Log in
            </span>
            .
          </p>
        </div>
      )}
    </div>
  );
};

export default AccountPage;