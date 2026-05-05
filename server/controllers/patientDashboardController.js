// @ts-nocheck
const Appointment = require('../models/Appointment');
const Prescription = require('../models/Prescription');
const mongoose = require('mongoose');

/**
 * Get patient dashboard stats
 */
const getPatientStats = async (req, res) => {
    try {
        const patientId = req.user._id;
        const now = new Date();
        const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        // DEBUG: पहिले raw count बघ
        const rawCount = await Appointment.countDocuments({});
        const patientCount = await Appointment.countDocuments({ patient: patientId });

        console.log('=== PATIENT DASHBOARD DEBUG ===');
        console.log('Patient ID:', patientId);
        console.log('Patient ID string:', req.user._id);
        console.log('Total appointments in DB:', rawCount);
        console.log('Appointments for this patient:', patientCount);

        // Sample appointment to check field names
        const sampleApt = await Appointment.findOne({}).lean();
        console.log('Sample appointment fields:', sampleApt ? Object.keys(sampleApt) : 'none');
        console.log('Sample patient field value:', sampleApt?.patient);
        console.log('================================');

        const totalAppointments = patientCount;
        const lastWeekTotal = await Appointment.countDocuments({
            patient: patientId,
            createdAt: { $gte: lastWeek },
        });
        const totalChange = totalAppointments > 0
            ? Math.round((lastWeekTotal / totalAppointments) * 100)
            : 0;

        const onlineConsultations = await Appointment.countDocuments({
            patient: patientId,
            appointmentType: 'Online Consultation',
        });
        const lastWeekOnline = await Appointment.countDocuments({
            patient: patientId,
            appointmentType: 'Online Consultation',
            createdAt: { $gte: lastWeek },
        });
        const onlineChange = onlineConsultations > 0
            ? Math.round((lastWeekOnline / onlineConsultations) * 100)
            : 0;

        const upcomingCount = await Appointment.countDocuments({
            patient: patientId,
            appointmentDate: { $gte: now },
            status: { $in: ['Scheduled', 'Confirmed', 'Pending'] },
        });

        const cancelledAppointments = await Appointment.countDocuments({
            patient: patientId,
            status: 'Cancelled',
        });

        res.status(200).json({
            success: true,
            data: {
                totalAppointments,
                onlineConsultations,
                upcomingCount,
                cancelledAppointments,
                totalChange,
                onlineChange,
            },
        });
    } catch (error) {
        console.error('Get patient stats error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Get my doctors (unique doctors patient has visited)
 */
const getMyDoctors = async (req, res) => {
    try {
        const patientId = req.user._id;

        const myDoctors = await Appointment.aggregate([
            { $match: { patient: patientId } },
            {
                $group: {
                    _id: '$doctor',
                    bookingCount: { $sum: 1 },
                    lastVisit: { $max: '$appointmentDate' },
                }
            },
            { $sort: { bookingCount: -1 } },
            { $limit: 5 },
            {
                $lookup: {
                    from: 'users',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'doctorInfo',
                }
            },
            { $unwind: '$doctorInfo' },
            {
                $project: {
                    _id: '$doctorInfo._id',
                    fullName: '$doctorInfo.fullName',
                    email: '$doctorInfo.email',
                    profileImage: '$doctorInfo.profileImage',
                    department: '$doctorInfo.department',
                    designation: '$doctorInfo.designation',
                    bookingCount: 1,
                    lastVisit: 1,
                }
            }
        ]);

        res.status(200).json({ success: true, data: myDoctors });
    } catch (error) {
        console.error('Get my doctors error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Get prescriptions for patient
 */
const getMyPrescriptions = async (req, res) => {
    try {
        const patientId = req.user._id;

        let prescriptions = [];

        try {
            // Try to fetch from Prescription model if it exists
            prescriptions = await Prescription.find({ patient: patientId })
                .populate('doctor', 'fullName department')
                .sort({ createdAt: -1 })
                .limit(5);
        } catch (err) {
            // If Prescription model doesn't exist or has issues, return empty
            console.log('Prescription model not available:', err.message);
        }

        res.status(200).json({ success: true, data: prescriptions });
    } catch (error) {
        console.error('Get prescriptions error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Get recent activity (recent appointments as activity feed)
 */
const getRecentActivity = async (req, res) => {
    try {
        const patientId = req.user._id;

        const recentActivities = await Appointment.find({ patient: patientId })
            .populate('doctor', 'fullName department designation')
            .sort({ updatedAt: -1 })
            .limit(5);

        const activities = recentActivities.map(apt => ({
            _id: apt._id,
            type: apt.status === 'Cancelled' ? 'cancelled' :
                apt.status === 'Checked Out' ? 'completed' : 'scheduled',
            title: apt.doctor
                ? `Appointment with ${apt.doctor.department || 'Doctor'}`
                : 'Appointment',
            doctorName: apt.doctor?.fullName || 'N/A',
            description: apt.reason || apt.appointmentType || '',
            date: apt.updatedAt || apt.appointmentDate,
            status: apt.status,
        }));

        res.status(200).json({ success: true, data: activities });
    } catch (error) {
        console.error('Get recent activity error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Get recent appointments for patient (filtered)
 */
const getPatientRecentAppointments = async (req, res) => {
    try {
        const patientId = req.user._id;
        const { filter = 'week' } = req.query;

        const now = new Date();
        let startDate = new Date();
        let endDate = new Date();

        if (filter === 'today') {
            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(23, 59, 59, 999);
        } else if (filter === 'week') {
            startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(23, 59, 59, 999);
        } else if (filter === 'month') {
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
        }

        const appointments = await Appointment.find({
            patient: patientId,
            appointmentDate: { $gte: startDate, $lte: endDate },
        })
            .populate('doctor', 'fullName department designation consultationCharge profileImage')
            .sort({ appointmentDate: -1 })
            .limit(10);

        const appointmentsWithFee = appointments.map(apt => ({
            ...apt.toObject(),
            consultationCharge: apt.doctor?.consultationCharge || 0,
        }));

        res.status(200).json({ success: true, data: appointmentsWithFee });
    } catch (error) {
        console.error('Get patient recent appointments error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Get upcoming appointments for patient
 */
const getPatientUpcomingAppointments = async (req, res) => {
    try {
        const patientId = req.user._id;
        const now = new Date();
        now.setHours(0, 0, 0, 0);

        const appointments = await Appointment.find({
            patient: patientId,
            appointmentDate: { $gte: now },
            status: { $in: ['Scheduled', 'Confirmed', 'Pending'] },
        })
            .populate('doctor', 'fullName department designation consultationCharge profileImage')
            .sort({ appointmentDate: 1, appointmentTime: 1 })
            .limit(5);

        res.status(200).json({ success: true, data: appointments });
    } catch (error) {
        console.error('Get patient upcoming appointments error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Get consultation by department (for chart)
 */
const getConsultationByDepartment = async (req, res) => {
    try {
        const patientId = req.user._id;
        const { period = 'monthly' } = req.query;
        const now = new Date();
        let startDate;

        if (period === 'monthly') {
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        } else if (period === 'weekly') {
            startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        } else {
            startDate = new Date(now.getFullYear(), 0, 1);
        }

        // department field directly Appointment model मध्ये आहे — lookup नको
        const data = await Appointment.aggregate([
            {
                $match: {
                    patient: new mongoose.Types.ObjectId(patientId),
                    appointmentDate: { $gte: startDate },
                }
            },
            {
                $group: {
                    _id: '$department',
                    count: { $sum: 1 },
                }
            },
            { $sort: { count: -1 } },
            { $limit: 6 },
        ]);

        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Get recent transactions (appointments with fees)
 */
const getRecentTransactions = async (req, res) => {
    try {
        const patientId = req.user._id;
        const { filter = 'weekly' } = req.query;

        const now = new Date();
        let startDate;

        if (filter === 'weekly') {
            startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        } else if (filter === 'monthly') {
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        } else if (filter === 'yearly') {
            startDate = new Date(now.getFullYear(), 0, 1);
        }

        const transactions = await Appointment.find({
            patient: patientId,
            appointmentDate: { $gte: startDate },
        })
            .populate('doctor', 'fullName department designation consultationCharge profileImage')
            .sort({ appointmentDate: -1 })
            .limit(5);

        const txData = transactions.map(apt => ({
            _id: apt._id,
            doctor: apt.doctor,
            amount: apt.doctor?.consultationCharge || 0,
            status: apt.status === 'Checked Out' ? 'Success' :
                apt.status === 'Cancelled' ? 'Failed' : 'Pending',
            date: apt.appointmentDate,
            appointmentType: apt.appointmentType,
        }));

        res.status(200).json({ success: true, data: txData });
    } catch (error) {
        console.error('Get recent transactions error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * Get all patient appointments (for full list view)
 */
const getAllPatientAppointments = async (req, res) => {
    try {
        const patientId = req.user._id;

        const appointments = await Appointment.find({ patient: patientId })
            .populate('doctor', 'fullName department designation consultationCharge profileImage')
            .sort({ appointmentDate: -1 });

        const appointmentsWithFee = appointments.map(apt => ({
            ...apt.toObject(),
            consultationCharge: apt.doctor?.consultationCharge || 0,
        }));

        res.status(200).json({ success: true, data: appointmentsWithFee });
    } catch (error) {
        console.error('Get all patient appointments error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    getPatientStats,
    getMyDoctors,
    getMyPrescriptions,
    getRecentActivity,
    getPatientRecentAppointments,
    getPatientUpcomingAppointments,
    getConsultationByDepartment,
    getRecentTransactions,
    getAllPatientAppointments,
};