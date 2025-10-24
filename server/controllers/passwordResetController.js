const crypto = require('crypto');
const User = require('../models/User');
const PasswordReset = require('../models/PasswordReset');
const nodemailer = require('nodemailer');

// Configure email transporter (using Gmail as example)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASSWORD, // App password
    },
});

/**
 * Request Password Reset
 * POST /api/auth/forgot-password
 */
const requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required',
            });
        }

        // Find user
        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            // Don't reveal if email exists or not (security)
            return res.status(200).json({
                success: true,
                message: 'If an account with that email exists, we have sent a password reset link.',
            });
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

        // Delete any existing reset tokens for this user
        await PasswordReset.deleteMany({ userId: user._id });

        // Create new reset token
        await PasswordReset.create({
            userId: user._id,
            resetToken: hashedToken,
            expiresAt: Date.now() + 3600000, // 1 hour
        });

        // Create reset URL
        const resetUrl = `${process.env.FRONTEND_URL}/reset-password-basic?token=${resetToken}&email=${email}`;

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Password Reset Request - Preclinic',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>Password Reset Request</h2>
                    <p>Hi ${user.fullName},</p>
                    <p>You requested to reset your password. Click the button below to reset it:</p>
                    <a href="${resetUrl}" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; border-radius: 4px; margin: 20px 0;">Reset Password</a>
                    <p>Or copy and paste this link:</p>
                    <p style="word-break: break-all;">${resetUrl}</p>
                    <p>This link will expire in 1 hour.</p>
                    <p>If you didn't request this, please ignore this email.</p>
                    <hr style="margin: 30px 0;">
                    <p style="color: #666; font-size: 12px;">© 2025 Preclinic. All rights reserved.</p>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Password reset link has been sent to your email.',
        });

    } catch (error) {
        console.error('Password reset request error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to process password reset request. Please try again later.',
        });
    }
};

/**
 * Verify Reset Token
 * GET /api/auth/verify-reset-token
 */
const verifyResetToken = async (req, res) => {
    try {
        const { token, email } = req.query;

        if (!token || !email) {
            return res.status(400).json({
                success: false,
                message: 'Invalid reset link',
            });
        }

        // Hash the token
        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

        // Find user
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Invalid reset link',
            });
        }

        // Find reset token
        const resetToken = await PasswordReset.findOne({
            userId: user._id,
            resetToken: hashedToken,
            isUsed: false,
            expiresAt: { $gt: Date.now() },
        });

        if (!resetToken) {
            return res.status(400).json({
                success: false,
                message: 'Invalid or expired reset link',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Token is valid',
        });

    } catch (error) {
        console.error('Token verification error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to verify reset token',
        });
    }
};

/**
 * Reset Password
 * POST /api/auth/reset-password
 */
const resetPassword = async (req, res) => {
    try {
        const { token, email, password, confirmPassword } = req.body;

        if (!token || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Validate password match
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Passwords do not match',
            });
        }

        // Validate password strength
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 8 characters long',
            });
        }

        // Hash the token
        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

        // Find user
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'Invalid reset link',
            });
        }

        // Find reset token
        const resetToken = await PasswordReset.findOne({
            userId: user._id,
            resetToken: hashedToken,
            isUsed: false,
            expiresAt: { $gt: Date.now() },
        });

        if (!resetToken) {
            return res.status(400).json({
                success: false,
                message: 'Invalid or expired reset link',
            });
        }

        // Update password
        user.password = password;
        await user.save();

        // Mark token as used
        resetToken.isUsed = true;
        await resetToken.save();

        // Send confirmation email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: user.email,
            subject: 'Password Reset Successful - Preclinic',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>Password Reset Successful</h2>
                    <p>Hi ${user.fullName},</p>
                    <p>Your password has been successfully reset.</p>
                    <p>If you didn't make this change, please contact support immediately.</p>
                    <hr style="margin: 30px 0;">
                    <p style="color: #666; font-size: 12px;">© 2025 Preclinic. All rights reserved.</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Password has been reset successfully. You can now login with your new password.',
        });

    } catch (error) {
        console.error('Password reset error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to reset password. Please try again later.',
        });
    }
};

module.exports = {
    requestPasswordReset,
    verifyResetToken,
    resetPassword,
};