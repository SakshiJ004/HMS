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
const Doctor = require('../models/Doctor')


// ✅ Profile update route - add this
router.put('/profile', protect, authorize('doctor'), async (req, res) => {
    try {
        const doctorId = req.user._id;
        const {
            firstName,
            lastName,
            phoneNumber,
            addressLine1,
            addressLine2,
            country,
            state,
            city,
            pincode,
            signature
        } = req.body;

        const fullName = `${firstName} ${lastName}`.trim();

        const updatedDoctor = await Doctor.findByIdAndUpdate(
            doctorId,
            {
                fullName,
                phone: phoneNumber,
                signature,
                address: {
                    address1: addressLine1,
                    address2: addressLine2,
                    city,
                    state,
                    country,
                    pincode
                }
            },
            { new: true }
        );

        if (!updatedDoctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }

        res.json({
            success: true,
            data: {
                _id: updatedDoctor._id,
                fullName: updatedDoctor.fullName,
                email: updatedDoctor.email,
                phone: updatedDoctor.phone,
                signature: updatedDoctor.signature,
                address: updatedDoctor.address
            },
            message: 'Profile updated successfully'
        });
    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// ============================================
// backend/routes/doctorRoutes.js मध्ये
// router.post('/') च्या आधी हा route ADD करा
// ============================================

router.post('/change-password', protect, authorize('doctor'), async (req, res) => {
    try {
        const { newPassword, confirmPassword } = req.body;
        const doctorId = req.user._id;

        if (!newPassword || !confirmPassword) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ success: false, message: 'Passwords do not match' });
        }
        if (newPassword.length < 8) {
            return res.status(400).json({ success: false, message: 'Password must be at least 8 characters' });
        }
        if (!/[A-Z]/.test(newPassword)) {
            return res.status(400).json({ success: false, message: 'Password must contain at least one uppercase letter' });
        }
        if (!/[0-9]/.test(newPassword)) {
            return res.status(400).json({ success: false, message: 'Password must contain at least one number' });
        }
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(newPassword)) {
            return res.status(400).json({ success: false, message: 'Password must contain at least one special character' });
        }

        // Find doctor
        const User = require('../models/User');
        const doctor = await User.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }

        // ✅ Direct set - pre-save hook will hash it automatically
        doctor.password = newPassword;
        await doctor.save();

        console.log('✅ Password changed for doctor:', doctor.email);

        // Send confirmation email
        try {
            const { sendEmail, emailTemplates } = require('../config/emailService');
            await sendEmail({
                to: doctor.email,
                subject: 'Password Changed Successfully - Preclinic',
                html: emailTemplates.passwordResetSuccess(doctor.fullName),
            });
        } catch (emailError) {
            console.error('Email failed (non-critical):', emailError.message);
        }

        res.status(200).json({
            success: true,
            message: 'Password updated successfully! A confirmation email has been sent.',
        });

    } catch (error) {
        console.error('Change password error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// @route   POST /api/doctors
// @desc    Create new doctor
// @access  Private (Admin only)
router.post('/', protect, authorize('admin'), createDoctor);

// @route   GET /api/doctors
// @desc    Get all doctors
// @access  Private
router.get('/', protect, getDoctors);

router.put('/:id/schedule', protect, authorize('doctor', 'admin'), updateDoctorSchedule)

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