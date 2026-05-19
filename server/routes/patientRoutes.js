// routes/patientProfileRoutes.js
const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const User = require('../models/User');
const bcrypt = require('bcryptjs');

// ─── Get Profile ───────────────────────────────────────────────────────────────
router.get('/profile', protect, authorize('patient'), async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .select('-password')
            .lean();
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });
        res.json({ success: true, data: user });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// ─── Update Profile ────────────────────────────────────────────────────────────
router.put('/profile', protect, authorize('patient'), async (req, res) => {
    try {
        const { firstName, lastName, phoneNumber, addressLine1, addressLine2, pincode, profileImage } = req.body;

        const updateData = {};

        if (firstName || lastName) {
            updateData.fullName = `${firstName || ''} ${lastName || ''}`.trim();
        }
        if (phoneNumber) updateData.phone = phoneNumber;
        if (profileImage) updateData.profileImage = profileImage;
        if (addressLine1 !== undefined) {
            updateData['address.address1'] = addressLine1;
        }
        if (addressLine2 !== undefined) {
            updateData['address.address2'] = addressLine2;
        }
        if (pincode !== undefined) {
            updateData['address.pincode'] = pincode;
        }

        const user = await User.findByIdAndUpdate(
            req.user._id,
            { $set: updateData },
            { new: true, select: '-password' }
        ).lean();

        res.json({ success: true, data: user, message: 'Profile updated successfully' });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// ─── Change Password ───────────────────────────────────────────────────────────
router.post('/change-password', protect, authorize('patient'), async (req, res) => {
    try {
        const { newPassword, confirmPassword } = req.body;
        if (!newPassword || newPassword.length < 8) {
            return res.status(400).json({ success: false, message: 'Password must be at least 8 characters' });
        }
        if (newPassword !== confirmPassword) {
            return res.status(400).json({ success: false, message: 'Passwords do not match' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(newPassword, salt);
        await User.findByIdAndUpdate(req.user._id, { password: hashed });
        res.json({ success: true, message: 'Password updated successfully' });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

// ─── Notification Preferences ──────────────────────────────────────────────────
router.get('/notification-preferences', protect, authorize('patient'), async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('notificationPreferences').lean();
        res.json({ success: true, data: user?.notificationPreferences || null });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

router.put('/notification-preferences', protect, authorize('patient'), async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.user._id, {
            $set: { notificationPreferences: req.body }
        });
        res.json({ success: true, message: 'Preferences saved' });
    } catch (e) {
        res.status(500).json({ success: false, message: e.message });
    }
});

module.exports = router;