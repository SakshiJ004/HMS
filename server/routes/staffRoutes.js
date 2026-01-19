const express = require('express');
const router = express.Router();
const {
    getAllStaffs,
    getStaffById,
    createStaff,
    updateStaff,
    deleteStaff
} = require('../controllers/staffController');

// GET all staffs
router.get('/', getAllStaffs);

// GET single staff by ID
router.get('/:id', getStaffById);

// POST create new staff
router.post('/', createStaff);

// PUT update staff
router.put('/:id', updateStaff);

// DELETE staff
router.delete('/:id', deleteStaff);

module.exports = router;