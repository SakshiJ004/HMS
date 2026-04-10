// const express = require('express');
// const router = express.Router();
// const {
//     getConversations,
//     createConversation,
//     getMessages,
//     sendMessage,
//     deleteMessage,
//     deleteConversation,
//     getChatUsers
// } = require('../controllers/chatController');

// router.get('/conversations', getConversations);
// router.post('/conversations', createConversation);
// router.get('/messages/:conversationId', getMessages);
// router.post('/messages', sendMessage);
// router.delete('/messages/:id', deleteMessage);
// router.delete('/conversations/:id', deleteConversation);
// router.get('/users', getChatUsers); // ✅ Staff + Doctors combined

// module.exports = router;


const express = require('express');
const router = express.Router();
const {
    getConversations,
    createConversation,
    getMessages,
    sendMessage,
    deleteMessage,
    deleteConversation,
    getChatUsers
} = require('../controllers/chatController');

router.get('/conversations', getConversations);   // ?myName=sakshi filter
router.post('/conversations', createConversation);
router.get('/messages/:conversationId', getMessages);
router.post('/messages', sendMessage);
router.delete('/messages/:id', deleteMessage);
router.delete('/conversations/:id', deleteConversation);
router.get('/users', getChatUsers);

module.exports = router;