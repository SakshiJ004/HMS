// routes/leaveRoutes.js
const express = require('express');
const router = express.Router();
const {
    getDoctorLeaves,
    getAllLeaves,
    createLeave,
    updateLeaveStatus,
    getLeaveStatistics
} = require('../controllers/leaveController');
const { protect, authorize } = require('../middleware/authMiddleware');

// Doctor routes
router.get('/my-leaves', protect, authorize('doctor'), getDoctorLeaves);
router.post('/apply', protect, authorize('doctor'), createLeave);
router.get('/statistics', protect, authorize('doctor'), getLeaveStatistics);

// Admin routes
router.get('/all', protect, authorize('admin'), getAllLeaves);
router.put('/status/:leaveId', protect, authorize('admin'), updateLeaveStatus);

module.exports = router;