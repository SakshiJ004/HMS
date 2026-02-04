// routes/leaveTypeRoutes.js
const express = require('express');
const router = express.Router();
const {
    getLeaveTypes,
    createLeaveType,
    updateLeaveType,
    deleteLeaveType,
    getLeaveStatistics
} = require('../controllers/leaveTypeController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/', protect, getLeaveTypes);
router.post('/', protect, authorize('admin'), createLeaveType);
router.put('/:id', protect, authorize('admin'), updateLeaveType);
router.delete('/:id', protect, authorize('admin'), deleteLeaveType);
router.get('/statistics', protect, authorize('admin'), getLeaveStatistics);

module.exports = router;