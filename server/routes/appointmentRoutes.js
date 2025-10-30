const express = require('express');
const router = express.Router();
const {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
    getDoctorsList,
    getPatientsList,
    getDepartmentsList,
} = require('../controllers/appointmentController');
const { protect, authorize } = require('../middleware/authMiddleware');

/**
 * Appointment Routes
 * All routes are protected and require authentication
 */

// Get dropdown lists (accessible by admin and doctors)
router.get('/doctors/list', protect, authorize('admin', 'doctor'), getDoctorsList);
router.get('/patients/list', protect, authorize('admin', 'doctor'), getPatientsList);
router.get('/departments/list', protect, getDepartmentsList);

// Main appointment CRUD operations
router.post('/', protect, authorize('admin', 'doctor'), createAppointment);
router.get('/', protect, authorize('admin', 'doctor'), getAllAppointments);
router.get('/:id', protect, getAppointmentById);

module.exports = router;