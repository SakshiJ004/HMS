const User = require('../models/User');
const bcrypt = require('bcryptjs');

// ── Get current user profile ──────────────────────────────────────────────────
exports.getProfile = async (req, res) => {
    try {
        // req.user comes from your auth middleware
        const user = await User.findById(req.user._id).select('-password');
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }
        res.status(200).json({ success: true, data: user });
    } catch (err) {
        console.error('Get profile error:', err);
        res.status(500).json({ success: false, message: 'Failed to fetch profile', error: err.message });
    }
};

// ── Update profile ────────────────────────────────────────────────────────────
exports.updateProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        const {
            firstName, lastName, phone,
            address1, address2, country, state, city, pincode,
            profileImage,
        } = req.body;

        // Update fields
        if (firstName !== undefined) user.firstName = firstName.trim();
        if (lastName !== undefined) user.lastName = lastName.trim();

        // Rebuild fullName from firstName + lastName
        if (firstName !== undefined || lastName !== undefined) {
            const fn = firstName !== undefined ? firstName.trim() : user.firstName || '';
            const ln = lastName !== undefined ? lastName.trim() : user.lastName || '';
            user.fullName = `${fn} ${ln}`.trim();
        }

        if (phone !== undefined) user.phone = phone.trim();

        // Address fields
        if (!user.address) user.address = {};
        if (address1 !== undefined) user.address.address1 = address1.trim();
        if (address2 !== undefined) user.address.address2 = address2.trim();
        if (country !== undefined) user.address.country = country.trim();
        if (state !== undefined) user.address.state = state.trim();
        if (city !== undefined) user.address.city = city.trim();
        if (pincode !== undefined) user.address.pincode = pincode.trim();

        // Profile image (base64 or URL)
        if (profileImage !== undefined) user.profileImage = profileImage;

        await user.save();

        // Return updated user without password
        const updated = await User.findById(user._id).select('-password');

        res.status(200).json({
            success: true,
            message: 'Profile updated successfully',
            data: updated,
        });
    } catch (err) {
        console.error('Update profile error:', err);
        res.status(500).json({ success: false, message: 'Failed to update profile', error: err.message });
    }
};

// ── Change password ───────────────────────────────────────────────────────────
exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword, confirmPassword } = req.body;

        if (!currentPassword || !newPassword || !confirmPassword) {
            return res.status(400).json({ success: false, message: 'All password fields are required' });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ success: false, message: 'New password and confirm password do not match' });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({ success: false, message: 'New password must be at least 6 characters' });
        }

        const user = await User.findById(req.user._id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        // Verify current password
        const isMatch = await user.matchPassword(currentPassword);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'Current password is incorrect' });
        }

        user.password = newPassword; // pre-save hook will hash it
        await user.save();

        res.status(200).json({ success: true, message: 'Password changed successfully' });
    } catch (err) {
        console.error('Change password error:', err);
        res.status(500).json({ success: false, message: 'Failed to change password', error: err.message });
    }
};