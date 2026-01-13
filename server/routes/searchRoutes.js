// backend/routes/searchRoutes.js

const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// Global search - searches across all entities
// GET /api/search?q=searchQuery
router.get('/', searchController.globalSearch);

// Search only doctors
// GET /api/search/doctors?q=searchQuery
router.get('/doctors', searchController.searchDoctors);

// Search only patients
// GET /api/search/patients?q=searchQuery
router.get('/patients', searchController.searchPatients);

module.exports = router;