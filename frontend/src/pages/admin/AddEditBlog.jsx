

// File: src/pages/admin/AddEditBlog.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../../utils/api';

export default function AddEditBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      API.get(`/blogs/${id}`).then(res => {
        setTitle(res.data.title);
        setCategory(res.data.category);
        setContent(res.data.content);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, category, content };
    if (id) await API.put(`/blogs/${id}`, data);
    else await API.post('/blogs', data);
    navigate('/admin');
  };

  return (
    <div className="container mt-4">
      <h2>{id ? 'Edit Blog' : 'Add Blog'}</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control my-2" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input className="form-control my-2" placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
        <textarea className="form-control my-2" placeholder="Content" rows="10" value={content} onChange={e => setContent(e.target.value)} />
        <button className="btn btn-primary">{id ? 'Update' : 'Add'} Blog</button>
      </form>
    </div>
  );
}