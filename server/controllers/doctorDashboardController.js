const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const User = require('../models/User')
const mongoose = require('mongoose');

/**
 * Get doctor dashboard stats
 */
const getDoctorStats = async (req, res) => {
    try {
        const doctorId = new mongoose.Types.ObjectId(req.user._id);

        // Get current date
        const now = new Date();
        const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        // Total appointments
        const totalAppointments = await Appointment.countDocuments({ doctor: doctorId });
        const lastWeekTotal = await Appointment.countDocuments({
            doctor: doctorId,
            createdAt: { $gte: lastWeek },
        });
        const totalChange = totalAppointments > 0 ? Math.round((lastWeekTotal / totalAppointments) * 100) : 0;

        // Online consultations
        const onlineConsultations = await Appointment.countDocuments({
            doctor: doctorId,
            appointmentType: 'Online Consultation',
        });
        const lastWeekOnline = await Appointment.countDocuments({
            doctor: doctorId,
            appointmentType: 'Online Consultation',
            createdAt: { $gte: lastWeek },
        });
        const onlineChange = onlineConsultations > 0 ? Math.round((lastWeekOnline / onlineConsultations) * 100) : 0;

        // Cancelled appointments
        const cancelledAppointments = await Appointment.countDocuments({
            doctor: doctorId,
            status: 'Cancelled',
        });
        const lastWeekCancelled = await Appointment.countDocuments({
            doctor: doctorId,
            status: 'Cancelled',
            createdAt: { $gte: lastWeek },
        });
        const cancelledChange = cancelledAppointments > 0 ? Math.round((lastWeekCancelled / cancelledAppointments) * 100) : 0;

        res.status(200).json({
            success: true,
            data: {
                totalAppointments,
                onlineConsultations,
                cancelledAppointments,
                totalAppointmentsChange: totalChange,
                onlineConsultationsChange: onlineChange,
                cancelledAppointmentsChange: cancelledChange,
            },
        });
    } catch (error) {
        console.error('Get doctor stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching dashboard stats',
            error: error.message,
        });
    }
};

/**
 * Get appointment chart data
 */
const getAppointmentChart = async (req, res) => {
    try {
        const doctorId = new mongoose.Types.ObjectId(req.user._id);
        const { period = 'monthly' } = req.query;

        const now = new Date();
        let chartData = [];

        if (period === 'monthly') {
            // Get data for all 12 months of current year
            for (let month = 0; month < 12; month++) {
                const startDate = new Date(now.getFullYear(), month, 1);
                const endDate = new Date(now.getFullYear(), month + 1, 0);

                const monthData = await Appointment.aggregate([
                    {
                        $match: {
                            doctor: doctorId,
                            appointmentDate: { $gte: startDate, $lte: endDate }
                        }
                    },
                    {
                        $group: {
                            _id: null,
                            total: { $sum: 1 },
                            completed: {
                                $sum: { $cond: [{ $eq: ['$status', 'Checked Out'] }, 1, 0] }
                            }
                        }
                    }
                ]);

                chartData.push({
                    _id: month + 1,
                    month: month + 1,
                    total: monthData[0]?.total || 0,
                    completed: monthData[0]?.completed || 0
                });
            }
        } else if (period === 'weekly') {
            // Get data for last 7 weeks
            for (let week = 6; week >= 0; week--) {
                const startDate = new Date(now.getTime() - (week * 7 * 24 * 60 * 60 * 1000));
                startDate.setHours(0, 0, 0, 0);
                const endDate = new Date(startDate.getTime() + (7 * 24 * 60 * 60 * 1000));

                const weekData = await Appointment.aggregate([
                    {
                        $match: {
                            doctor: doctorId,
                            appointmentDate: { $gte: startDate, $lt: endDate }
                        }
                    },
                    {
                        $group: {
                            _id: null,
                            total: { $sum: 1 },
                            completed: {
                                $sum: { $cond: [{ $eq: ['$status', 'Checked Out'] }, 1, 0] }
                            }
                        }
                    }
                ]);

                chartData.push({
                    _id: 6 - week,
                    week: 6 - week,
                    total: weekData[0]?.total || 0,
                    completed: weekData[0]?.completed || 0
                });
            }
        } else if (period === 'yearly') {
            // Get data for last 5 years
            for (let yearOffset = 4; yearOffset >= 0; yearOffset--) {
                const year = now.getFullYear() - yearOffset;
                const startDate = new Date(year, 0, 1);
                const endDate = new Date(year, 11, 31);

                const yearData = await Appointment.aggregate([
                    {
                        $match: {
                            doctor: doctorId,
                            appointmentDate: { $gte: startDate, $lte: endDate }
                        }
                    },
                    {
                        $group: {
                            _id: null,
                            total: { $sum: 1 },
                            completed: {
                                $sum: { $cond: [{ $eq: ['$status', 'Checked Out'] }, 1, 0] }
                            }
                        }
                    }
                ]);

                chartData.push({
                    _id: year,
                    year: year,
                    total: yearData[0]?.total || 0,
                    completed: yearData[0]?.completed || 0
                });
            }
        }

        res.status(200).json({
            success: true,
            data: chartData,
        });
    } catch (error) {
        console.error('Get appointment chart error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching chart data',
            error: error.message,
        });
    }
};

/**
 * Get upcoming appointment
 */
const getUpcomingAppointment = async (req, res) => {
    try {
        const doctorId = new mongoose.Types.ObjectId(req.user._id);
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        const upcomingAppointment = await Appointment.findOne({
            doctor: doctorId,
            appointmentDate: { $gte: now },
            status: { $in: ['Scheduled', 'Confirmed'] },
        })
            .populate('patient', 'fullName email phone profileImage')
            .sort({ appointmentDate: 1, appointmentTime: 1 })
            .limit(1);

        res.status(200).json({
            success: true,
            data: upcomingAppointment || null,
        });
    } catch (error) {
        console.error('Get upcoming appointment error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching upcoming appointment',
            error: error.message,
        });
    }
};

/**
 * Get upcoming appointment with filter
 */
const getUpcomingAppointmentWithFilter = async (req, res) => {
    try {
        const doctorId = new mongoose.Types.ObjectId(req.user._id);
        const { filter = 'today' } = req.query;

        const now = new Date();
        let startDate = new Date();
        let endDate = new Date();

        if (filter === 'today') {
            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(23, 59, 59, 999);
        } else if (filter === 'week') {
            startDate.setHours(0, 0, 0, 0);
            endDate = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000));
            endDate.setHours(23, 59, 59, 999);
        } else if (filter === 'month') {
            startDate.setHours(0, 0, 0, 0);
            endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
        }

        // ✅ Changed: Get multiple appointments (limit 3) instead of 1
        const upcomingAppointments = await Appointment.find({
            doctor: doctorId,
            appointmentDate: { $gte: startDate, $lte: endDate },
            status: { $in: ['Scheduled', 'Confirmed'] },
        })
            .populate('patient', 'fullName email phone profileImage')
            .sort({ appointmentDate: 1, appointmentTime: 1 })
            .limit(3);  // ✅ Changed from .findOne() and limit(1)

        res.status(200).json({
            success: true,
            data: upcomingAppointments,  // ✅ Return array instead of single object
        });
    } catch (error) {
        console.error('Get upcoming appointment error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching upcoming appointment',
            error: error.message,
        });
    }
};

/**
 * Get recent appointments
 */
const getRecentAppointments = async (req, res) => {
    try {
        const doctorId = new mongoose.Types.ObjectId(req.user._id);

        const recentAppointments = await Appointment.find({ doctor: doctorId })
            .populate('patient', 'fullName email phone profileImage')
            .populate('doctor', 'consultationCharge')
            .sort({ appointmentDate: -1 })
            .limit(5);

        // Add consultation charge to each appointment
        const appointmentsWithFee = recentAppointments.map(apt => ({
            ...apt.toObject(),
            consultationCharge: apt.doctor?.consultationCharge || 0
        }));

        res.status(200).json({
            success: true,
            data: appointmentsWithFee,
        });
    } catch (error) {
        console.error('Get recent appointments error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching recent appointments',
            error: error.message,
        });
    }
};
/**
 * Get additional dashboard stats
 */
const getAdditionalStats = async (req, res) => {
    try {
        const doctorId = new mongoose.Types.ObjectId(req.user._id);
        const now = new Date();
        const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        // Total unique patients
        const totalPatients = await Appointment.distinct('patient', { doctor: doctorId });
        const lastWeekPatients = await Appointment.distinct('patient', {
            doctor: doctorId,
            createdAt: { $gte: lastWeek },
        });
        const patientsChange = totalPatients.length > 0
            ? Math.round((lastWeekPatients.length / totalPatients.length) * 100)
            : 0;

        // Video consultations
        const videoConsultations = await Appointment.countDocuments({
            doctor: doctorId,
            appointmentType: 'Online Consultation',
        });
        const lastWeekVideo = await Appointment.countDocuments({
            doctor: doctorId,
            appointmentType: 'Online Consultation',
            createdAt: { $gte: lastWeek },
        });
        const videoChange = videoConsultations > 0
            ? Math.round((lastWeekVideo / videoConsultations) * 100)
            : 0;

        // Rescheduled appointments
        const rescheduled = await Appointment.countDocuments({
            doctor: doctorId,
            status: 'Rescheduled',
        });
        const lastWeekRescheduled = await Appointment.countDocuments({
            doctor: doctorId,
            status: 'Rescheduled',
            createdAt: { $gte: lastWeek },
        });
        const rescheduledChange = rescheduled > 0
            ? Math.round((lastWeekRescheduled / rescheduled) * 100)
            : 0;

        // Pre-visit bookings (scheduled appointments)
        const preVisit = await Appointment.countDocuments({
            doctor: doctorId,
            status: { $in: ['Scheduled', 'Confirmed'] },
        });
        const lastWeekPreVisit = await Appointment.countDocuments({
            doctor: doctorId,
            status: { $in: ['Scheduled', 'Confirmed'] },
            createdAt: { $gte: lastWeek },
        });
        const preVisitChange = preVisit > 0
            ? Math.round((lastWeekPreVisit / preVisit) * 100)
            : 0;

        // Walk-in bookings (appointments created on same day as appointment date)
        const walkIn = await Appointment.countDocuments({
            doctor: doctorId,
            $expr: {
                $eq: [
                    { $dateToString: { format: '%Y-%m-%d', date: '$appointmentDate' } },
                    { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }
                ]
            }
        });
        const lastWeekWalkIn = await Appointment.countDocuments({
            doctor: doctorId,
            createdAt: { $gte: lastWeek },
            $expr: {
                $eq: [
                    { $dateToString: { format: '%Y-%m-%d', date: '$appointmentDate' } },
                    { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } }
                ]
            }
        });
        const walkInChange = walkIn > 0
            ? Math.round((lastWeekWalkIn / walkIn) * 100)
            : 0;

        // Follow-ups (repeat patients - patients with more than 1 appointment)
        const followUps = await Appointment.aggregate([
            { $match: { doctor: doctorId } },
            { $group: { _id: '$patient', count: { $sum: 1 } } },
            { $match: { count: { $gt: 1 } } },
            { $count: 'total' }
        ]);
        const followUpsCount = followUps.length > 0 ? followUps[0].total : 0;

        res.status(200).json({
            success: true,
            data: {
                totalPatients: totalPatients.length,
                patientsChange,
                videoConsultations,
                videoChange,
                rescheduled,
                rescheduledChange,
                preVisit,
                preVisitChange,
                walkIn,
                walkInChange,
                followUps: followUpsCount,
            },
        });
    } catch (error) {
        console.error('Get additional stats error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching additional stats',
            error: error.message,
        });
    }
};

/**
 * Get appointment statistics for pie chart
 */
const getAppointmentStatistics = async (req, res) => {
    try {
        const doctorId = new mongoose.Types.ObjectId(req.user._id);
        const { period = 'monthly' } = req.query;

        const now = new Date();
        let startDate;

        if (period === 'monthly') {
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        } else if (period === 'weekly') {
            startDate = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
        } else if (period === 'yearly') {
            startDate = new Date(now.getFullYear(), 0, 1);
        }

        const statistics = await Appointment.aggregate([
            {
                $match: {
                    doctor: doctorId,
                    appointmentDate: { $gte: startDate }
                }
            },
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            }
        ]);

        // Format data for frontend
        const completed = statistics.find(s => s._id === 'Checked Out')?.count || 0;
        const pending = statistics.find(s => ['Scheduled', 'Confirmed'].includes(s._id))?.count || 0;
        const cancelled = statistics.find(s => s._id === 'Cancelled')?.count || 0;

        res.status(200).json({
            success: true,
            data: {
                completed,
                pending,
                cancelled
            }
        });
    } catch (error) {
        console.error('Get appointment statistics error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching statistics',
            error: error.message,
        });
    }
};

/**
 * Get top patients by appointment count
 */
const getTopPatients = async (req, res) => {
    try {
        const doctorId = new mongoose.Types.ObjectId(req.user._id);
        const { period = 'weekly' } = req.query;

        const now = new Date();
        let startDate;

        if (period === 'monthly') {
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        } else if (period === 'weekly') {
            startDate = new Date(now.getTime() - (7 * 24 * 60 * 60 * 1000));
        } else if (period === 'yearly') {
            startDate = new Date(now.getFullYear(), 0, 1);
        }

        const topPatients = await Appointment.aggregate([
            {
                $match: {
                    doctor: doctorId,
                    appointmentDate: { $gte: startDate }
                }
            },
            {
                $group: {
                    _id: '$patient',
                    appointmentCount: { $sum: 1 }
                }
            },
            {
                $sort: { appointmentCount: -1 }
            },
            {
                $limit: 5
            },
            {
                $lookup: {
                    from: 'users',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'patientInfo'
                }
            },
            {
                $unwind: '$patientInfo'
            },
            {
                $project: {
                    _id: '$patientInfo._id',
                    fullName: '$patientInfo.fullName',
                    email: '$patientInfo.email',
                    phone: '$patientInfo.phone',
                    profileImage: '$patientInfo.profileImage',
                    appointmentCount: 1
                }
            }
        ]);

        res.status(200).json({
            success: true,
            data: topPatients
        });
    } catch (error) {
        console.error('Get top patients error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching top patients',
            error: error.message,
        });
    }
};

const getAllDoctorAppointments = async (req, res) => {
    try {
        const doctorId = new mongoose.Types.ObjectId(req.user._id);

        const appointments = await Appointment.find({ doctor: doctorId })
            .populate('patient', 'fullName email phone profileImage')
            .populate('doctor', 'consultationCharge')
            .sort({ appointmentDate: -1, appointmentTime: -1 });

        const appointmentsWithFee = appointments.map(apt => ({
            ...apt.toObject(),
            consultationCharge: apt.doctor?.consultationCharge || 0
        }));

        res.status(200).json({
            success: true,
            data: appointmentsWithFee,
        });
    } catch (error) {
        console.error('Get all appointments error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching appointments',
            error: error.message,
        });
    }
};

module.exports = {
    getDoctorStats,
    getAppointmentChart,
    getUpcomingAppointment,
    getUpcomingAppointmentWithFilter,
    getRecentAppointments,
    getAdditionalStats,
    getAppointmentStatistics,
    getTopPatients,
    getAllDoctorAppointments,
};