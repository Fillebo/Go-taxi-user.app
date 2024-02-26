// Login.js
import React from 'react';
import LoginForm from './LoginForm.js';

function Login() {
  const handleLogin = (username, password) => {
    // Perform login logic here (e.g., send login request to server)
    console.log('Logging in with:', username, password);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default Login;
