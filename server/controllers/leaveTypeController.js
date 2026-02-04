// @ts-nocheck
const LeaveType = require('../models/LeaveType');


// Get all leave types
exports.getLeaveTypes = async (req, res) => {
    try {
        const leaveTypes = await LeaveType.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: leaveTypes,
            count: leaveTypes.length
        });
    } catch (error) {
        console.error('Get leave types error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch leave types',
            error: error.message
        });
    }
};

// Create leave type (Admin only)
exports.createLeaveType = async (req, res) => {
    try {
        const { leaveType, leaveQuota } = req.body;

        if (!leaveType || leaveQuota === undefined) {
            return res.status(400).json({
                success: false,
                message: 'Leave type and quota are required'
            });
        }

        const existingType = await LeaveType.findOne({ leaveType });
        if (existingType) {
            return res.status(400).json({
                success: false,
                message: 'Leave type already exists'
            });
        }

        const newLeaveType = new LeaveType({
            leaveType,
            leaveQuota
        });

        await newLeaveType.save();

        res.status(201).json({
            success: true,
            message: 'Leave type created successfully',
            data: newLeaveType
        });
    } catch (error) {
        console.error('Create leave type error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create leave type',
            error: error.message
        });
    }
};

// Update leave type (Admin only)
exports.updateLeaveType = async (req, res) => {
    try {
        const { id } = req.params;
        const { leaveType, leaveQuota, status } = req.body;

        const updatedLeaveType = await LeaveType.findByIdAndUpdate(
            id,
            { leaveType, leaveQuota, status },
            { new: true, runValidators: true }
        );

        if (!updatedLeaveType) {
            return res.status(404).json({
                success: false,
                message: 'Leave type not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Leave type updated successfully',
            data: updatedLeaveType
        });
    } catch (error) {
        console.error('Update leave type error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update leave type',
            error: error.message
        });
    }
};

// Delete leave type (Admin only)
exports.deleteLeaveType = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedLeaveType = await LeaveType.findByIdAndDelete(id);

        if (!deletedLeaveType) {
            return res.status(404).json({
                success: false,
                message: 'Leave type not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Leave type deleted successfully'
        });
    } catch (error) {
        console.error('Delete leave type error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete leave type',
            error: error.message
        });
    }
};

// controllers/leaveController.js मध्ये add करा

exports.getLeaveStatistics = async (req, res) => {
    try {
        // Total doctors count
        const totalDoctors = await User.countDocuments({ role: 'doctor', status: 'Active' });

        // Current approved leaves
        const currentApprovedLeaves = await Leave.countDocuments({
            status: 'Approved',
            fromDate: { $lte: new Date() },
            toDate: { $gte: new Date() }
        });

        res.status(200).json({
            success: true,
            data: {
                totalDoctors,
                totalPresent: totalDoctors - currentApprovedLeaves
            }
        });
    } catch (error) {
        console.error('Get statistics error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch statistics',
            error: error.message
        });
    }
};

module.exports = exports;