Project Name: Blog CMS (Frontend + Backend)
A full-stack blog content management system (CMS) with authentication, role-based access
(admin/user), blog creation, editing, and viewing capabilities.
Folder Structure:
project-root/
 backend/ # Express.js + MongoDB (REST API)
 frontend/ # React.js (Client UI)
Tech Stack:
- Frontend: React.js, React Router, Bootstrap
- Backend: Node.js, Express.js, MongoDB, Mongoose, JWT
Backend Setup (/backend)
Prerequisites:
- Node.js
- MongoDB (local or Atlas)
How to Setup:
cd backend
npm install
Create .env file:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start Server:
npm run start
API Endpoints:
- POST api/auth/signup
- POST api/auth/login
- GET api/blogs
- GET api/blogs/:id
- POSTapi/blogs
- PUT api/blogs/:id
- DELETe  api/blogs/:id
Frontend Setup (/frontend)
Prerequisites:
- Node.js
How to Setup:
cd frontend
npm install
Environment Variables (Optional):
VITE_API_BASE_URL=http://localhost:5000
Start React App:
npm run start
Features:
- Authentication: Signup/Login with JWT
- Role-based routing: Admin dashboard, normal user view
- Blog management: Create, Read, Update, Delete (CRUD)
- Responsive UI with Bootstrap
Development Notes:
- Make sure backend is running before testing frontend.
- CORS is enabled in Express for frontend-backend communication.
- Login token and role are stored in localStorage.
Testing:
Use Postman or Thunder Client to test backend routes.
  live link:https://gemley-assignment-amin-4ot7.vercel.app/
  --------------------------------------------Thanks---------------------------
