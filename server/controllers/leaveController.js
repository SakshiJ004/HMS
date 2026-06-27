// controllers/leaveController.js
const Leave = require('../models/Leave');
const Doctor = require('../models/Doctor');
const User = require('../models/User')

// Get all leaves for a specific doctor
exports.getDoctorLeaves = async (req, res) => {
    try {
        const doctorId = req.user._id; // From auth middleware

        const query = { doctor: doctorId };
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }
        const leaves = await Leave.find(query)
            .populate('doctor', 'fullName specialization profileImage')
            .populate('approvedBy', 'fullName')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: leaves,
            count: leaves.length
        });
    } catch (error) {
        console.error('Get doctor leaves error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch leaves',
            error: error.message
        });
    }
};

// Get all leaves (Admin only)
exports.getAllLeaves = async (req, res) => {
    try {
        const query = {};
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }
        const leaves = await Leave.find(query)
            .populate('doctor', 'fullName specialization profileImage department')
            .populate('approvedBy', 'fullName email')
            .sort({ appliedOn: -1 });

        console.log('📋 Total Leaves Found:', leaves.length);  // ✅ Debug log
        console.log('📋 Sample Leave:', leaves[0]);

        res.status(200).json({
            success: true,
            data: leaves,
            count: leaves.length
        });
    } catch (error) {
        console.error('Get all leaves error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch leaves',
            error: error.message
        });
    }
};

// Create new leave (Doctor only)
exports.createLeave = async (req, res) => {
    try {
        const doctorId = req.user._id;
        const { leaveType, fromDate, toDate, reason } = req.body;

        // Validation
        if (!leaveType || !fromDate || !toDate || !reason) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Check if dates are valid
        const from = new Date(fromDate);
        const to = new Date(toDate);

        if (from > to) {
            return res.status(400).json({
                success: false,
                message: 'From date cannot be after to date'
            });
        }

        // Check for overlapping leaves
        const overlappingLeave = await Leave.findOne({
            doctor: doctorId,
            status: { $in: ['Applied', 'Approved'] },
            $or: [
                {
                    fromDate: { $lte: to },
                    toDate: { $gte: from }
                }
            ]
        });

        if (overlappingLeave) {
            return res.status(400).json({
                success: false,
                message: 'You already have a leave application for these dates'
            });
        }

        // Create leave
        const leaveData = {
            doctor: doctorId,
            leaveType,
            fromDate: from,
            toDate: to,
            reason,
            status: 'Applied'
        };
        if (req.user && req.user.hospitalId) {
            leaveData.hospitalId = req.user.hospitalId;
        }
        const newLeave = new Leave(leaveData);

        await newLeave.save();

        // Populate doctor details
        await newLeave.populate('doctor', 'fullName specialization profileImage');

        res.status(201).json({
            success: true,
            message: 'Leave application submitted successfully',
            data: newLeave
        });
    } catch (error) {
        console.error('Create leave error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create leave',
            error: error.message
        });
    }
};

// Update leave status (Admin only)
exports.updateLeaveStatus = async (req, res) => {
    try {
        const { leaveId } = req.params;
        const { status, adminRemarks } = req.body;
        const adminId = req.user._id;

        // Validation
        if (!['Approved', 'Rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status. Must be Approved or Rejected'
            });
        }

        const leave = await Leave.findById(leaveId);

        if (!leave) {
            return res.status(404).json({
                success: false,
                message: 'Leave not found'
            });
        }

        if (leave.status !== 'Applied') {
            return res.status(400).json({
                success: false,
                message: 'This leave has already been processed'
            });
        }

        // Update leave
        leave.status = status;
        leave.approvedBy = adminId;
        leave.approvedOn = new Date();
        if (adminRemarks) {
            leave.adminRemarks = adminRemarks;
        }

        await leave.save();
        await leave.populate('doctor', 'fullName specialization profileImage');
        await leave.populate('approvedBy', 'fullName');

        res.status(200).json({
            success: true,
            message: `Leave ${status.toLowerCase()} successfully`,
            data: leave
        });
    } catch (error) {
        console.error('Update leave status error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update leave status',
            error: error.message
        });
    }
};

// Get leave statistics
exports.getLeaveStatistics = async (req, res) => {
    try {
        const doctorId = req.user._id;

        const matchStage = { doctor: doctorId };
        if (req.user && req.user.hospitalId) {
            matchStage.hospitalId = req.user.hospitalId;
        }
        const stats = await Leave.aggregate([
            { $match: matchStage },
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 },
                    totalDays: { $sum: '$numberOfDays' }
                }
            }
        ]);

        const formattedStats = {
            applied: 0,
            approved: 0,
            rejected: 0,
            totalDaysUsed: 0
        };

        stats.forEach(stat => {
            if (stat._id === 'Applied') {
                formattedStats.applied = stat.count;
            } else if (stat._id === 'Approved') {
                formattedStats.approved = stat.count;
                formattedStats.totalDaysUsed = stat.totalDays;
            } else if (stat._id === 'Rejected') {
                formattedStats.rejected = stat.count;
            }
        });

        res.status(200).json({
            success: true,
            data: formattedStats
        });
    } catch (error) {
        console.error('Get leave statistics error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch statistics',
            error: error.message
        });
    }
};

// Admin Statistics (for admin dashboard cards)
exports.getAdminLeaveStatistics = async (req, res) => {
    try {
        const User = require('../models/User'); // Import User model

        const employeeQuery = {
            role: { $in: ['doctor', 'nurse', 'staff', 'receptionist'] },
            status: 'Active'
        };
        if (req.user && req.user.hospitalId) {
            employeeQuery.hospitalId = req.user.hospitalId;
        }
        // Total active employees who can take leaves
        const totalEmployees = await User.countDocuments(employeeQuery);

        // Current approved leaves (people on leave today)
        const today = new Date();
        const leaveQuery = {
            status: 'Approved',
            fromDate: { $lte: today },
            toDate: { $gte: today }
        };
        if (req.user && req.user.hospitalId) {
            leaveQuery.hospitalId = req.user.hospitalId;
        }
        const currentApprovedLeaves = await Leave.countDocuments(leaveQuery);

        res.status(200).json({
            success: true,
            data: {
                totalEmployees,
                totalPresent: totalEmployees - currentApprovedLeaves
            }
        });
    } catch (error) {
        console.error('Get admin statistics error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch statistics',
            error: error.message
        });
    }
};

module.exports = exports;