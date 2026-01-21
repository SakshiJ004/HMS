const express = require('express');
const router = express.Router();
const {
    getDoctorStats,
    getAppointmentChart,
    getUpcomingAppointment,
    getRecentAppointments,
    getAdditionalStats,
    getUpcomingAppointmentWithFilter,
    getAppointmentStatistics,
    getTopPatients,
    getAllDoctorAppointments,
} = require('../controllers/doctorDashboardController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/stats', protect, authorize('doctor'), getDoctorStats);
router.get('/chart', protect, authorize('doctor'), getAppointmentChart);
router.get('/upcoming', protect, authorize('doctor'), getUpcomingAppointment);
router.get('/upcoming-filtered', protect, authorize('doctor'), getUpcomingAppointmentWithFilter);
router.get('/recent', protect, authorize('doctor'), getRecentAppointments);
router.get('/additional-stats', protect, authorize('doctor'), getAdditionalStats);
router.get('/appointment-statistics', protect, authorize('doctor'), getAppointmentStatistics);
router.get('/top-patients', protect, authorize('doctor'), getTopPatients);
router.get('/all-appointments', protect, authorize('doctor'), getAllDoctorAppointments)

module.exports = router;