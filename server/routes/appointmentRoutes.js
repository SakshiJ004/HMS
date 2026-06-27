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

router.get('/doctors/:doctorId/schedule', protect, getDoctorSchedule);

router.post('/patients', protect, createPatient);

// Patient delete route
router.delete('/patients/:id', protect, async (req, res) => {
    try {
        const User = require('../models/User');

        const query = { _id: req.params.id, role: 'patient' };
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }

        const patient = await User.findOne(query);
        if (!patient) {
            return res.status(404).json({ success: false, message: 'Patient not found' });
        }

        await User.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Patient deleted successfully' });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// Appointment CRUD routes
router.post('/', protect, createAppointment);
router.get('/', protect, getAppointments);
router.get('/:id', protect, getAppointment);
router.put('/:id', protect, updateAppointment);
router.delete('/:id', protect, deleteAppointment);

module.exports = router;