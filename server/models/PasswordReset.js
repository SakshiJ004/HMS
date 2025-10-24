const mongoose = require('mongoose');

const passwordResetSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    resetToken: {
        type: String,
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
    isUsed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

// Index to automatically delete expired tokens
passwordResetSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('PasswordReset', passwordResetSchema);