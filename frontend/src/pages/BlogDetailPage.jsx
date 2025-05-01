
// File: src/pages/BlogDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../utils/api';

export default function BlogDetailPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    API.get(`/blogs/${id}`).then(res => setBlog(res.data));
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="container mt-5 " style={{border:"1px solid white",padding:"15px"}}>
      <h2 style={{ backgroundColor: "purple", color: "white", padding: "15px", borderRadius: "5px"}}>{blog.title}</h2>
      <h5><strong>Category:</strong> {blog.category}</h5>
      <h4>About {blog.title}</h4><hr/>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}
