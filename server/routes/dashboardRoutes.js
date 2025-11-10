// const express = require('express');
// const router = express.Router();
// const { protect, authorize } = require('../middleware/authMiddleware');

// /**
//  * Dashboard Routes
//  * Role-based protected routes for different user types
//  */

// // @route   GET /api/dashboard/admin
// // @desc    Access admin dashboard
// // @access  Private (Admin only)
// router.get('/admin', protect, authorize('admin'), (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: 'Welcome to Admin Dashboard',
//         data: {
//             user: req.user,
//             dashboardType: 'admin',
//         },
//     });
// });

// // @route   GET /api/dashboard/doctor
// // @desc    Access doctor dashboard
// // @access  Private (Doctor only)
// router.get('/doctor', protect, authorize('doctor'), (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: 'Welcome to Doctor Dashboard',
//         data: {
//             user: req.user,
//             dashboardType: 'doctor',
//         },
//     });
// });

// // @route   GET /api/dashboard/patient
// // @desc    Access patient dashboard
// // @access  Private (Patient only)
// router.get('/patient', protect, authorize('patient'), (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: 'Welcome to Patient Dashboard',
//         data: {
//             user: req.user,
//             dashboardType: 'patient',
//         },
//     });
// });

// module.exports = router;



const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const { getDashboardStats, getAppointmentStats } = require('../controllers/dashboardController');

/**
 * Dashboard Routes
 * Role-based protected routes for different user types
 */

// @route   GET /api/dashboard/admin
// @desc    Access admin dashboard
// @access  Private (Admin only)
router.get('/admin', protect, authorize('admin'), (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to Admin Dashboard',
        data: {
            user: req.user,
            dashboardType: 'admin',
        },
    });
});

// @route   GET /api/dashboard/doctor
// @desc    Access doctor dashboard
// @access  Private (Doctor only)
router.get('/doctor', protect, authorize('doctor'), (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to Doctor Dashboard',
        data: {
            user: req.user,
            dashboardType: 'doctor',
        },
    });
});

// @route   GET /api/dashboard/patient
// @desc    Access patient dashboard
// @access  Private (Patient only)
router.get('/patient', protect, authorize('patient'), (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to Patient Dashboard',
        data: {
            user: req.user,
            dashboardType: 'patient',
        },
    });
});

// @route   GET /api/dashboard/stats
// @desc    Get dashboard statistics (doctor, patient, appointment counts)
// @access  Private (Admin only)
router.get('/stats', protect, authorize('admin'), getDashboardStats);

// @route   GET /api/dashboard/appointment-stats
// @desc    Get appointment statistics with chart data
// @access  Private (Admin only)
router.get('/appointment-stats', protect, authorize('admin'), getAppointmentStats);

module.exports = router;