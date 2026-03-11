// backend/routes/serviceRoutes.js
const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/authMiddleware');
const Service = require('../models/Service');

// ============================================================
// GET /api/services  ← All services with search, filter, sort
// ============================================================
router.get('/', protect, async (req, res) => {
    try {
        const { sortBy = 'recent', status, department, search } = req.query;

        const filter = {};
        if (status) filter.status = status;
        if (department) filter.department = { $regex: new RegExp(department, 'i') };
        if (search) filter.name = { $regex: new RegExp(search, 'i') };

        const sortOrder = sortBy === 'oldest' ? 1 : -1;

        const services = await Service.find(filter).sort({ createdAt: sortOrder });

        res.status(200).json({
            success: true,
            data: services,
            total: services.length,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// ============================================================
// POST /api/services  ← Add new service
// ============================================================
router.post('/', protect, authorize('admin'), async (req, res) => {
    try {
        const { name, department, price } = req.body;

        if (!name || !department || price === undefined) {
            return res.status(400).json({ success: false, message: 'Name, department and price are required' });
        }

        // Duplicate check
        const existing = await Service.findOne({
            name: { $regex: new RegExp(`^${name.trim()}$`, 'i') },
            department: { $regex: new RegExp(`^${department.trim()}$`, 'i') },
        });
        if (existing) {
            return res.status(400).json({ success: false, message: 'Service already exists in this department' });
        }

        const service = await Service.create({
            name: name.trim(),
            department: department.trim(),
            price: parseFloat(price),
        });

        res.status(201).json({
            success: true,
            message: 'Service added successfully',
            data: service,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// ============================================================
// PUT /api/services/:id  ← Update service
// ============================================================
router.put('/:id', protect, authorize('admin'), async (req, res) => {
    try {
        const { name, department, price, status } = req.body;

        if (!name || !department || price === undefined) {
            return res.status(400).json({ success: false, message: 'Name, department and price are required' });
        }

        const updated = await Service.findByIdAndUpdate(
            req.params.id,
            { $set: { name: name.trim(), department: department.trim(), price: parseFloat(price), status } },
            { new: true, runValidators: false }
        );

        if (!updated) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Service updated successfully',
            data: updated,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

// ============================================================
// DELETE /api/services/:id
// ============================================================
router.delete('/:id', protect, authorize('admin'), async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ success: false, message: 'Service not found' });
        }

        await Service.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Service deleted successfully',
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;