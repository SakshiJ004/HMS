const express = require('express');
const router = express.Router();
const leaveController = require('../controllers/leaveController');

// Admin routes - NO AUTH for testing
router.get('/admin/leaves', leaveController.getAllLeaves);
router.put('/admin/leaves/:id/status', leaveController.updateLeaveStatus);
router.put('/admin/leaves/:id', leaveController.updateLeave);
router.delete('/admin/leaves/:id', leaveController.deleteLeave);

// Doctor routes - NO AUTH for testing
router.get('/doctor/leaves', leaveController.getDoctorLeaves);
router.post('/doctor/leaves', leaveController.createLeave);

module.exports = router;