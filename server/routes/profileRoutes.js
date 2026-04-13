const express = require('express');
const router = express.Router();
const { getProfile, updateProfile, changePassword } = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');
// const { verifyToken } = require('../middleware/authMiddleware');

// All routes require authentication
router.use(protect);

router.get('/', getProfile);       // GET  /api/profile
router.put('/', updateProfile);    // PUT  /api/profile
router.put('/change-password', changePassword);   // PUT  /api/profile/change-password

module.exports = router;