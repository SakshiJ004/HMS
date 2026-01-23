const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leaveController');
// const {protect, authorize} = require('../middleware/authMiddleware')
const {protect, authorize} = require('../middleware/authMiddleware')

// Admin routes
router.get('/admin/leaves', protect, authorize('admin'), leaveController.getAllLeaves);
router.put('/admin/leaves/:id/status', protect, authorize('admin'), leaveController.updateLeaveStatus);
router.put('/admin/leaves/:id', protect, authorize('admin'), leaveController.updateLeave);
router.delete('/admin/leaves/:id', protect, authorize('admin'), leaveController.deleteLeave);

// Doctor routes
router.get('/doctor/leaves', protect, authorize('doctor'), leaveController.getDoctorLeaves);
router.post('/doctor/leaves', protect, authorize('doctor'), leaveController.createLeave);

module.exports = router;