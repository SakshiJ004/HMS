const express = require('express');
const router = express.Router();
const controller = require('../controllers/prescriptionController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/', protect, authorize('doctor'), controller.getDoctorPrescriptions);
router.get('/:id', protect, authorize('doctor'), controller.getPrescriptionById);

module.exports = router;