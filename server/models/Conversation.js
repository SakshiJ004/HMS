const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    participants: [{
        name: { type: String, required: true },
        image: { type: String, default: '' }
    }],
    lastMessage: {
        type: String,
        default: ''
    },
    lastMessageTime: {
        type: Date,
        default: Date.now
    },
    unreadCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Conversation', conversationSchema);