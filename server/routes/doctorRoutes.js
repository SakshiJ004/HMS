// ============================================
// FILE: backend/routes/doctorRoutes.js
// ============================================
const express = require('express');
const router = express.Router();
const {
    createDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor,
    getDashboardStats,
    getAppointmentStats,
    getTopDoctors,
    getDepartmentStats,
    getDoctorsSchedule,
} = require('../controllers/doctorController');
const { protect, authorize } = require('../middleware/authMiddleware');

// @route   POST /api/doctors
// @desc    Create new doctor
// @access  Private (Admin only)
router.post('/', protect, authorize('admin'), createDoctor);

// @route   GET /api/doctors
// @desc    Get all doctors
// @access  Private
router.get('/', protect, getDoctors);

// @route   GET /api/doctors/:id
// @desc    Get single doctor
// @access  Private
router.get('/:id', protect, getDoctor);

// @route   PUT /api/doctors/:id
// @desc    Update doctor
// @access  Private (Admin only)
router.put('/:id', protect, authorize('admin'), updateDoctor);

// @route   DELETE /api/doctors/:id
// @desc    Delete doctor
// @access  Private (Admin only)
router.delete('/:id', protect, authorize('admin'), deleteDoctor);

// @route   GET /api/dashboard/top-doctors
// @desc    Get top doctors by booking count
// @access  Private (Admin only)
router.get('/top-doctors', protect, authorize('admin'), getTopDoctors);

// @route   GET /api/dashboard/department-stats
// @desc    Get department statistics
// @access  Private (Admin only)
router.get('/department-stats', protect, authorize('admin'), getDepartmentStats);

// @route   GET /api/dashboard/doctors-schedule
// @desc    Get doctors with schedule availability
// @access  Private (Admin only)
router.get('/doctors-schedule', protect, authorize('admin'), getDoctorsSchedule);

module.exports = router;