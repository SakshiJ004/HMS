// backend/routes/holiday.routes.js

const express = require('express');
const router = express.Router();
// const holidayController = require('../controllers/holiday.controller');
const holidayController = require('../controllers/holidaysController')

// Get all holidays
router.get('/holidays', holidayController.getAllHolidays);

// Get single holiday
router.get('/holidays/:id', holidayController.getHolidayById);

// Add new holiday
router.post('/holidays', holidayController.addHoliday);

// Update holiday
router.put('/holidays/:id', holidayController.updateHoliday);

// Delete holiday
router.delete('/holidays/:id', holidayController.deleteHoliday);

module.exports = router;