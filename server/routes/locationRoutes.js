const express = require('express');
const router = express.Router();
const {
    getAllLocations,
    getLocationById,
    createLocation,
    updateLocation,
    deleteLocation
} = require('../controllers/locationController');

// GET all locations
router.get('/', getAllLocations);

// GET single location by ID
router.get('/:id', getLocationById);

// POST create new location
router.post('/', createLocation);

// PUT update location
router.put('/:id', updateLocation);

// DELETE location
router.delete('/:id', deleteLocation);

module.exports = router;