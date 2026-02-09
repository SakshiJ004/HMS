const express = require('express');
const router = express.Router();
const controller = require('../controllers/diagnosisController');

// Get diagnoses by department
router.get('/department/:department', controller.getByDepartment);

// Search diagnoses
router.get('/search', controller.search);

// Seed diagnoses (ONE TIME SETUP - Call this once)
router.post('/seed', controller.seedDiagnoses);

module.exports = router;