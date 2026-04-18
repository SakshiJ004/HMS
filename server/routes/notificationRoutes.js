const express = require('express');
const router = express.Router();
const {
    getNotifications,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    getNotificationPreferences,
    updateNotificationPreferences
} = require('../controllers/notificationController');
const { protect } = require('../middleware/authMiddleware');

// All routes require authentication
router.use(protect);

// Notification CRUD
router.get('/', getNotifications);                    // GET all notifications
router.put('/:id/read', markAsRead);                  // PUT mark as read
router.put('/mark-all-read', markAllAsRead);          // PUT mark all as read
router.delete('/:id', deleteNotification);            // DELETE notification

// Notification Preferences
router.get('/preferences', getNotificationPreferences);      // GET preferences
router.put('/preferences', updateNotificationPreferences);   // PUT preferences

module.exports = router;