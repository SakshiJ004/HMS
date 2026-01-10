const express = require('express');
const router = express.Router();
const Department = require('../models/Department'); // Your Department model

// GET all departments
router.get('/departments', async (req, res) => {
    try {
        const departments = await Department.find().sort({ createdAt: -1 });
        res.json({ success: true, data: departments });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// POST create department
router.post('/departments', async (req, res) => {
    try {
        const { name, description } = req.body;

        const newDepartment = new Department({
            name,
            description,
            numberOfDoctors: 0,
            status: 'Inactive'
        });

        await newDepartment.save();
        res.json({ success: true, data: newDepartment });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// PUT update department
router.put('/departments/:id', async (req, res) => {
    try {
        const { name, description } = req.body;

        const updated = await Department.findByIdAndUpdate(
            req.params.id,
            { name, description },
            { new: true }
        );

        res.json({ success: true, data: updated });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// DELETE department
router.delete('/departments/:id', async (req, res) => {
    try {
        await Department.findByIdAndDelete(req.params.id);
        res.json({ success: true, message: 'Department deleted' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;