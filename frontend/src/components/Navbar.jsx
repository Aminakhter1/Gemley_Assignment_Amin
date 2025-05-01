import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { role, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 py-2 shadow-sm">
      <Link className="navbar-brand fw-bold" to="/">BlogCMS</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav align-items-center gap-2">
          {!role ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Register</Link>
              </li>
            </>
          ) : (
            <>
              {role === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Dashboard</Link>
                </li>
              )}
              <li className="nav-item d-flex align-items-center text-light">
                <span className="ms-1 me-2 text-capitalize">{role}</span>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-sm btn-outline-light mt-2 mt-lg-0"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
