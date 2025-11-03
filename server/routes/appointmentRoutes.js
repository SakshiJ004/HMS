// const express = require('express');
// const router = express.Router();
// const {
//     createAppointment,
//     getAppointments,
//     getAppointmentById,
//     updateAppointment,
//     deleteAppointment,
//     getDoctors,
//     getDepartments,
// } = require('../controllers/appointmentController');
// const { protect, adminOnly } = require('../middleware/authMiddleware');

// // Dropdown data routes
// router.get('/doctors', protect, adminOnly, getDoctors);
// router.get('/departments', protect, adminOnly, getDepartments);

// // CRUD routes
// router.post('/', protect, adminOnly, createAppointment);
// router.get('/', protect, adminOnly, getAppointments);
// router.get('/:id', protect, adminOnly, getAppointmentById);
// router.put('/:id', protect, adminOnly, updateAppointment);
// router.delete('/:id', protect, adminOnly, deleteAppointment);

// module.exports = router;

const express = require('express');
const router = express.Router();

// Import controller functions
const {
    createAppointment,
    getAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
    getDoctors,
    getDepartments,
} = require('../controllers/appointmentController');

// Import middleware
const { protect, authorize } = require('../middleware/authMiddleware');

// ===============================
// 🔹 Dropdown Data Routes
// ===============================
router.get('/doctors', protect, authorize('admin'), getDoctors);
router.get('/departments', protect, authorize('admin'), getDepartments);

// ===============================
// 🔹 Appointment CRUD Routes
// ===============================
router.post('/', protect, authorize('admin'), createAppointment);
router.get('/', protect, authorize('admin'), getAppointments);
router.get('/:id', protect, authorize('admin'), getAppointmentById);
router.put('/:id', protect, authorize('admin'), updateAppointment);
router.delete('/:id', protect, authorize('admin'), deleteAppointment);

// ===============================
// 🔹 Export Router
// ===============================
module.exports = router;
