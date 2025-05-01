

// File: routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogControllers');
const auth = require('../middleware/authMiddleware');

router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);

router.post('/', auth(['admin']), blogController.createBlog);
router.put('/:id', auth(['admin']), blogController.updateBlog);
router.delete('/:id', auth(['admin']), blogController.deleteBlog);

module.exports = router;
