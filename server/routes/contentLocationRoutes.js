const express = require('express');
const router = express.Router();
const {
    getAllCountries, getAllCountriesDropdown, createCountry, updateCountry, deleteCountry,
    getAllStates, getStatesByCountry, createState, updateState, deleteState,
    getAllCities, getCitiesByState, createCity, updateCity, deleteCity,
} = require('../controllers/locationController');

// Add auth middleware if needed:
// const { protect } = require('../middleware/authMiddleware');
// router.use(protect);

// ── Countries ──────────────────────────────────────────────
router.get('/countries', getAllCountries);          // paginated list
router.get('/countries/dropdown', getAllCountriesDropdown);  // all active (for forms)
router.post('/countries', createCountry);
router.put('/countries/:id', updateCountry);
router.delete('/countries/:id', deleteCountry);

// ── States ─────────────────────────────────────────────────
router.get('/states', getAllStates);          // paginated
router.get('/states/by-country/:countryId', getStatesByCountry);   // dropdown
router.post('/states', createState);
router.put('/states/:id', updateState);
router.delete('/states/:id', deleteState);

// ── Cities ─────────────────────────────────────────────────
router.get('/cities', getAllCities);        // paginated
router.get('/cities/by-state/:stateId', getCitiesByState);   // dropdown
router.post('/cities', createCity);
router.put('/cities/:id', updateCity);
router.delete('/cities/:id', deleteCity);

module.exports = router;