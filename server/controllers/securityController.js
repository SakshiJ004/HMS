const User = require('../models/User');

// ── Get Security Settings ─────────────────────────────────────────────────────
exports.getSecuritySettings = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .select('email phone twoFAEnabled loginAlerts status');

        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        res.status(200).json({
            success: true,
            data: {
                email: user.email || '',
                phone: user.phone || '',
                // ✅ Default to false if field doesn't exist yet
                twoFAEnabled: user.twoFAEnabled === true,
                loginAlerts: user.loginAlerts !== false, // default true
                status: user.status || 'Available',
            },
        });
    } catch (err) {
        console.error('getSecuritySettings error:', err);
        res.status(500).json({ success: false, message: 'Failed to fetch security settings', error: err.message });
    }
};

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

        user.password = newPassword; // pre-save hook hashes it
        await user.save();

        res.status(200).json({ success: true, message: 'Password changed successfully' });
    } catch (err) {
        console.error('changePassword error:', err);
        res.status(500).json({ success: false, message: 'Failed to change password', error: err.message });
    }
};

// ── Toggle Two Factor Auth ────────────────────────────────────────────────────
// ✅ ONLY twoFAEnabled changes — loginAlerts is NOT touched
exports.toggleTwoFA = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        // Only toggle twoFAEnabled — never touch loginAlerts
        const current = user.twoFAEnabled === true;
        user.twoFAEnabled = !current;
        await user.save();

        res.status(200).json({
            success: true,
            message: `Two Factor Authentication ${!current ? 'enabled' : 'disabled'}`,
            twoFAEnabled: user.twoFAEnabled,
            // ✅ Return loginAlerts unchanged so frontend stays in sync
            loginAlerts: user.loginAlerts !== false,
        });
    } catch (err) {
        console.error('toggleTwoFA error:', err);
        res.status(500).json({ success: false, message: 'Failed to update 2FA', error: err.message });
    }
};

// ── Toggle Login Alerts (Google Auth) ────────────────────────────────────────
// ✅ ONLY loginAlerts changes — twoFAEnabled is NOT touched
exports.toggleLoginAlerts = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        if (!user) return res.status(404).json({ success: false, message: 'User not found' });

        // Only toggle loginAlerts — never touch twoFAEnabled
        const current = user.loginAlerts !== false; // default true
        user.loginAlerts = !current;
        await user.save();

        res.status(200).json({
            success: true,
            message: `Login alerts ${!current ? 'enabled' : 'disabled'}`,
            loginAlerts: user.loginAlerts,
            // ✅ Return twoFAEnabled unchanged
            twoFAEnabled: user.twoFAEnabled === true,
        });
    } catch (err) {
        console.error('toggleLoginAlerts error:', err);
        res.status(500).json({ success: false, message: 'Failed to update login alerts', error: err.message });
    }
};

// ── Update Phone Number ───────────────────────────────────────────────────────
exports.updatePhone = async (req, res) => {
    try {
        const { newPhone, currentPassword } = req.body;

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
        console.error('updatePhone error:', err);
        res.status(500).json({ success: false, message: 'Failed to update phone', error: err.message });
    }
};

// ── Remove Phone ──────────────────────────────────────────────────────────────
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

        if (user.email !== currentEmail?.toLowerCase())
            return res.status(400).json({ success: false, message: 'Current email is incorrect' });

        const existing = await User.findOne({
            email: newEmail.toLowerCase(),
            _id: { $ne: req.user._id },
        });
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
        console.error('updateEmail error:', err);
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

        if (reason) console.log(`Delete reason for ${user.email}: ${reason}`);

        await User.findByIdAndDelete(req.user._id);
        res.status(200).json({ success: true, message: 'Account permanently deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete account', error: err.message });
    }
};