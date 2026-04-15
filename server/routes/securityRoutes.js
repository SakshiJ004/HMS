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


const { protect } = require('../middleware/authMiddleware');
const { verifyToken } = require('../middleware/authMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

router.use(protect); 

router.get('/', getSecuritySettings);
router.put('/password', changePassword);
router.put('/two-fa', toggleTwoFA);
router.put('/login-alerts', toggleLoginAlerts);
router.put('/phone', updatePhone);
router.delete('/phone', removePhone);
router.put('/email', updateEmail);
router.put('/deactivate', deactivateAccount);
router.delete('/account', deleteAccount);

module.exports = router;