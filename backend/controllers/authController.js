// File: controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const JWT_SECRET="AMINAKHTER"
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username);

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token, role: user.role });
  } catch (error) {
    console.error('Login Error:', error.message);
    res.status(500).json({ msg: 'Server error during login' });
  }
};

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
console.log(username);
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ msg: 'Username already exists' });
    }

    const user = new User({ username, password, role });
    console.log(user);
    await user.save();

    res.status(201).json({ msg: 'User registered' });
  } catch (error) {
    console.error('Registration Error:', error.message);
    res.status(500).json({ msg: 'Server error during registration' });
  }
};
