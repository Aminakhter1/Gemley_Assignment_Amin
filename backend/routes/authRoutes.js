
// File: routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');

router.post('/login', login);
router.post('/signup', register); // optional for initial admin creation

module.exports = router;