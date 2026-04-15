const express = require('express');
const router = express.Router();
const {
    getSecuritySettings,
    changePassword,
    toggleTwoFA,
    toggleLoginAlerts,
    updatePhone,
    removePhone,
    updateEmail,
    deactivateAccount,
    deleteAccount,
} = require('../controllers/securityController');

// ✅ Add your auth middleware — same one you use everywhere
const { protect } = require('../middleware/authMiddleware');
router.use(protect);

router.get('/', getSecuritySettings);   // GET  current security info
router.put('/password', changePassword);        // PUT  change password
router.put('/two-fa', toggleTwoFA);           // PUT  toggle 2FA
router.put('/login-alerts', toggleLoginAlerts);     // PUT  toggle login alerts
router.put('/phone', updatePhone);           // PUT  update phone
router.delete('/phone', removePhone);           // DELETE remove phone
router.put('/email', updateEmail);           // PUT  update email
router.put('/deactivate', deactivateAccount);     // PUT  deactivate
router.delete('/account', deleteAccount);         // DELETE permanently delete

module.exports = router;