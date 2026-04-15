const User = require('../models/User');
const bcrypt = require('bcryptjs');

// ── Change Password ───────────────────────────────────────────────────────────
exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword, confirmPassword } = req.body;

        if (!currentPassword || !newPassword || !confirmPassword)
            return res.status(400).json({ success: false, message: 'All fields are required' });

        if (newPassword.length < 8)
            return res.status(400).json({ success: false, message: 'Password must be at least 8 characters' });

        if (newPassword !== confirmPassword)
            return res.status(400).json({ success: false, message: 'Passwords do not match' });

        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        const isMatch = await user.matchPassword(currentPassword);
        if (!isMatch)
            return res.status(400).json({ success: false, message: 'Current password is incorrect' });

        user.password = newPassword;
        await user.save();

        res.status(200).json({ success: true, message: 'Password changed successfully' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to change password', error: err.message });
    }
};

// ── Toggle Two Factor Auth ────────────────────────────────────────────────────
exports.toggleTwoFA = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        // Toggle the twoFAEnabled field (exists in Doctor schema via discriminator)
        // For base User model, we store it in a generic field
        const current = user.twoFAEnabled || false;
        user.twoFAEnabled = !current;
        await user.save();

        res.status(200).json({
            success: true,
            message: `Two Factor Authentication ${!current ? 'enabled' : 'disabled'}`,
            twoFAEnabled: user.twoFAEnabled,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update 2FA', error: err.message });
    }
};

// ── Toggle Login Alerts (Google Auth placeholder) ─────────────────────────────
exports.toggleLoginAlerts = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        const current = user.loginAlerts !== undefined ? user.loginAlerts : true;
        user.loginAlerts = !current;
        await user.save();

        res.status(200).json({
            success: true,
            message: `Login alerts ${!current ? 'enabled' : 'disabled'}`,
            loginAlerts: user.loginAlerts,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update login alerts', error: err.message });
    }
};

// ── Update Phone Number ───────────────────────────────────────────────────────
exports.updatePhone = async (req, res) => {
    try {
        const { currentPhone, newPhone, currentPassword } = req.body;

        if (!newPhone || !currentPassword)
            return res.status(400).json({ success: false, message: 'New phone and current password are required' });

        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        const isMatch = await user.matchPassword(currentPassword);
        if (!isMatch)
            return res.status(400).json({ success: false, message: 'Current password is incorrect' });

        user.phone = newPhone.trim();
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Phone number updated successfully',
            phone: user.phone,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update phone', error: err.message });
    }
};

// ── Remove Phone Number ───────────────────────────────────────────────────────
exports.removePhone = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        user.phone = '';
        await user.save();

        res.status(200).json({ success: true, message: 'Phone number removed' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to remove phone', error: err.message });
    }
};

// ── Update Email ──────────────────────────────────────────────────────────────
exports.updateEmail = async (req, res) => {
    try {
        const { currentEmail, newEmail, currentPassword } = req.body;

        if (!newEmail || !currentPassword)
            return res.status(400).json({ success: false, message: 'New email and current password are required' });

        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        // Verify current email matches
        if (user.email !== currentEmail?.toLowerCase())
            return res.status(400).json({ success: false, message: 'Current email is incorrect' });

        // Check if new email already taken
        const existing = await User.findOne({ email: newEmail.toLowerCase(), _id: { $ne: req.user._id } });
        if (existing)
            return res.status(400).json({ success: false, message: 'This email is already in use' });

        const isMatch = await user.matchPassword(currentPassword);
        if (!isMatch)
            return res.status(400).json({ success: false, message: 'Current password is incorrect' });

        user.email = newEmail.toLowerCase().trim();
        await user.save();

        res.status(200).json({
            success: true,
            message: 'Email updated successfully',
            email: user.email,
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to update email', error: err.message });
    }
};

// ── Deactivate Account ────────────────────────────────────────────────────────
exports.deactivateAccount = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        user.status = 'Unavailable';
        await user.save();

        res.status(200).json({ success: true, message: 'Account deactivated. Sign in again to reactivate.' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to deactivate account', error: err.message });
    }
};

// ── Delete Account ────────────────────────────────────────────────────────────
exports.deleteAccount = async (req, res) => {
    try {
        const { reason, currentPassword } = req.body;

        if (!currentPassword)
            return res.status(400).json({ success: false, message: 'Password required to delete account' });

        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        const isMatch = await user.matchPassword(currentPassword);
        if (!isMatch)
            return res.status(400).json({ success: false, message: 'Password is incorrect' });

        // Log reason if provided (optional: save to audit log)
        if (reason) {
            console.log(`Account deletion reason for ${user.email}: ${reason}`);
        }

        await User.findByIdAndDelete(req.user._id);

        res.status(200).json({ success: true, message: 'Account permanently deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete account', error: err.message });
    }
};

// ── Get Security Settings ─────────────────────────────────────────────────────
exports.getSecuritySettings = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).select('email phone twoFAEnabled loginAlerts status');
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        res.status(200).json({
            success: true,
            data: {
                email: user.email,
                phone: user.phone || '',
                twoFAEnabled: user.twoFAEnabled || false,
                loginAlerts: user.loginAlerts !== undefined ? user.loginAlerts : true,
                status: user.status,
            },
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch security settings', error: err.message });
    }
};