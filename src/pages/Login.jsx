import React, { useState } from 'react';
import { message } from 'antd';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Check credentials
    if (username === 'admin' && password === '123456') {
      setIsAuthenticated(true);
      message.success('Login successful!');
    } else {
      message.error('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded w-full p-2 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border rounded w-full p-2 mb-4"
        />
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white rounded w-full py-2"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
