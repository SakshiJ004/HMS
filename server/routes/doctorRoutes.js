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
    updateDoctorSchedule,
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

router.put('/:id/schedule', protect, authorize('doctor'), updateDoctorSchedule)

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


module.exports = router;