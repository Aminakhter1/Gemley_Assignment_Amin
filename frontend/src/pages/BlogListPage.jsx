// File: src/pages/BlogListPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../utils/api';

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    API.get('/blogs').then(res => setBlogs(res.data));
  }, []);

  return (
    <div className="container mt-5">
      <h3 style={{ backgroundColor: "purple", color: "white", padding: "15px", borderRadius: "5px" }}>All Blogs</h3>
      <div className="row">
        {blogs.map(blog => (
          <div key={blog._id} className="border rounded p-3 my-2 col-md-4">
            <h4 style={{backgroundColor:"purple",padding:"5px",borderRadius:"5px 5px 5px 5px"}}>{blog.title}</h4>
            <p><strong>Category:</strong> {blog.category}</p>
            <p>{blog.content.length > 30 ? `${blog.content.substring(0, 30)}...` : blog.content}</p>
            <Link to={`/blogs/${blog._id}`}>Read More</Link>
            <p><strong>Posted on:</strong> {new Date(blog.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
