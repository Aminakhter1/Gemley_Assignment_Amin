import React, { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await API.post('/auth/signup', { username, password, role });
      alert('Signup successful. Please login.');
      navigate('/login');
    } catch (err) {
      alert('Signup failed');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="border rounded p-5 shadow w-100" style={{ maxWidth: '400px' }}>
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSignup}>
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
          <select 
            className="form-control my-2" 
            value={role} 
            onChange={e => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
          <button className="btn btn-primary w-100">Signup</button>
        </form>
      </div>
    </div>
  );
}
