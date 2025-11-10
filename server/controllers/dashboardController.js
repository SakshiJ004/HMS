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
        const doctorCount = await User.countDocuments({ role: 'doctor' });
        const patientCount = await User.countDocuments({ role: 'patient' });
        const appointmentCount = await Appointment.countDocuments();

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
const getAppointmentStats = async (req, res) => {
    try {
        const { period = 'monthly' } = req.query;

        // Get status counts
        const allAppointments = await Appointment.countDocuments();
        const cancelled = await Appointment.countDocuments({ status: 'Cancelled' });
        const rescheduled = await Appointment.countDocuments({ status: 'Scheduled' });
        const completed = await Appointment.countDocuments({ status: 'Checked Out' });

        // Get monthly data for chart
        const currentYear = new Date().getFullYear();
        const monthlyData = [];

        for (let month = 0; month < 12; month++) {
            const startDate = new Date(currentYear, month, 1);
            const endDate = new Date(currentYear, month + 1, 0);

            const monthAppointments = await Appointment.find({
                appointmentDate: { $gte: startDate, $lte: endDate }
            });

            const completedCount = monthAppointments.filter(a => a.status === 'Checked Out').length;
            const ongoingCount = monthAppointments.filter(a => 
                a.status === 'Confirmed' || a.status === 'Checked In'
            ).length;
            const rescheduledCount = monthAppointments.filter(a => a.status === 'Scheduled').length;

            monthlyData.push({
                month: new Date(currentYear, month).toLocaleString('default', { month: 'short' }),
                completed: completedCount,
                ongoing: ongoingCount,
                rescheduled: rescheduledCount,
                total: monthAppointments.length
            });
        }

        // Get weekly data
        const weeklyData = [];
        const today = new Date();
        
        for (let i = 6; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const startOfDay = new Date(date.setHours(0, 0, 0, 0));
            const endOfDay = new Date(date.setHours(23, 59, 59, 999));

            const dayAppointments = await Appointment.find({
                appointmentDate: { $gte: startOfDay, $lte: endOfDay }
            });

            const completedCount = dayAppointments.filter(a => a.status === 'Checked Out').length;
            const ongoingCount = dayAppointments.filter(a => 
                a.status === 'Confirmed' || a.status === 'Checked In'
            ).length;
            const rescheduledCount = dayAppointments.filter(a => a.status === 'Scheduled').length;

            weeklyData.push({
                day: date.toLocaleDateString('en-US', { weekday: 'short' }),
                completed: completedCount,
                ongoing: ongoingCount,
                rescheduled: rescheduledCount,
                total: dayAppointments.length
            });
        }

        // Get yearly data
        const yearlyData = [];
        const currentYearStart = new Date(currentYear, 0, 1);
        
        for (let year = currentYear - 4; year <= currentYear; year++) {
            const startDate = new Date(year, 0, 1);
            const endDate = new Date(year, 11, 31);

            const yearAppointments = await Appointment.find({
                appointmentDate: { $gte: startDate, $lte: endDate }
            });

            const completedCount = yearAppointments.filter(a => a.status === 'Checked Out').length;
            const ongoingCount = yearAppointments.filter(a => 
                a.status === 'Confirmed' || a.status === 'Checked In'
            ).length;
            const rescheduledCount = yearAppointments.filter(a => a.status === 'Scheduled').length;

            yearlyData.push({
                year: year.toString(),
                completed: completedCount,
                ongoing: ongoingCount,
                rescheduled: rescheduledCount,
                total: yearAppointments.length
            });
        }

        res.status(200).json({
            success: true,
            data: {
                summary: {
                    allAppointments,
                    cancelled,
                    rescheduled,
                    completed,
                },
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

module.exports = {
    getDashboardStats,
    getAppointmentStats,
};