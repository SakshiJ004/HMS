const mongoose = require('mongoose');

const blogCommentSchema = new mongoose.Schema({
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false // Optional for guest comments
    },
    customerName: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        trim: true
    },
    comment: {
        type: String,
        required: [true, 'Comment is required']
    },
    status: {
        type: String,
        enum: ['Pending', 'Published', 'Unpublished', 'Spam'],
        default: 'Pending'
    },
    ipAddress: {
        type: String,
        default: null
    },
    userAgent: {
        type: String,
        default: null
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('BlogComment', blogCommentSchema);