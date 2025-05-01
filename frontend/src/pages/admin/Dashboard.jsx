
// File: src/pages/admin/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../utils/api';

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get('/blogs').then(res => setBlogs(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await API.delete(`/blogs/${id}`);
      setBlogs(prev => prev.filter(b => b._id !== id));
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2><hr/>
      <Link to="/admin/blogs/new" className="btn btn-success mb-3">Add New Blog</Link>
      <div className="row">
      {blogs.map(blog => (
        <div key={blog._id} className="border p-2 m-2 col-md-4">
          <h5>{blog.title}</h5>
          <Link to={`/admin/blogs/edit/${blog._id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
          <button onClick={() => handleDelete(blog._id)} className="btn btn-danger btn-sm">Delete</button>
        </div>
      ))}
      </div>
    </div>
  );
}
