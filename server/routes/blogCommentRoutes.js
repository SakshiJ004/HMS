const express = require('express');
const router = express.Router();
const {
    getAllComments,
    getCommentsByBlog,
    createComment,
    updateCommentStatus,
    deleteComment
} = require('../controllers/blogCommentController');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.get('/blog/:blogId', getCommentsByBlog);
router.post('/', createComment); // Anyone can comment

// Protected routes (admin only)
router.get('/', protect, getAllComments);
router.put('/:id/status', protect, updateCommentStatus);
router.delete('/:id', protect, deleteComment);

module.exports = router;