
import React, { useState, useContext } from 'react';
import API from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { username, password });
      localStorage.setItem('token', res.data.token); // token still stored here
      login(res.data.role); // update context
      navigate(res.data.role === 'admin' ? '/admin' : '/');
    } catch {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border rounded p-5 shadow w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <input 
            className="form-control my-2" 
            placeholder="Username" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
          />
          <input 
            type="password" 
            className="form-control my-2" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
          <button className="btn btn-primary w-100">Login</button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
}
