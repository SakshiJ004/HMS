// models/LeaveType.js
const mongoose = require('mongoose');

const leaveTypeSchema = new mongoose.Schema({
    leaveType: {
        type: String,
        required: true,
        unique: true
    },
    leaveQuota: {
        type: Number,
        required: true,
        min: 0
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    }
}, {
    timestamps: true
});

const LeaveType = mongoose.model('LeaveType', leaveTypeSchema);

module.exports = LeaveType;