// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser, getMe } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware');
// const { requestPasswordReset, verifyResetToken, resetPassword } = require('../controllers/passwordResetController');

// /**
//  * Auth Routes
//  * All routes related to authentication
//  */

// // @route   POST /api/auth/register
// // @desc    Register new user
// // @access  Public
// router.post('/register', registerUser);

// // @route   POST /api/auth/login
// // @desc    Login user
// // @access  Public
// router.post('/login', loginUser);

// // @route   GET /api/auth/me
// // @desc    Get current user profile
// // @access  Private (requires authentication)
// router.get('/me', protect, getMe);

// router.post('/forgot-password', requestPasswordReset);
// router.get('/verify-reset-token', verifyResetToken);
// router.post('/reset-password', resetPassword);

// module.exports = router;


const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe } = require('../controllers/authController');
const {
    requestPasswordReset,
    verifyOTP,
    resendOTP,
    resetPassword
} = require('../controllers/passwordResetController');
const { protect } = require('../middleware/authMiddleware');

/**
 * Auth Routes
 */

// @route   POST /api/auth/register
// @desc    Register new user
// @access  Public
router.post('/register', registerUser);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', loginUser);

// @route   GET /api/auth/me
// @desc    Get current user profile
// @access  Private
router.get('/me', protect, getMe);

/**
 * Password Reset Routes with OTP
 */

// @route   POST /api/auth/forgot-password
// @desc    Request password reset (sends OTP to email)
// @access  Public
router.post('/forgot-password', requestPasswordReset);

// @route   POST /api/auth/verify-otp
// @desc    Verify OTP code
// @access  Public
router.post('/verify-otp', verifyOTP);

// @route   POST /api/auth/resend-otp
// @desc    Resend OTP code
// @access  Public
router.post('/resend-otp', resendOTP);

// @route   POST /api/auth/reset-password
// @desc    Reset password after OTP verification
// @access  Public
router.post('/reset-password', resetPassword);

module.exports = router;