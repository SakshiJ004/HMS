const Appointment = require('../models/Appointment');
const User = require('../models/User');
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

        let groupBy;
        let dateRange;
        const now = new Date();

        if (period === 'monthly') {
            groupBy = { month: { $month: '$appointmentDate' } };
            dateRange = new Date(now.getFullYear(), 0, 1);
        } else if (period === 'weekly') {
            groupBy = { week: { $week: '$appointmentDate' } };
            dateRange = new Date(now.getTime() - 7 * 7 * 24 * 60 * 60 * 1000);
        } else {
            groupBy = { year: { $year: '$appointmentDate' } };
            dateRange = new Date(now.getFullYear() - 5, 0, 1);
        }

        const chartData = await Appointment.aggregate([
            {
                $match: {
                    doctor: doctorId,
                    appointmentDate: { $gte: dateRange },
                },
            },
            {
                $group: {
                    _id: groupBy,
                    total: { $sum: 1 },
                    completed: {
                        $sum: {
                            $cond: [{ $eq: ['$status', 'Checked Out'] }, 1, 0],
                        },
                    },
                },
            },
            { $sort: { '_id': 1 } },
        ]);

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
 * Get recent appointments
 */
const getRecentAppointments = async (req, res) => {
    try {
        const doctorId = new mongoose.Types.ObjectId(req.user._id);

        const recentAppointments = await Appointment.find({ doctor: doctorId })
            .populate('patient', 'fullName email phone profileImage')
            .sort({ appointmentDate: -1 })
            .limit(5);

        res.status(200).json({
            success: true,
            data: recentAppointments,
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

module.exports = {
    getDoctorStats,
    getAppointmentChart,
    getUpcomingAppointment,
    getRecentAppointments,
};