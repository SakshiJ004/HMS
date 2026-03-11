const express = require('express');
const router = express.Router();
const {
    getAllServices,
    getServiceById,
    createService,
    updateService,
    deleteService
} = require('../controllers/serviceController');

// GET all services
router.get('/', getAllServices);

// GET single service by ID
router.get('/:id', getServiceById);

// POST create new service
router.post('/', createService);

// PUT update service
router.put('/:id', updateService);

// DELETE service
router.delete('/:id', deleteService);

module.exports = router;