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

// GET notification preferences
router.get('/notification-preferences', protect, authorize('doctor'), async (req, res) => {
    try {
        const Doctor = require('../models/Doctor'); // ✅ Doctor model use करा
        const doctor = await Doctor.findById(req.user._id).select('notificationPreferences');
        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }
        res.status(200).json({
            success: true,
            data: doctor.notificationPreferences || null
        });
    } catch (error) {
        console.error('Get notification prefs error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// PUT - Save notification preferences
router.put('/notification-preferences', protect, authorize('doctor'), async (req, res) => {
    try {
        const Doctor = require('../models/Doctor'); // ✅ Doctor model use करा
        const prefs = req.body;

        const doctor = await Doctor.findByIdAndUpdate(
            req.user._id,
            { $set: { notificationPreferences: prefs } },
            { new: true, runValidators: false }
        );

        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }

        console.log('✅ Notification prefs saved for doctor:', doctor.email);
        res.status(200).json({
            success: true,
            message: 'Notification preferences saved successfully',
            data: doctor.notificationPreferences
        });
    } catch (error) {
        console.error('Save notification prefs error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// PUT - Update Email
router.put('/update-email', protect, authorize('doctor'), async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ success: false, message: 'Email is required' });

        const User = require('../models/User');
        // Check if email already exists
        const existing = await User.findOne({ email, _id: { $ne: req.user._id } });
        if (existing) return res.status(400).json({ success: false, message: 'Email already in use by another account' });

        await User.findByIdAndUpdate(req.user._id, { $set: { email } }, { runValidators: false });
        res.status(200).json({ success: true, message: 'Email updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// PUT - Update Security Settings (2FA, login alerts)
router.put('/update-security', protect, authorize('doctor'), async (req, res) => {
    try {
        const { twoFAEnabled, loginAlerts } = req.body;
        const Doctor = require('../models/Doctor');
        await Doctor.findByIdAndUpdate(
            req.user._id,
            { $set: { twoFAEnabled, loginAlerts } },
            { runValidators: false }
        );
        res.status(200).json({ success: true, message: 'Security settings saved' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// GET - Doctor Transactions (from completed appointments)
router.get('/transactions', protect, authorize('doctor'), async (req, res) => {
    try {
        const Appointment = require('../models/Appointment');

        const appointments = await Appointment.find({
            doctor: req.user._id,
            paymentStatus: { $in: ['paid', 'Paid', 'completed'] }
        })
            .populate('patient', 'fullName phone email profileImage')
            .sort({ createdAt: -1 });

        // Build transactions from appointments
        const transactions = appointments.map(appt => ({
            _id: appt._id,
            transactionId: appt.paymentId || appt._id.toString().slice(-8).toUpperCase(),
            patientName: appt.patient?.fullName || 'Unknown',
            patientPhone: appt.patient?.phone || '',
            date: appt.appointmentDate || appt.createdAt,
            type: appt.appointmentType === 'online' ? 'online' : 'clinic',
            amount: appt.consultationCharge || appt.amount || 0,
            status: appt.paymentStatus || 'Pending',
        }));

        // Summary
        const now = new Date();
        const thisMonthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const totalEarnings = transactions.reduce((sum, t) => sum + t.amount, 0);
        const thisMonth = transactions
            .filter(t => new Date(t.date) >= thisMonthStart)
            .reduce((sum, t) => sum + t.amount, 0);

        // Pending = unpaid appointments
        const pendingAppts = await Appointment.find({
            doctor: req.user._id,
            paymentStatus: { $in: ['pending', 'Pending', null] },
            status: { $ne: 'Cancelled' }
        });
        const pending = pendingAppts.reduce((sum, a) => sum + (a.consultationCharge || a.amount || 0), 0);

        res.status(200).json({
            success: true,
            data: transactions,
            summary: {
                totalEarnings,
                thisMonth,
                pending,
                totalAppointments: appointments.length,
            }
        });
    } catch (error) {
        console.error('Transactions error:', error);
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