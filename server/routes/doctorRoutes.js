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

router.put('/profile', protect, authorize('doctor'), async (req, res) => {
    try {
        const doctorId = req.user._id;
        const { firstName, lastName, phoneNumber, addressLine1, addressLine2,
            country, state, city, pincode, signature } = req.body;

        const fullName = `${firstName} ${lastName}`.trim();

        const updatedDoctor = await Doctor.findByIdAndUpdate(
            doctorId,
            {
                fullName,
                phone: phoneNumber,
                signature,
                address: {
                    address1: addressLine1, address2: addressLine2,
                    city, state, country, pincode
                }
            },
            { new: true }
        );

        // localStorage update साठी user data return कर
        res.json({
            success: true,
            data: {
                _id: updatedDoctor._id,
                fullName: updatedDoctor.fullName,
                email: updatedDoctor.email,
                signature: updatedDoctor.signature
            },
            message: 'Profile updated successfully'
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});


module.exports = router;