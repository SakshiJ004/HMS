// models/Leave.js
const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    leaveType: {
        type: String,
        required: true,
        enum: [
            'Casual Leave',
            'Sick Leave',
            'Maternity Leave',
            'Paternity Leave',
            'Compensatory Leave',
            'Emergency Leave',
            'Bereavement Leave',
            'Study/Exam Leave',
            'Paid Leave',
            'Unpaid Leave'
        ]
    },
    fromDate: {
        type: Date,
        required: true
    },
    toDate: {
        type: Date,
        required: true
    },
    numberOfDays: {
        type: Number,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Applied', 'Approved', 'Rejected'],
        default: 'Applied'
    },
    appliedOn: {
        type: Date,
        default: Date.now
    },
    approvedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    approvedOn: {
        type: Date
    },
    adminRemarks: {
        type: String
    }
}, {
    timestamps: true
});

// Calculate number of days before saving
leaveSchema.pre('validate', function (next) {
    if (this.fromDate && this.toDate) {
        const diffTime = Math.abs(this.toDate - this.fromDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both days
        this.numberOfDays = diffDays;
    }
    next();
});

const Leave = mongoose.model('Leave', leaveSchema);

module.exports = Leave;