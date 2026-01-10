const express = require('express');
const router = express.Router();
const {
    getAllDepartments,
    getDepartmentById,
    createDepartment,
    updateDepartment,
    deleteDepartment
} = require('../controllers/departmentController');

// GET all departments
router.get('/', getAllDepartments);

// GET single department by ID
router.get('/:id', getDepartmentById);

// POST create new department
router.post('/', createDepartment);

// PUT update department
router.put('/:id', updateDepartment);

// DELETE department
router.delete('/:id', deleteDepartment);

module.exports = router;