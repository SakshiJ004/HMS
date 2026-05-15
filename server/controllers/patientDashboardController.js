// @ts-nocheck
const Appointment = require('../models/Appointment');
const Prescription = require('../models/Prescription');
const Doctor = require('../models/Doctor');
const mongoose = require('mongoose');

// ─── Helper: string → ObjectId ─────────────────────────────────────────────────
const toObjectId = (id) => new mongoose.Types.ObjectId(String(id));

// ─── getPatientStats ───────────────────────────────────────────────────────────
const getPatientStats = async (req, res) => {
    try {
        const patientId = toObjectId(req.user._id);   // ← fix
        const now = new Date();
        const lastWeek = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

        const totalAppointments = await Appointment.countDocuments({ patient: patientId });
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

// ─── getMyDoctors ──────────────────────────────────────────────────────────────
const getMyDoctors = async (req, res) => {
    try {
        const patientId = toObjectId(req.user._id);   // ← fix: ObjectId

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
            { $limit: 50 },
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
                    phone: '$doctorInfo.phone',
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

// ─── getMyPrescriptions ────────────────────────────────────────────────────────
const getMyPrescriptions = async (req, res) => {
    try {
        const patientId = toObjectId(req.user._id);

        const prescriptions = await Prescription.find({ patient: patientId })
            .populate('doctor', 'fullName department designation profileImage')
            .populate('appointmentId', 'appointmentDate appointmentType')
            .sort({ createdAt: -1 })
            .limit(5)
            .lean();

        res.status(200).json({ success: true, data: prescriptions });
    } catch (error) {
        console.error('Get prescriptions error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── getRecentActivity ─────────────────────────────────────────────────────────
const getRecentActivity = async (req, res) => {
    try {
        const patientId = toObjectId(req.user._id);   // ← fix

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

// ─── getPatientRecentAppointments ──────────────────────────────────────────────
const getPatientRecentAppointments = async (req, res) => {
    try {
        const patientId = toObjectId(req.user._id);
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
            .populate('doctor', 'fullName department designation profileImage')
            .sort({ appointmentDate: -1 })
            .limit(10)
            .lean();

        const doctorIds = [...new Set(
            appointments.map(a => a.doctor?._id?.toString()).filter(Boolean)
        )];

        const doctorDetails = await Doctor.find({ _id: { $in: doctorIds } })
            .select('consultationCharge')
            .lean();

        const doctorChargeMap = {};
        doctorDetails.forEach(d => {
            doctorChargeMap[d._id.toString()] = d.consultationCharge || 0;
        });

        const appointmentsWithFee = appointments.map(apt => ({
            ...apt,
            consultationCharge: doctorChargeMap[apt.doctor?._id?.toString()] || 0,
        }));

        res.status(200).json({ success: true, data: appointmentsWithFee }); // ✅ try च्या आत

    } catch (error) { // ✅ try नंतर catch
        console.error('Get patient recent appointments error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── getPatientUpcomingAppointments ───────────────────────────────────────────
const getPatientUpcomingAppointments = async (req, res) => {
    try {
        const patientId = toObjectId(req.user._id);   // ← fix
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

// ─── getConsultationByDepartment ───────────────────────────────────────────────
const getConsultationByDepartment = async (req, res) => {
    try {
        const patientId = toObjectId(req.user._id);   // ← fix (already होतं, consistent ठेव)
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

        const data = await Appointment.aggregate([
            {
                $match: {
                    patient: patientId,
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

// ─── getRecentTransactions ─────────────────────────────────────────────────────
const getRecentTransactions = async (req, res) => {
    try {
        const patientId = toObjectId(req.user._id);
        const { filter = 'weekly' } = req.query;

        const now = new Date();
        let startDate;

        if (filter === 'weekly') {
            startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        } else if (filter === 'monthly') {
            startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        } else {
            startDate = new Date(now.getFullYear(), 0, 1);
        }

        const transactions = await Appointment.find({
            patient: patientId,
            appointmentDate: { $gte: startDate },
        })
            .populate('doctor', 'fullName department designation profileImage')
            .sort({ appointmentDate: -1 })
            .limit(5)
            .lean();

        // ✅ Doctor IDs collect करा
        const doctorIds = [...new Set(
            transactions.map(t => t.doctor?._id?.toString()).filter(Boolean)
        )];

        // ✅ एकाच query मध्ये सगळ्या doctors चे consultationCharge fetch करा
        const doctorDetails = await Doctor.find({ _id: { $in: doctorIds } })
            .select('consultationCharge')
            .lean();

        // ✅ Map बनवा
        const doctorChargeMap = {};
        doctorDetails.forEach(d => {
            doctorChargeMap[d._id.toString()] = d.consultationCharge || 0;
        });

        // ✅ Simple map — async नाही
        const txData = transactions.map(apt => ({
            _id: apt._id,
            doctor: apt.doctor,
            amount: doctorChargeMap[apt.doctor?._id?.toString()] || 0,
            status: apt.status === 'Checked Out' ? 'Completed' :
                apt.status === 'Cancelled' ? 'Cancelled' :
                    apt.status === 'Confirmed' ? 'Confirmed' : 'Scheduled',
            date: apt.appointmentDate,
            appointmentType: apt.appointmentType,
        }));

        res.status(200).json({ success: true, data: txData });
    } catch (error) {
        console.error('Get recent transactions error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// ─── getAllPatientAppointments ──────────────────────────────────────────────────
const getAllPatientAppointments = async (req, res) => {
    try {
        const patientId = toObjectId(req.user._id);   // ← fix

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