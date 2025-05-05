import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const AuthPage = () => {
  const [user, setUser]     = useState(null);
  const [error, setError]   = useState('');
  const [mode, setMode]     = useState('login'); // or 'signup'

  // Simulated API calls
  const handleLogin = creds => {
    fakeApiLogin(creds)
      .then(u => setUser(u))
      .catch(err => setError(err.message));
  };

  const handleSignUp = creds => {
    fakeApiSignUp(creds)
      .then(u => setUser(u))
      .catch(err => setError(err.message));
  };

  if (user) {
    return <p>Welcome back, {user.username || user.email}!</p>;
  }

  return (
    <div>
      <nav>
        <button onClick={() => setMode('login')}>Log In</button>
        <button onClick={() => setMode('signup')}>Sign Up</button>
      </nav>

      {error && <p className="error">{error}</p>}

      {mode === 'login' ? (
        <LoginForm onLogin={handleLogin} />
      ) : (
        <SignUpForm onSignUp={handleSignUp} />
      )}
    </div>
  );
};

export default AuthPage;

// --- Mock API functions ---
function fakeApiLogin({ email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'you@example.com' && password === 'password') {
        resolve({ email, username: 'MysticCamper' });
      } else {
        reject(new Error('Invalid credentials.'));
      }
    }, 500);
  });
}

function fakeApiSignUp({ username, email, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email.includes('@')) {
        resolve({ username, email });
      } else {
        reject(new Error('Enter a valid email.'));
      }
    }, 500);
  });
}
