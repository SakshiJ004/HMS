const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
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
    dayType: {
        type: String,
        required: true,
        enum: ['Full Day', 'Half Day']
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
    adminResponse: {
        respondedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Admin'
        },
        respondedAt: Date,
        remarks: String
    }
}, {
    timestamps: true
});

// Virtual field to calculate days
leaveSchema.pre('save', function (next) {
    if (this.fromDate && this.toDate) {
        const timeDiff = this.toDate - this.fromDate;
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
        this.numberOfDays = this.dayType === 'Half Day' ? 0.5 : daysDiff;
    }
    next();
});

module.exports = mongoose.model('Leave', leaveSchema);