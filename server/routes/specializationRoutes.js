// ============================================================
// backend/routes/specializationRoutes.js - FIXED VERSION
// Doctor count ची bug fix केली
// ============================================================

const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const Specialization = require('../models/Specialization');
const Doctor = require('../models/Doctor');

router.get('/list', protect, async (req, res) => {
    try {
        const specializations = await Specialization.find({ status: 'Active' })
            .select('name')
            .sort({ name: 1 });

        res.status(200).json({
            success: true,
            data: specializations
        });
    } catch (error) {
        console.error('Get specializations list error:', error);
        res.status(500).json({ success: false, message: error.message });
    }
});

// GET all specializations
router.get('/', protect, async (req, res) => {
    try {
        const { sortBy = 'recent', status } = req.query;

        const filter = {};
        if (status) filter.status = status;

        const sortOrder = sortBy === 'oldest' ? 1 : -1;

        const specializations = await Specialization.find(filter)
            .sort({ createdAt: sortOrder });

        // ✅ FIXED: Doctor count - department field वापरतो, status filter नाही
        // Doctor model मध्ये department field आहे (Transcript वरून confirm)
        const specializationsWithCount = await Promise.all(
            specializations.map(async (spec) => {
                const doctorCount = await Doctor.countDocuments({
                    // ✅ Discriminator मध्ये 'role' field automatically 'doctor' असतो
                    // त्यामुळे Doctor.countDocuments() directly वापरा
                    department: spec.name, // ✅ Doctor schema मधला field
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

        // Duplicate check (case-insensitive)
        const existing = await Specialization.findOne({
            name: { $regex: new RegExp(`^${name.trim()}$`, 'i') }
        });
        if (existing) {
            return res.status(400).json({ success: false, message: 'Specialization already exists' });
        }

        const specialization = await Specialization.create({ name: name.trim(), description });

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

        // Duplicate check (exclude current)
        const existing = await Specialization.findOne({
            name: { $regex: new RegExp(`^${name.trim()}$`, 'i') },
            _id: { $ne: req.params.id }
        });
        if (existing) {
            return res.status(400).json({ success: false, message: 'Specialization name already exists' });
        }

        const updated = await Specialization.findByIdAndUpdate(
            req.params.id,
            { $set: { name: name.trim(), description, status } },
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

        // ✅ FIXED: Doctor model use करा
        const doctorCount = await Doctor.countDocuments({
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

// ============================================================
// DEBUGGING: जर count अजूनही 0 येत असेल तर हा debug route add करा
// ============================================================
router.get('/debug-count', protect, async (req, res) => {
    const Doctor = require('../models/Doctor');
    const doctors = await Doctor.find({}).select('fullName department role');
    res.json({ doctors: doctors.map(d => ({ name: d.fullName, dept: d.department, role: d.role })) });
});