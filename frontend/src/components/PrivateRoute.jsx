// src/components/PrivateRoute.jsx
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, role }) {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  // If token is missing or role doesn't match, redirect to login page
  if (!token || userRole !== role) {
    return <Navigate to="/login" />;
  }

  return children; // Otherwise, render the children (protected route)
}
