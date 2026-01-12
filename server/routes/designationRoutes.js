const express = require('express');
const router = express.Router();
const {
    getAllDesignations,
    getDesignationById,
    createDesignation,
    updateDesignation,
    deleteDesignation
} = require('../controllers/designationController');

// GET all designations
router.get('/', getAllDesignations);

// GET single designation by ID
router.get('/:id', getDesignationById);

// POST create new designation
router.post('/', createDesignation);

// PUT update designation
router.put('/:id', updateDesignation);

// DELETE designation
router.delete('/:id', deleteDesignation);

module.exports = router;