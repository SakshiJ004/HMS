const express = require('express');
const router = express.Router();
const {
    getDoctorStats,
    getAppointmentChart,
    getUpcomingAppointment,
    getRecentAppointments,
} = require('../controllers/doctorDashboardController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/stats', protect, authorize('doctor'), getDoctorStats);
router.get('/chart', protect, authorize('doctor'), getAppointmentChart);
router.get('/upcoming', protect, authorize('doctor'), getUpcomingAppointment);
router.get('/recent', protect, authorize('doctor'), getRecentAppointments);
router.get('/additional-stats', protect, authorize('doctor'), getAdditionalStats);

module.exports = router;