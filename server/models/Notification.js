const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    // Target user (admin only)
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    // Notification type
    type: {
        type: String,
        enum: [
            'newAppointment',
            'appointmentCancellation',
            'labReportReady',
            'followUpReminders',
            'billingNotification',
            'systemAlerts'
        ],
        required: true
    },

    // Notification title
    title: {
        type: String,
        required: true
    },

    // Notification message
    message: {
        type: String,
        required: true
    },

    // Related entity (appointment, patient, etc.)
    relatedEntity: {
        entityType: String, // 'Appointment', 'Patient', 'Doctor', etc.
        entityId: mongoose.Schema.Types.ObjectId
    },

    // Read status
    isRead: {
        type: Boolean,
        default: false
    },

    // Read at timestamp
    readAt: {
        type: Date,
        default: null
    },

    // Notification icon/image
    icon: {
        type: String,
        default: null
    },

    // Action URL (where to redirect on click)
    actionUrl: {
        type: String,
        default: null
    },

    // Metadata for additional info
    metadata: {
        type: mongoose.Schema.Types.Mixed,
        default: {}
    }

}, {
    timestamps: true
});

// Index for faster queries
notificationSchema.index({ user: 1, isRead: 1, createdAt: -1 });

module.exports = mongoose.model('Notification', notificationSchema);