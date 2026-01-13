// backend/controllers/holiday.controller.js

const Holiday = require('../models/Holiday.model');

// Get all holidays
exports.getAllHolidays = async (req, res) => {
    try {
        const holidays = await Holiday.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: holidays,
            message: 'Holidays fetched successfully'
        });
    } catch (error) {
        console.error('Error fetching holidays:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch holidays',
            error: error.message
        });
    }
};

// Get single holiday
exports.getHolidayById = async (req, res) => {
    try {
        const holiday = await Holiday.findById(req.params.id);

        if (!holiday) {
            return res.status(404).json({
                success: false,
                message: 'Holiday not found'
            });
        }

        res.status(200).json({
            success: true,
            data: holiday,
            message: 'Holiday fetched successfully'
        });
    } catch (error) {
        console.error('Error fetching holiday:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch holiday',
            error: error.message
        });
    }
};

// Add new holiday
exports.addHoliday = async (req, res) => {
    try {
        const { name, description, date, day } = req.body;

        // Validation
        if (!name || !date || !day) {
            return res.status(400).json({
                success: false,
                message: 'Name, date, and day are required'
            });
        }

        const newHoliday = new Holiday({
            name,
            description: description || '',
            date,
            day
        });

        await newHoliday.save();

        res.status(201).json({
            success: true,
            data: newHoliday,
            message: 'Holiday added successfully'
        });
    } catch (error) {
        console.error('Error adding holiday:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to add holiday',
            error: error.message
        });
    }
};

// Update holiday
exports.updateHoliday = async (req, res) => {
    try {
        const { name, description, date, day } = req.body;

        const holiday = await Holiday.findById(req.params.id);

        if (!holiday) {
            return res.status(404).json({
                success: false,
                message: 'Holiday not found'
            });
        }

        // Update fields
        holiday.name = name || holiday.name;
        holiday.description = description !== undefined ? description : holiday.description;
        holiday.date = date || holiday.date;
        holiday.day = day || holiday.day;

        await holiday.save();

        res.status(200).json({
            success: true,
            data: holiday,
            message: 'Holiday updated successfully'
        });
    } catch (error) {
        console.error('Error updating holiday:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update holiday',
            error: error.message
        });
    }
};

// Delete holiday
exports.deleteHoliday = async (req, res) => {
    try {
        const holiday = await Holiday.findById(req.params.id);

        if (!holiday) {
            return res.status(404).json({
                success: false,
                message: 'Holiday not found'
            });
        }

        await Holiday.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Holiday deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting holiday:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete holiday',
            error: error.message
        });
    }
};