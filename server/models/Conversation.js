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
    // ✅ Per-user unread count — key = participant name, value = count
    // Example: { "sakshi": 0, "Priyanka Desai": 2 }
    unreadCounts: {
        type: Map,
        of: Number,
        default: {}
    }
}, { timestamps: true });

module.exports = mongoose.model('Conversation', conversationSchema);