const express = require('express');
const router = express.Router();
const {
    getSpecializations,
    createSpecialization,
    updateSpecialization,
    deleteSpecialization
} = require('../controllers/specializationController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.get('/', protect, getSpecializations);
router.post('/', protect, authorize('admin'), createSpecialization);
router.put('/:id', protect, authorize('admin'), updateSpecialization);
router.delete('/:id', protect, authorize('admin'), deleteSpecialization);

module.exports = router;