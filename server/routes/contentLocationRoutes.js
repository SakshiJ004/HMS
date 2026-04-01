// routes/contentLocationRoutes.js
const express = require('express');
const router = express.Router();
const {
    getAllCountries, getAllCountriesDropdown, createCountry, updateCountry, deleteCountry,
    getAllStates, getStatesByCountry, createState, updateState, deleteState,
    getAllCities, getCitiesByState, createCity, updateCity, deleteCity,
} = require('../controllers/contentLocationController'); // ← तुमचे नाव

router.get('/countries', getAllCountries);
router.get('/countries/dropdown', getAllCountriesDropdown);
router.post('/countries', createCountry);
router.put('/countries/:id', updateCountry);
router.delete('/countries/:id', deleteCountry);

router.get('/states', getAllStates);
router.get('/states/by-country/:countryId', getStatesByCountry);
router.post('/states', createState);
router.put('/states/:id', updateState);
router.delete('/states/:id', deleteState);

router.get('/cities', getAllCities);
router.get('/cities/by-state/:stateId', getCitiesByState);
router.post('/cities', createCity);
router.put('/cities/:id', updateCity);
router.delete('/cities/:id', deleteCity);

module.exports = router;