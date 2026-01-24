const Leave = require('../models/Leave');
const User = require('../models/User');

// Get all leaves (Admin)
exports.getAllLeaves = async (req, res) => {
    try {
        const leaves = await Leave.find()
            .populate('doctorId', 'fullName specialization profileImage')
            .sort({ createdAt: -1 });

        const formattedLeaves = leaves.map(leave => ({
            _id: leave._id,
            Date: `${formatDate(leave.fromDate)} - ${formatDate(leave.toDate)}`,
            Leave_Type: leave.leaveType,
            Day: leave.numberOfDays === 0.5 ? 'Half Day' : `${leave.numberOfDays} Day${leave.numberOfDays > 1 ? 's' : ''}`,
            Applied_On: formatDate(leave.appliedOn),
            Status: leave.status,
            doctorName: leave.doctorId?.fullName || 'Unknown',
            doctorSpecialization: leave.doctorId?.specialization || 'N/A',
            reason: leave.reason
        }));

        res.status(200).json({
            success: true,
            data: formattedLeaves,
            count: formattedLeaves.length
        });
    } catch (error) {
        console.error('Get leaves error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch leaves',
            error: error.message
        });
    }
};

// Get doctor's own leaves
exports.getDoctorLeaves = async (req, res) => {
    try {
        // Get doctorId from token or body
        const doctorId = req.user?.id || req.body.doctorId || req.query.doctorId;

        if (!doctorId) {
            return res.status(400).json({
                success: false,
                message: 'Doctor ID is required'
            });
        }

        const leaves = await Leave.find({ doctorId })
            .sort({ createdAt: -1 });

        const formattedLeaves = leaves.map(leave => ({
            _id: leave._id,
            Date: `${formatDate(leave.fromDate)} - ${formatDate(leave.toDate)}`,
            Leave_Type: leave.leaveType,
            Day: leave.numberOfDays === 0.5 ? 'Half Day' : `${leave.numberOfDays} Day${leave.numberOfDays > 1 ? 's' : ''}`,
            Applied_On: formatDate(leave.appliedOn),
            Status: leave.status,
            reason: leave.reason
        }));

        res.status(200).json({
            success: true,
            data: formattedLeaves,
            count: formattedLeaves.length
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

// Create leave request (Doctor)
exports.createLeave = async (req, res) => {
    try {
        const { leaveType, fromDate, toDate, dayType, reason, doctorId } = req.body;

        // Get doctorId from token or request body
        const finalDoctorId = req.user?.id || doctorId;

        // Validation
        if (!leaveType || !fromDate || !toDate || !dayType || !reason) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        if (!finalDoctorId) {
            return res.status(400).json({
                success: false,
                message: 'Doctor ID is required'
            });
        }

        // Check if doctor exists
        const doctor = await Doctor.findById(finalDoctorId);
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        // Create leave
        const newLeave = new Leave({
            doctorId: finalDoctorId,
            leaveType,
            fromDate: new Date(fromDate),
            toDate: new Date(toDate),
            dayType,
            reason,
            status: 'Applied'
        });

        await newLeave.save();

        res.status(201).json({
            success: true,
            message: 'Leave request submitted successfully',
            data: newLeave
        });
    } catch (error) {
        console.error('Create leave error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create leave request',
            error: error.message
        });
    }
};

// Update leave status (Admin only)
exports.updateLeaveStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, remarks } = req.body;
        const adminId = req.user.id;

        if (!['Approved', 'Rejected'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status'
            });
        }

        const leave = await Leave.findById(id);
        if (!leave) {
            return res.status(404).json({
                success: false,
                message: 'Leave request not found'
            });
        }

        leave.status = status;
        leave.adminResponse = {
            respondedBy: adminId,
            respondedAt: new Date(),
            remarks: remarks || ''
        };

        await leave.save();

        res.status(200).json({
            success: true,
            message: `Leave request ${status.toLowerCase()} successfully`,
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

// Edit leave (Admin only)
exports.updateLeave = async (req, res) => {
    try {
        const { id } = req.params;
        const { leaveType, fromDate, toDate, dayType, reason } = req.body;

        const leave = await Leave.findById(id);
        if (!leave) {
            return res.status(404).json({
                success: false,
                message: 'Leave request not found'
            });
        }

        // Update fields
        if (leaveType) leave.leaveType = leaveType;
        if (fromDate) leave.fromDate = new Date(fromDate);
        if (toDate) leave.toDate = new Date(toDate);
        if (dayType) leave.dayType = dayType;
        if (reason) leave.reason = reason;

        await leave.save();

        res.status(200).json({
            success: true,
            message: 'Leave updated successfully',
            data: leave
        });
    } catch (error) {
        console.error('Update leave error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update leave',
            error: error.message
        });
    }
};

// Delete leave (Admin only)
exports.deleteLeave = async (req, res) => {
    try {
        const { id } = req.params;

        const leave = await Leave.findByIdAndDelete(id);
        if (!leave) {
            return res.status(404).json({
                success: false,
                message: 'Leave request not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Leave deleted successfully'
        });
    } catch (error) {
        console.error('Delete leave error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete leave',
            error: error.message
        });
    }
};

// Helper function to format date
function formatDate(date) {
    const d = new Date(date);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${d.getDate().toString().padStart(2, '0')} ${months[d.getMonth()]} ${d.getFullYear()}`;
}