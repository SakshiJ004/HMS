// const Conversation = require('../models/Conversation');
// const Message = require('../models/Message');

// // Get all conversations
// exports.getConversations = async (req, res) => {
//     try {
//         const conversations = await Conversation.find().sort({ lastMessageTime: -1 });
//         res.status(200).json({ success: true, data: conversations });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// // Get or create conversation
// exports.createConversation = async (req, res) => {
//     try {
//         const { participantName, participantImage, myName, myImage } = req.body;

//         if (!participantName || !myName) {
//             return res.status(400).json({ success: false, message: 'Participant names required' });
//         }

//         // ✅ Check if conversation already exists between these two users
//         const existing = await Conversation.findOne({
//             $and: [
//                 { 'participants.name': myName },
//                 { 'participants.name': participantName }
//             ]
//         });

//         if (existing) {
//             return res.status(200).json({ success: true, data: existing, alreadyExists: true });
//         }

//         const conversation = new Conversation({
//             participants: [
//                 { name: myName, image: myImage || '' },
//                 { name: participantName, image: participantImage || '' }
//             ],
//             lastMessage: '',
//             lastMessageTime: new Date(),
//             unreadCount: 0
//         });

//         await conversation.save();
//         res.status(201).json({ success: true, data: conversation });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// // Get messages for a conversation
// exports.getMessages = async (req, res) => {
//     try {
//         const { conversationId } = req.params;
//         const messages = await Message.find({ conversationId }).sort({ createdAt: 1 });
//         await Message.updateMany({ conversationId, isRead: false }, { isRead: true });
//         await Conversation.findByIdAndUpdate(conversationId, { unreadCount: 0 });
//         res.status(200).json({ success: true, data: messages });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// // Send a message
// exports.sendMessage = async (req, res) => {
//     try {
//         const { conversationId, sender, senderImage, text } = req.body;
//         if (!conversationId || !sender || !text) {
//             return res.status(400).json({ success: false, message: 'conversationId, sender, text required' });
//         }

//         const message = new Message({ conversationId, sender, senderImage: senderImage || '', text });
//         await message.save();

//         await Conversation.findByIdAndUpdate(conversationId, {
//             lastMessage: text.length > 40 ? text.slice(0, 40) + '...' : text,
//             lastMessageTime: new Date(),
//             $inc: { unreadCount: 1 }
//         });

//         res.status(201).json({ success: true, data: message });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// // Delete a message
// exports.deleteMessage = async (req, res) => {
//     try {
//         await Message.findByIdAndDelete(req.params.id);
//         res.status(200).json({ success: true, message: 'Message deleted' });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// // Delete conversation
// exports.deleteConversation = async (req, res) => {
//     try {
//         await Message.deleteMany({ conversationId: req.params.id });
//         await Conversation.findByIdAndDelete(req.params.id);
//         res.status(200).json({ success: true, message: 'Conversation deleted' });
//     } catch (error) {
//         res.status(500).json({ success: false, message: error.message });
//     }
// };

// // ✅ Get all chat users — Staff + Doctors combined
// exports.getChatUsers = async (req, res) => {
//     try {
//         const Staff = require('../models/Staff');
//         const Doctor = require('../models/Doctor');

//         const [staffList, doctorList] = await Promise.all([
//             Staff.find({}, 'name email role designation image').lean(),
//             Doctor.find({}, 'fullName email department profileImage').lean()
//         ]);

//         const users = [
//             ...staffList.map(s => ({
//                 _id: s._id,
//                 name: s.name,
//                 email: s.email || '',
//                 role: s.role || s.designation || 'Staff',
//                 image: s.image || '',
//                 type: 'staff'
//             })),
//             ...doctorList.map(d => ({
//                 _id: d._id,
//                 name: d.fullName,
//                 email: d.email || '',
//                 role: `Doctor${d.department ? ' - ' + d.department : ''}`,
//                 image: d.profileImage || '',
//                 type: 'doctor'
//             }))
//         ];

//         res.status(200).json({ success: true, data: users });
//     } catch (error) {
//         console.error('getChatUsers error:', error);
//         res.status(500).json({ success: false, message: error.message });
//     }
// };


const Conversation = require('../models/Conversation');
const Message = require('../models/Message');
const User = require('../models/User');

// ✅ Get conversations filtered by logged-in user name
exports.getConversations = async (req, res) => {
    try {
        const { myName } = req.query;

        if (!myName) {
            return res.status(400).json({ success: false, message: 'myName required' });
        }

        const conversations = await Conversation.find({
            'participants.name': myName
        }).sort({ lastMessageTime: -1 }).lean();

        // ✅ Add myUnreadCount for this user
        const result = conversations.map(conv => ({
            ...conv,
            myUnreadCount: conv.unreadCounts?.[myName] || 0
        }));

        res.status(200).json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Create or return existing conversation
exports.createConversation = async (req, res) => {
    try {
        const { participantName, participantImage, myName, myImage } = req.body;

        if (!participantName || !myName) {
            return res.status(400).json({ success: false, message: 'Names required' });
        }

        // Check if already exists
        const existing = await Conversation.findOne({
            $and: [
                { 'participants.name': myName },
                { 'participants.name': participantName }
            ]
        });

        if (existing) {
            const conv = existing.toObject();
            conv.myUnreadCount = conv.unreadCounts?.[myName] || 0;
            return res.status(200).json({ success: true, data: conv, alreadyExists: true });
        }

        const conversation = new Conversation({
            participants: [
                { name: myName, image: myImage || '' },
                { name: participantName, image: participantImage || '' }
            ],
            lastMessage: '',
            lastMessageTime: new Date(),
            unreadCounts: { [myName]: 0, [participantName]: 0 }
        });

        await conversation.save();
        const conv = conversation.toObject();
        conv.myUnreadCount = 0;
        res.status(201).json({ success: true, data: conv });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Get messages — mark MY unread as 0
exports.getMessages = async (req, res) => {
    try {
        const { conversationId } = req.params;
        const { myName } = req.query;

        const messages = await Message.find({ conversationId })
            .sort({ createdAt: 1 })
            .lean();

        // ✅ Reset only MY unread count (not the other person's)
        if (myName) {
            await Conversation.findByIdAndUpdate(conversationId, {
                [`unreadCounts.${myName}`]: 0
            });
        }

        res.status(200).json({ success: true, data: messages });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Send message — increment OTHER participant's unread count only
exports.sendMessage = async (req, res) => {
    try {
        const { conversationId, sender, senderImage, text } = req.body;
        if (!conversationId || !sender || !text) {
            return res.status(400).json({ success: false, message: 'Required fields missing' });
        }

        const message = new Message({
            conversationId,
            sender,
            senderImage: senderImage || '',
            text
        });
        await message.save();

        // ✅ Find the conversation to get participants
        const conv = await Conversation.findById(conversationId);
        if (conv) {
            // Find the OTHER participant (not the sender)
            const otherParticipant = conv.participants.find(p => p.name !== sender);

            const updateObj = {
                lastMessage: text.length > 50 ? text.slice(0, 50) + '...' : text,
                lastMessageTime: new Date(),
            };

            // ✅ Only increment the OTHER person's unread count
            if (otherParticipant) {
                const currentCount = conv.unreadCounts?.get(otherParticipant.name) || 0;
                updateObj[`unreadCounts.${otherParticipant.name}`] = currentCount + 1;
            }

            await Conversation.findByIdAndUpdate(conversationId, updateObj);
        }

        res.status(201).json({ success: true, data: message });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete message
exports.deleteMessage = async (req, res) => {
    try {
        await Message.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete conversation + all messages
exports.deleteConversation = async (req, res) => {
    try {
        await Message.deleteMany({ conversationId: req.params.id });
        await Conversation.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ✅ Get users for New Chat modal — filtered by role
// ?forRole=admin  → returns Staff + Doctors + Patients (admin sees everyone)
// ?forRole=doctor → returns Admin + Patients only
// ?forRole=patient → returns Admin + Doctors only
exports.getChatUsers = async (req, res) => {
    try {
        const { forRole } = req.query;
        const Staff = require('../models/Staff');

        let users = [];

        if (forRole === 'admin') {
            // Admin can chat with Staff + Doctors + Patients
            const [staffList, doctorList, patientList] = await Promise.all([
                Staff.find({}, 'name email role designation image').lean(),
                User.find({ role: 'doctor' }, 'fullName email department profileImage').lean(),
                User.find({ role: 'patient' }, 'fullName email profileImage').lean(),
            ]);

            users = [
                ...staffList.map(s => ({
                    _id: s._id,
                    name: s.name,
                    email: s.email || '',
                    role: s.role || s.designation || 'Staff',
                    image: s.image || '',
                    type: 'staff'
                })),
                ...doctorList.map(d => ({
                    _id: d._id,
                    name: d.fullName,
                    email: d.email || '',
                    role: `Doctor${d.department ? ' - ' + d.department : ''}`,
                    image: d.profileImage || '',
                    type: 'doctor'
                })),
                ...patientList.map(p => ({
                    _id: p._id,
                    name: p.fullName,
                    email: p.email || '',
                    role: 'Patient',
                    image: p.profileImage || '',
                    type: 'patient'
                })),
            ];

        } else if (forRole === 'doctor') {
            // Doctor can chat with Admin + Patients only
            const [adminList, patientList] = await Promise.all([
                User.find({ role: 'admin' }, 'fullName email profileImage').lean(),
                User.find({ role: 'patient' }, 'fullName email profileImage').lean(),
            ]);

            users = [
                ...adminList.map(a => ({
                    _id: a._id,
                    name: a.fullName,
                    email: a.email || '',
                    role: 'Admin',
                    image: a.profileImage || '',
                    type: 'admin'
                })),
                ...patientList.map(p => ({
                    _id: p._id,
                    name: p.fullName,
                    email: p.email || '',
                    role: 'Patient',
                    image: p.profileImage || '',
                    type: 'patient'
                })),
            ];

        } else if (forRole === 'patient') {
            // Patient can chat with Admin + Doctors only
            const [adminList, doctorList] = await Promise.all([
                User.find({ role: 'admin' }, 'fullName email profileImage').lean(),
                User.find({ role: 'doctor' }, 'fullName email department profileImage').lean(),
            ]);

            users = [
                ...adminList.map(a => ({
                    _id: a._id,
                    name: a.fullName,
                    email: a.email || '',
                    role: 'Admin',
                    image: a.profileImage || '',
                    type: 'admin'
                })),
                ...doctorList.map(d => ({
                    _id: d._id,
                    name: d.fullName,
                    email: d.email || '',
                    role: `Doctor${d.department ? ' - ' + d.department : ''}`,
                    image: d.profileImage || '',
                    type: 'doctor'
                })),
            ];

        } else {
            // Default: Staff + Doctors
            const [staffList, doctorList] = await Promise.all([
                Staff.find({}, 'name email role designation image').lean(),
                User.find({ role: 'doctor' }, 'fullName email department profileImage').lean(),
            ]);
            users = [
                ...staffList.map(s => ({
                    _id: s._id,
                    name: s.name,
                    email: s.email || '',
                    role: s.role || s.designation || 'Staff',
                    image: s.image || '',
                    type: 'staff'
                })),
                ...doctorList.map(d => ({
                    _id: d._id,
                    name: d.fullName,
                    email: d.email || '',
                    role: `Doctor${d.department ? ' - ' + d.department : ''}`,
                    image: d.profileImage || '',
                    type: 'doctor'
                })),
            ];
        }

        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error('getChatUsers error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
};