
// File: server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/blogs', blogRoutes);

mongoose.connect("mongodb+srv://aminakhter1166:iKC3ZCtHscD3ahXu@cluster0.nhwmuoj.mongodb.net/reactaccio")
  .then(() => app.listen(5000, () => console.log('Server running at http://localhost:5000')))
  .catch(err => console.error(err));
