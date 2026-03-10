const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const Specialization = require('../models/Specialization');
const User = require('../models/User');

// GET all specializations
router.get('/', protect, async (req, res) => {
    try {
        const { sortBy = 'recent', status } = req.query;

        const filter = {};
        if (status) filter.status = status;

        const sortOrder = sortBy === 'oldest' ? 1 : -1;

        const specializations = await Specialization.find(filter)
            .sort({ createdAt: sortOrder });

        // ✅ Doctor count per specialization
        const specializationsWithCount = await Promise.all(
            specializations.map(async (spec) => {
                const doctorCount = await User.countDocuments({
                    role: 'doctor',
                    department: spec.name,
                    status: 'Available',
                });
                return {
                    ...spec.toObject(),
                    doctorCount,
                };
            })
        );

        res.status(200).json({
            success: true,
            data: specializationsWithCount,
            total: specializationsWithCount.length,
        });
    } catch (error) {
        console.error('Get specializations error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// POST - Add new specialization
router.post('/', protect, authorize('admin'), async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name) {
            return res.status(400).json({ success: false, message: 'Specialization name is required' });
        }

        // Check duplicate
        const existing = await Specialization.findOne({ name: { $regex: new RegExp(`^${name}$`, 'i') } });
        if (existing) {
            return res.status(400).json({ success: false, message: 'Specialization already exists' });
        }

        const specialization = await Specialization.create({ name, description });

        res.status(201).json({
            success: true,
            message: 'Specialization added successfully',
            data: specialization,
        });
    } catch (error) {
        console.error('Add specialization error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// PUT - Update specialization
router.put('/:id', protect, authorize('admin'), async (req, res) => {
    try {
        const { name, description, status } = req.body;

        if (!name) {
            return res.status(400).json({ success: false, message: 'Specialization name is required' });
        }

        // Check duplicate (exclude current)
        const existing = await Specialization.findOne({
            name: { $regex: new RegExp(`^${name}$`, 'i') },
            _id: { $ne: req.params.id }
        });
        if (existing) {
            return res.status(400).json({ success: false, message: 'Specialization name already exists' });
        }

        const updated = await Specialization.findByIdAndUpdate(
            req.params.id,
            { $set: { name, description, status } },
            { new: true, runValidators: false }
        );

        if (!updated) {
            return res.status(404).json({ success: false, message: 'Specialization not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Specialization updated successfully',
            data: updated,
        });
    } catch (error) {
        console.error('Update specialization error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// DELETE - Delete specialization
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
    try {
        const specialization = await Specialization.findById(req.params.id);
        if (!specialization) {
            return res.status(404).json({ success: false, message: 'Specialization not found' });
        }

        // Check if doctors exist with this specialization
        const doctorCount = await User.countDocuments({
            role: 'doctor',
            department: specialization.name,
        });

        if (doctorCount > 0) {
            return res.status(400).json({
                success: false,
                message: `Cannot delete. ${doctorCount} doctor(s) are assigned to this specialization.`,
            });
        }

        await Specialization.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Specialization deleted successfully',
        });
    } catch (error) {
        console.error('Delete specialization error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;