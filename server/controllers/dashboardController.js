const User = require('../models/User');
const Appointment = require('../models/Appointment');

/**
 * Get dashboard statistics
 * @route   GET /api/dashboard/stats
 * @access  Private (Admin only)
 */
const getDashboardStats = async (req, res) => {
    try {
        // Get counts
        // const doctorCount = await User.countDocuments({ role: 'doctor' });
        // const patientCount = await User.countDocuments({ role: 'patient' });
        // const appointmentCount = await Appointment.countDocuments();

        // Use Promise.all to fetch all counts in parallel (INSTANT!)
        const [doctorCount, patientCount, appointmentCount] = await Promise.all([
            User.countDocuments({ role: 'doctor' }),
            User.countDocuments({ role: 'patient' }),
            Appointment.countDocuments()
        ]);

        res.status(200).json({
            success: true,
            data: {
                doctors: doctorCount,
                patients: patientCount,
                appointments: appointmentCount,
            },
        });
    } catch (error) {
        console.error('Get dashboard stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching dashboard statistics',
            error: error.message,
        });
    }
};

/**
 * Get appointment statistics by status
 * @route   GET /api/dashboard/appointment-stats
 * @access  Private (Admin only)
 */
// const getAppointmentStats = async (req, res) => {
//     try {
//         const { period = 'monthly' } = req.query;

//         // Get status counts
//         const allAppointments = await Appointment.countDocuments();
//         const cancelled = await Appointment.countDocuments({ status: 'Cancelled' });
//         const rescheduled = await Appointment.countDocuments({ status: 'Scheduled' });
//         const completed = await Appointment.countDocuments({ status: 'Checked Out' });

//         // Get monthly data for chart
//         const currentYear = new Date().getFullYear();
//         const monthlyData = [];

//         for (let month = 0; month < 12; month++) {
//             const startDate = new Date(currentYear, month, 1);
//             const endDate = new Date(currentYear, month + 1, 0);

//             const monthAppointments = await Appointment.find({
//                 appointmentDate: { $gte: startDate, $lte: endDate }
//             });

//             const completedCount = monthAppointments.filter(a => a.status === 'Checked Out').length;
//             const ongoingCount = monthAppointments.filter(a =>
//                 a.status === 'Confirmed' || a.status === 'Checked In'
//             ).length;
//             const rescheduledCount = monthAppointments.filter(a => a.status === 'Scheduled').length;

//             monthlyData.push({
//                 month: new Date(currentYear, month).toLocaleString('default', { month: 'short' }),
//                 completed: completedCount,
//                 ongoing: ongoingCount,
//                 rescheduled: rescheduledCount,
//                 total: monthAppointments.length
//             });
//         }

//         // Get weekly data
//         const weeklyData = [];
//         const today = new Date();

//         for (let i = 6; i >= 0; i--) {
//             const date = new Date(today);
//             date.setDate(date.getDate() - i);
//             const startOfDay = new Date(date.setHours(0, 0, 0, 0));
//             const endOfDay = new Date(date.setHours(23, 59, 59, 999));

//             const dayAppointments = await Appointment.find({
//                 appointmentDate: { $gte: startOfDay, $lte: endOfDay }
//             });

//             const completedCount = dayAppointments.filter(a => a.status === 'Checked Out').length;
//             const ongoingCount = dayAppointments.filter(a =>
//                 a.status === 'Confirmed' || a.status === 'Checked In'
//             ).length;
//             const rescheduledCount = dayAppointments.filter(a => a.status === 'Scheduled').length;

//             weeklyData.push({
//                 day: date.toLocaleDateString('en-US', { weekday: 'short' }),
//                 completed: completedCount,
//                 ongoing: ongoingCount,
//                 rescheduled: rescheduledCount,
//                 total: dayAppointments.length
//             });
//         }

//         // Get yearly data
//         const yearlyData = [];
//         const currentYearStart = new Date(currentYear, 0, 1);

//         for (let year = currentYear - 4; year <= currentYear; year++) {
//             const startDate = new Date(year, 0, 1);
//             const endDate = new Date(year, 11, 31);

//             const yearAppointments = await Appointment.find({
//                 appointmentDate: { $gte: startDate, $lte: endDate }
//             });

//             const completedCount = yearAppointments.filter(a => a.status === 'Checked Out').length;
//             const ongoingCount = yearAppointments.filter(a =>
//                 a.status === 'Confirmed' || a.status === 'Checked In'
//             ).length;
//             const rescheduledCount = yearAppointments.filter(a => a.status === 'Scheduled').length;

//             yearlyData.push({
//                 year: year.toString(),
//                 completed: completedCount,
//                 ongoing: ongoingCount,
//                 rescheduled: rescheduledCount,
//                 total: yearAppointments.length
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: {
//                 summary: {
//                     allAppointments,
//                     cancelled,
//                     rescheduled,
//                     completed,
//                 },
//                 chartData: {
//                     monthly: monthlyData,
//                     weekly: weeklyData,
//                     yearly: yearlyData
//                 }
//             },
//         });
//     } catch (error) {
//         console.error('Get appointment stats error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error fetching appointment statistics',
//             error: error.message,
//         });
//     }
// };


const getAppointmentStats = async (req, res) => {
    try {
        const { period = 'monthly' } = req.query;
        const currentYear = new Date().getFullYear();
        const today = new Date();

        // Fetch ALL appointments at once with only needed fields (FAST!)
        const allAppointments = await Appointment.find({}, 'status appointmentDate').lean();

        // Calculate summary counts in memory (INSTANT!)
        const summary = {
            allAppointments: allAppointments.length,
            cancelled: allAppointments.filter(a => a.status === 'Cancelled').length,
            rescheduled: allAppointments.filter(a => a.status === 'Scheduled').length,
            completed: allAppointments.filter(a => a.status === 'Checked Out').length,
        };

        // Process MONTHLY data (in memory - FAST!)
        const monthlyData = Array.from({ length: 12 }, (_, month) => {
            const startDate = new Date(currentYear, month, 1);
            const endDate = new Date(currentYear, month + 1, 0);

            const monthAppointments = allAppointments.filter(a => {
                const aptDate = new Date(a.appointmentDate);
                return aptDate >= startDate && aptDate <= endDate;
            });

            return {
                month: new Date(currentYear, month).toLocaleString('default', { month: 'short' }),
                completed: monthAppointments.filter(a => a.status === 'Checked Out').length,
                ongoing: monthAppointments.filter(a => a.status === 'Confirmed' || a.status === 'Checked In').length,
                rescheduled: monthAppointments.filter(a => a.status === 'Scheduled').length,
                total: monthAppointments.length
            };
        });

        // Process WEEKLY data (last 7 days - in memory - FAST!)
        const weeklyData = Array.from({ length: 7 }, (_, i) => {
            const date = new Date(today);
            date.setDate(date.getDate() - (6 - i));
            const startOfDay = new Date(date.setHours(0, 0, 0, 0));
            const endOfDay = new Date(date.setHours(23, 59, 59, 999));

            const dayAppointments = allAppointments.filter(a => {
                const aptDate = new Date(a.appointmentDate);
                return aptDate >= startOfDay && aptDate <= endOfDay;
            });

            return {
                day: new Date(startOfDay).toLocaleDateString('en-US', { weekday: 'short' }),
                completed: dayAppointments.filter(a => a.status === 'Checked Out').length,
                ongoing: dayAppointments.filter(a => a.status === 'Confirmed' || a.status === 'Checked In').length,
                rescheduled: dayAppointments.filter(a => a.status === 'Scheduled').length,
                total: dayAppointments.length
            };
        });

        // Process YEARLY data (last 5 years - in memory - FAST!)
        const yearlyData = Array.from({ length: 5 }, (_, i) => {
            const year = currentYear - (4 - i);
            const startDate = new Date(year, 0, 1);
            const endDate = new Date(year, 11, 31);

            const yearAppointments = allAppointments.filter(a => {
                const aptDate = new Date(a.appointmentDate);
                return aptDate >= startDate && aptDate <= endDate;
            });

            return {
                year: year.toString(),
                completed: yearAppointments.filter(a => a.status === 'Checked Out').length,
                ongoing: yearAppointments.filter(a => a.status === 'Confirmed' || a.status === 'Checked In').length,
                rescheduled: yearAppointments.filter(a => a.status === 'Scheduled').length,
                total: yearAppointments.length
            };
        });

        res.status(200).json({
            success: true,
            data: {
                summary,
                chartData: {
                    monthly: monthlyData,
                    weekly: weeklyData,
                    yearly: yearlyData
                }
            },
        });
    } catch (error) {
        console.error('Get appointment stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching appointment statistics',
            error: error.message,
        });
    }
};

/**
 * Get top doctors by appointment count
 * @route   GET /api/dashboard/top-doctors
 * @access  Private (Admin only)
 */
const getTopDoctors = async (req, res) => {
    try {
        const { period = 'weekly' } = req.query;

        // Calculate date range based on period
        let startDate;
        const today = new Date();

        if (period === 'weekly') {
            startDate = new Date(today.setDate(today.getDate() - 7));
        } else if (period === 'monthly') {
            startDate = new Date(today.setMonth(today.getMonth() - 1));
        } else if (period === 'yearly') {
            startDate = new Date(today.setFullYear(today.getFullYear() - 1));
        }

        // Get appointments grouped by doctor
        const topDoctors = await Appointment.aggregate([
            {
                $match: {
                    appointmentDate: { $gte: startDate }
                }
            },
            {
                $group: {
                    _id: '$doctor',
                    bookingsCount: { $sum: 1 }
                }
            },
            {
                $sort: { bookingsCount: -1 }
            },
            {
                $limit: 3
            },
            {
                $lookup: {
                    from: 'users',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'doctorInfo'
                }
            },
            {
                $unwind: '$doctorInfo'
            },
            {
                $project: {
                    _id: '$doctorInfo._id',
                    name: '$doctorInfo.fullName',
                    specialization: '$doctorInfo.specialization',
                    profilePicture: '$doctorInfo.profileImage',
                    bookingsCount: 1,
                    status: '$doctorInfo.status'
                }
            }
        ]);

        res.status(200).json({
            success: true,
            data: topDoctors
        });
    } catch (error) {
        console.error('Get top doctors error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching top doctors',
            error: error.message,
        });
    }
};

/**
 * Get department statistics
 * @route   GET /api/dashboard/department-stats
 * @access  Private (Admin only)
 */
const getDepartmentStats = async (req, res) => {
    try {
        const { period = 'weekly' } = req.query;

        // Calculate date range
        let startDate;
        const today = new Date();

        if (period === 'weekly') {
            startDate = new Date(today.setDate(today.getDate() - 7));
        } else if (period === 'monthly') {
            startDate = new Date(today.setMonth(today.getMonth() - 1));
        } else if (period === 'yearly') {
            startDate = new Date(today.setFullYear(today.getFullYear() - 1));
        }

        // Get appointments grouped by department
        const departmentStats = await Appointment.aggregate([
            {
                $match: {
                    appointmentDate: { $gte: startDate }
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'doctor',
                    foreignField: '_id',
                    as: 'doctorInfo'
                }
            },
            {
                $unwind: '$doctorInfo'
            },
            {
                $group: {
                    _id: '$doctorInfo.department',
                    count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 }
            },
            {
                $limit: 3
            },
            {
                $project: {
                    department: '$_id',
                    count: 1,
                    _id: 0
                }
            }
        ]);

        res.status(200).json({
            success: true,
            data: departmentStats
        });
    } catch (error) {
        console.error('Get department stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching department statistics',
            error: error.message,
        });
    }
};

/**
 * Get doctors with availability status
 * @route   GET /api/dashboard/doctors-schedule
 * @access  Private (Admin only)
 */
const getDoctorsSchedule = async (req, res) => {
    try {
        // Get all doctors with their basic info
        const doctors = await User.find(
            { role: 'doctor' },
            'fullName specialization profileImage status'
        )
            .limit(4)
            .lean();

        // Count availability statuses
        const available = await User.countDocuments({ role: 'doctor', status: 'Available' });
        const unavailable = await User.countDocuments({ role: 'doctor', status: 'Unavailable' });
        const onLeave = await User.countDocuments({ role: 'doctor', status: 'On Leave' });

        res.status(200).json({
            success: true,
            data: {
                doctors,
                counts: {
                    available,
                    unavailable,
                    onLeave
                }
            }
        });
    } catch (error) {
        console.error('Get doctors schedule error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching doctors schedule',
            error: error.message,
        });
    }
};

// UPDATE module.exports to include new functions
module.exports = {
    getDashboardStats,
    getAppointmentStats,
    getTopDoctors,
    getDepartmentStats,
    getDoctorsSchedule,
};
