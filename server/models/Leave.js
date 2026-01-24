const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // ✅ Reference to User model
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
            ref: 'User'  // ✅ Reference to User model for admin
        },
        respondedAt: Date,
        remarks: String
    }
}, {
    timestamps: true
});

// Auto calculate number of days before saving
leaveSchema.pre('save', function (next) {
    if (this.fromDate && this.toDate) {
        const timeDiff = this.toDate.getTime() - this.fromDate.getTime();
        const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;

        if (this.dayType === 'Half Day') {
            this.numberOfDays = 0.5;
        } else {
            this.numberOfDays = daysDiff;
        }
    }
    next();
});

// Index for faster queries
leaveSchema.index({ doctorId: 1, status: 1 });
leaveSchema.index({ appliedOn: -1 });

module.exports = mongoose.model('Leave', leaveSchema);