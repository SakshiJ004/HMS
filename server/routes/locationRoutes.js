const express = require('express');
const router = express.Router();
const {
    getAllLocations,
    getLocationById,
    createLocation,
    updateLocation,
    deleteLocation
} = require('../controllers/locationController');

const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getAllLocations);

// GET single location by ID\
router.get('/:id', protect, getLocationById);

// POST create new 
router.post('/', protect, createLocation);

// PUT update location
router.put('/:id', protect, updateLocation);

// DELETE location
router.delete('/:id', protect, deleteLocation);

module.exports = router;