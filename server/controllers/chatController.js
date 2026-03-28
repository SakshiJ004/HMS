const Conversation = require('../models/Conversation');
const Message = require('../models/Message');

// Get all conversations
exports.getConversations = async (req, res) => {
    try {
        const conversations = await Conversation.find().sort({ lastMessageTime: -1 });
        res.status(200).json({ success: true, data: conversations });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get or create conversation between two participants
exports.createConversation = async (req, res) => {
    try {
        const { participantName, participantImage, myName, myImage } = req.body;

        if (!participantName || !myName) {
            return res.status(400).json({ success: false, message: 'Participant names required' });
        }

        const conversation = new Conversation({
            participants: [
                { name: myName, image: myImage || '' },
                { name: participantName, image: participantImage || '' }
            ],
            lastMessage: '',
            lastMessageTime: new Date(),
            unreadCount: 0
        });

        await conversation.save();
        res.status(201).json({ success: true, data: conversation });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get messages for a conversation
exports.getMessages = async (req, res) => {
    try {
        const { conversationId } = req.params;
        const messages = await Message.find({ conversationId }).sort({ createdAt: 1 });

        // Mark all as read
        await Message.updateMany({ conversationId, isRead: false }, { isRead: true });
        await Conversation.findByIdAndUpdate(conversationId, { unreadCount: 0 });

        res.status(200).json({ success: true, data: messages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Send a message
exports.sendMessage = async (req, res) => {
    try {
        const { conversationId, sender, senderImage, text } = req.body;

        if (!conversationId || !sender || !text) {
            return res.status(400).json({ success: false, message: 'conversationId, sender, text required' });
        }

        const message = new Message({ conversationId, sender, senderImage: senderImage || '', text });
        await message.save();

        // Update conversation last message
        await Conversation.findByIdAndUpdate(conversationId, {
            lastMessage: text.length > 40 ? text.slice(0, 40) + '...' : text,
            lastMessageTime: new Date(),
            $inc: { unreadCount: 1 }
        });

        res.status(201).json({ success: true, data: message });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete a message
exports.deleteMessage = async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Message deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete conversation
exports.deleteConversation = async (req, res) => {
    try {
        await Message.deleteMany({ conversationId: req.params.id });
        await Conversation.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Conversation deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};