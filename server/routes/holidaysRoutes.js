// routes/holidaysRoutes.js

const express = require('express');
const router = express.Router();
const holidaysController = require('../controllers/holidaysController');

// Get all holidays
router.get('/', holidaysController.getAllHolidays);

// Get single holiday
router.get('/:id', holidaysController.getHolidayById);

// Add new holiday
router.post('/', holidaysController.addHoliday);

// Update holiday
router.put('/:id', holidaysController.updateHoliday);

// Delete holiday
router.delete('/:id', holidaysController.deleteHoliday);

module.exports = router;