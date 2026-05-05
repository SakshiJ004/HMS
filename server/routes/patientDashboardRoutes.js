const express = require('express');
const router = express.Router();
const {
    getPatientStats,
    getMyDoctors,
    getMyPrescriptions,
    getRecentActivity,
    getPatientRecentAppointments,
    getPatientUpcomingAppointments,
    getConsultationByDepartment,
    getRecentTransactions,
    getAllPatientAppointments,
} = require('../controllers/patientDashboardController');
const { protect, authorize } = require('../middleware/authMiddleware');

// All routes are protected + only patient role
router.get('/stats', protect, authorize('patient'), getPatientStats);
router.get('/my-doctors', protect, authorize('patient'), getMyDoctors);
router.get('/prescriptions', protect, authorize('patient'), getMyPrescriptions);
router.get('/recent-activity', protect, authorize('patient'), getRecentActivity);
router.get('/recent-appointments', protect, authorize('patient'), getPatientRecentAppointments);
router.get('/upcoming-appointments', protect, authorize('patient'), getPatientUpcomingAppointments);
router.get('/consultation-by-department', protect, authorize('patient'), getConsultationByDepartment);
router.get('/recent-transactions', protect, authorize('patient'), getRecentTransactions);
router.get('/all-appointments', protect, authorize('patient'), getAllPatientAppointments);

module.exports = router;