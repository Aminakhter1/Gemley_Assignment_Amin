
// src/App.jsx
import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import Dashboard from './pages/admin/Dashboard';
import AddEditBlog from './pages/admin/AddEditBlog';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BlogListPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/blogs/:id" element={<BlogDetailPage />} />
        <Route path="/admin" element={<PrivateRoute role="admin"><Dashboard /></PrivateRoute>} />
        <Route path="/admin/blogs/new" element={<PrivateRoute role="admin"><AddEditBlog /></PrivateRoute>} />
        <Route path="/admin/blogs/edit/:id" element={<PrivateRoute role="admin"><AddEditBlog /></PrivateRoute>} />
      </Routes>
    </>
  );
}

export default App;
