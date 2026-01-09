const express = require('express');
const router = express.Router();
const {
    getDoctors,
    getPatients,
    createAppointment,
    getAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment,
    createPatient,
    getDoctorSchedule
} = require('../controllers/appointmentController');
const { protect } = require('../middleware/authMiddleware');

// Get doctors and patients for dropdowns
router.get('/doctors', protect, getDoctors);
router.get('/patients', protect, getPatients);

router.get('/doctors/:doctorId/schedule', protect, getDoctorSchedule)

router.post('/patients', protect, createPatient)

// Appointment CRUD routes
router.post('/', protect, createAppointment);
router.get('/', protect, getAppointments);
router.get('/:id', protect, getAppointment);
router.put('/:id', protect, updateAppointment);
router.delete('/:id', protect, deleteAppointment);


module.exports = router;