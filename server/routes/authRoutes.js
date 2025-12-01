// // const express = require('express');
// // const router = express.Router();
// // const { registerUser, loginUser, getMe } = require('../controllers/authController');
// // const { protect } = require('../middleware/authMiddleware');
// // const { requestPasswordReset, verifyResetToken, resetPassword } = require('../controllers/passwordResetController');

// // /**
// //  * Auth Routes
// //  * All routes related to authentication
// //  */

// // // @route   POST /api/auth/register
// // // @desc    Register new user
// // // @access  Public
// // router.post('/register', registerUser);

// // // @route   POST /api/auth/login
// // // @desc    Login user
// // // @access  Public
// // router.post('/login', loginUser);

// // // @route   GET /api/auth/me
// // // @desc    Get current user profile
// // // @access  Private (requires authentication)
// // router.get('/me', protect, getMe);

// // router.post('/forgot-password', requestPasswordReset);
// // router.get('/verify-reset-token', verifyResetToken);
// // router.post('/reset-password', resetPassword);

// // module.exports = router;


// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser, getMe } = require('../controllers/authController');
// const {
//     requestPasswordReset,
//     verifyOTP,
//     resendOTP,
//     resetPassword,
//     verifyResetToken
// } = require('../controllers/passwordResetController');
// const { protect } = require('../middleware/authMiddleware');

// /**
//  * Auth Routes
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
// // @access  Private
// router.get('/me', protect, getMe);

// /**
//  * Password Reset Routes with OTP
//  */

// // @route   POST /api/auth/forgot-password
// // @desc    Request password reset (sends OTP to email)
// // @access  Public
// router.post('/forgot-password', requestPasswordReset);

// // @route   POST /api/auth/verify-otp
// // @desc    Verify OTP code
// // @access  Public
// router.post('/verify-otp', verifyOTP);

// // @route   POST /api/auth/resend-otp
// // @desc    Resend OTP code
// // @access  Public
// router.post('/resend-otp', resendOTP);

// router.get('/verify-reset-token', verifyResetToken)

// // @route   POST /api/auth/reset-password
// // @desc    Reset password after OTP verification
// // @access  Public
// router.post('/reset-password', resetPassword);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const { registerUser, loginUser, getMe } = require('../controllers/authController');
// const {
//     requestPasswordReset,
//     verifyOTP,
//     resendOTP,
//     resetPassword,
//     verifyResetToken
// } = require('../controllers/passwordResetController');
// const { protect } = require('../middleware/authMiddleware');

// /**
//  * Traditional Auth Routes
//  */
// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/me', protect, getMe);

// /**
//  * Password Reset Routes
//  */
// router.post('/forgot-password', requestPasswordReset);
// router.post('/verify-otp', verifyOTP);
// router.post('/resend-otp', resendOTP);
// router.get('/verify-reset-token', verifyResetToken);
// router.post('/reset-password', resetPassword);

// /**
//  * Helper function to generate JWT and redirect
//  */
// const handleSocialAuthCallback = (req, res) => {
//     try {
//         if (!req.user) {
//             return res.redirect(`${process.env.FRONTEND_URL}/login?error=authentication_failed`);
//         }

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: req.user._id, role: req.user.role },
//             process.env.JWT_SECRET,
//             { expiresIn: '30d' }
//         );

//         const nameParts = req.user.fullName.trim().split(' ');
//         const firstName = nameParts[0] || '';
//         const lastName = nameParts.slice(1).join(' ') || '';

//         // Prepare user data
//         const userData = {
//             _id: req.user._id,
//             fullName: req.user.fullName,
//             firstName,
//             lastName,
//             email: req.user.email,
//             role: req.user.role,
//             profileImage: req.user.profileImage,
//             provider: req.user.provider,
//             token,
//         };

//         // Encode user data for URL
//         const encodedData = encodeURIComponent(JSON.stringify(userData));

//         // Redirect to frontend with user data
//         res.redirect(`${process.env.FRONTEND_URL}/auth/callback?data=${encodedData}`);
//     } catch (error) {
//         console.error('Social auth callback error:', error);
//         res.redirect(`${process.env.FRONTEND_URL}/login?error=authentication_failed`);
//     }
// };

// /**
//  * Google OAuth Routes
//  */
// router.get(
//     '/google',
//     passport.authenticate('google', {
//         scope: ['profile', 'email'],
//     })
// );

// router.get(
//     '/google/callback',
//     passport.authenticate('google', {
//         failureRedirect: `${process.env.FRONTEND_URL}/login?error=authentication_failed`,
//         session: false,
//     }),
//     handleSocialAuthCallback
// );

// /**
//  * Facebook OAuth Routes
//  */
// // router.get(
// //     '/facebook',
// //     passport.authenticate('facebook', {
// //         scope: ['email'],
// //     })
// // );

// // router.get(
// //     '/facebook/callback',
// //     passport.authenticate('facebook', {
// //         failureRedirect: `${process.env.FRONTEND_URL}/login?error=authentication_failed`,
// //         session: false,
// //     }),
// //     handleSocialAuthCallback
// // );

// /**
//  * Apple OAuth Routes
//  */
// // router.get(
// //     '/apple',
// //     passport.authenticate('apple', {
// //         scope: ['name', 'email'],
// //     })
// // );

// // router.post(
// //     '/apple/callback',
// //     passport.authenticate('apple', {
// //         failureRedirect: `${process.env.FRONTEND_URL}/login?error=authentication_failed`,
// //         session: false,
// //     }),
// //     handleSocialAuthCallback
// // );

// module.exports = router;


const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { registerUser, loginUser, getMe } = require('../controllers/authController');
const {
    requestPasswordReset,
    verifyOTP,
    resendOTP,
    resetPassword,
    verifyResetToken
} = require('../controllers/passwordResetController');
const { protect } = require('../middleware/authMiddleware');

/**
 * Traditional Auth Routes
 */
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

/**
 * Password Reset Routes
 */
router.post('/forgot-password', requestPasswordReset);
router.post('/verify-otp', verifyOTP);
router.post('/resend-otp', resendOTP);
router.get('/verify-reset-token', verifyResetToken);
router.post('/reset-password', resetPassword);

/**
 * Helper function to generate JWT and redirect
 */
const handleSocialAuthCallback = (req, res) => {
    try {
        if (!req.user) {
            console.error('❌ No user found in social auth callback');
            return res.redirect(`${process.env.FRONTEND_URL}/login?error=authentication_failed`);
        }

        console.log('✅ Social auth successful for:', req.user.email);
        console.log('User data:', {
            fullName: req.user.fullName,
            email: req.user.email,
            role: req.user.role,
            provider: req.user.provider,
            profileImage: req.user.profileImage
        });

        // Generate JWT token
        const token = jwt.sign(
            { id: req.user._id, role: req.user.role },
            process.env.JWT_SECRET,
            { expiresIn: '30d' }
        );

        // Split fullName into firstName and lastName
        const nameParts = req.user.fullName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        // Prepare user data with ALL fields needed
        const userData = {
            _id: req.user._id,
            fullName: req.user.fullName,
            firstName: firstName,
            lastName: lastName,
            email: req.user.email,
            role: req.user.role, // This should be 'patient' for new social users
            profileImage: req.user.profileImage || '', // Google profile image
            provider: req.user.provider, // 'google'
            isEmailVerified: req.user.isEmailVerified,
            token: token,
        };

        console.log('📦 Sending user data to frontend:', userData);

        // Encode user data for URL
        const encodedData = encodeURIComponent(JSON.stringify(userData));

        // Redirect to frontend with user data
        res.redirect(`${process.env.FRONTEND_URL}/auth/callback?data=${encodedData}`);
    } catch (error) {
        console.error('❌ Social auth callback error:', error);
        res.redirect(`${process.env.FRONTEND_URL}/login?error=authentication_failed`);
    }
};

/**
 * Google OAuth Routes
 */
router.get(
    '/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    })
);

router.get(
    '/google/callback',
    passport.authenticate('google', {
        failureRedirect: `${process.env.FRONTEND_URL}/login?error=authentication_failed`,
        session: false,
    }),
    handleSocialAuthCallback
);

module.exports = router;