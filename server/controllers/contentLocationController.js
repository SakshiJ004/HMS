const Country = require('../models/Country');
const State = require('../models/State');
const City = require('../models/City');

// ═══════════════════════════════════════════════════════════
//  COUNTRIES
// ═══════════════════════════════════════════════════════════

exports.getAllCountries = async (req, res) => {
    try {
        const { status, search, page = 1, limit = 10 } = req.query;
        const filter = {};
        if (status) filter.status = status;
        if (search) filter.name = { $regex: search, $options: 'i' };

        const skip = (Number(page) - 1) * Number(limit);
        const [countries, total] = await Promise.all([
            Country.find(filter).sort({ name: 1 }).skip(skip).limit(Number(limit)),
            Country.countDocuments(filter),
        ]);

        res.status(200).json({
            success: true,
            data: countries,
            pagination: { total, page: Number(page), limit: Number(limit), pages: Math.ceil(total / Number(limit)) },
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch countries', error: err.message });
    }
};

exports.getAllCountriesDropdown = async (req, res) => {
    // For dropdowns — no pagination, only active
    try {
        const countries = await Country.find({ status: 'Active' }).select('_id countryCode name flag').sort({ name: 1 });
        res.status(200).json({ success: true, data: countries });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch countries' });
    }
};

exports.createCountry = async (req, res) => {
    try {
        const { countryCode, name, flag, status } = req.body;
        if (!countryCode || !name) {
            return res.status(400).json({ success: false, message: 'Country code and name are required' });
        }
        const existing = await Country.findOne({ $or: [{ countryCode: countryCode.trim().toUpperCase() }, { name: name.trim() }] });
        if (existing) {
            return res.status(400).json({ success: false, message: 'Country code or name already exists' });
        }
        const country = await Country.create({
            countryCode: countryCode.trim().toUpperCase(),
            name: name.trim(),
            flag: flag || '',
            status: status || 'Active',
        });
        res.status(201).json({ success: true, message: 'Country created', data: country });
    } catch (err) {
        if (err.code === 11000) return res.status(400).json({ success: false, message: 'Country code or name already exists' });
        res.status(500).json({ success: false, message: 'Failed to create country', error: err.message });
    }
};

exports.updateCountry = async (req, res) => {
    try {
        const country = await Country.findById(req.params.id);
        if (!country) return res.status(404).json({ success: false, message: 'Country not found' });
        const { countryCode, name, flag, status } = req.body;
        if (countryCode) country.countryCode = countryCode.trim().toUpperCase();
        if (name) country.name = name.trim();
        if (flag !== undefined) country.flag = flag;
        if (status) country.status = status;
        await country.save();
        res.status(200).json({ success: true, message: 'Country updated', data: country });
    } catch (err) {
        if (err.code === 11000) return res.status(400).json({ success: false, message: 'Country code or name already exists' });
        res.status(500).json({ success: false, message: 'Failed to update country', error: err.message });
    }
};

exports.deleteCountry = async (req, res) => {
    try {
        const country = await Country.findById(req.params.id);
        if (!country) return res.status(404).json({ success: false, message: 'Country not found' });
        // Delete all states and cities of this country
        const states = await State.find({ country: req.params.id });
        const stateIds = states.map(s => s._id);
        await City.deleteMany({ state: { $in: stateIds } });
        await State.deleteMany({ country: req.params.id });
        await Country.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'Country and related states/cities deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete country', error: err.message });
    }
};

// ═══════════════════════════════════════════════════════════
//  STATES
// ═══════════════════════════════════════════════════════════

exports.getAllStates = async (req, res) => {
    try {
        const { status, search, countryId, page = 1, limit = 10 } = req.query;
        const filter = {};
        if (status) filter.status = status;
        if (countryId) filter.country = countryId;
        if (search) filter.name = { $regex: search, $options: 'i' };

        const skip = (Number(page) - 1) * Number(limit);
        const [states, total] = await Promise.all([
            State.find(filter)
                .populate('country', 'countryCode name flag')
                .sort({ name: 1 })
                .skip(skip)
                .limit(Number(limit)),
            State.countDocuments(filter),
        ]);

        res.status(200).json({
            success: true,
            data: states,
            pagination: { total, page: Number(page), limit: Number(limit), pages: Math.ceil(total / Number(limit)) },
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch states', error: err.message });
    }
};

exports.getStatesByCountry = async (req, res) => {
    // For dropdown — states by country
    try {
        const states = await State.find({ country: req.params.countryId, status: 'Active' })
            .select('_id name')
            .sort({ name: 1 });
        res.status(200).json({ success: true, data: states });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch states' });
    }
};

exports.createState = async (req, res) => {
    try {
        const { countryId, name, status } = req.body;
        if (!countryId || !name) {
            return res.status(400).json({ success: false, message: 'Country and state name are required' });
        }
        const country = await Country.findById(countryId);
        if (!country) return res.status(400).json({ success: false, message: 'Invalid country' });

        const existing = await State.findOne({ country: countryId, name: name.trim() });
        if (existing) return res.status(400).json({ success: false, message: `State "${name}" already exists in this country` });

        const state = await State.create({ country: countryId, name: name.trim(), status: status || 'Active' });
        await state.populate('country', 'countryCode name flag');
        res.status(201).json({ success: true, message: 'State created', data: state });
    } catch (err) {
        if (err.code === 11000) return res.status(400).json({ success: false, message: 'State already exists in this country' });
        res.status(500).json({ success: false, message: 'Failed to create state', error: err.message });
    }
};

exports.updateState = async (req, res) => {
    try {
        const state = await State.findById(req.params.id);
        if (!state) return res.status(404).json({ success: false, message: 'State not found' });
        const { countryId, name, status } = req.body;
        if (countryId) {
            const country = await Country.findById(countryId);
            if (!country) return res.status(400).json({ success: false, message: 'Invalid country' });
            state.country = countryId;
        }
        if (name) state.name = name.trim();
        if (status) state.status = status;
        await state.save();
        await state.populate('country', 'countryCode name flag');
        res.status(200).json({ success: true, message: 'State updated', data: state });
    } catch (err) {
        if (err.code === 11000) return res.status(400).json({ success: false, message: 'State already exists in this country' });
        res.status(500).json({ success: false, message: 'Failed to update state', error: err.message });
    }
};

exports.deleteState = async (req, res) => {
    try {
        const state = await State.findById(req.params.id);
        if (!state) return res.status(404).json({ success: false, message: 'State not found' });
        // Delete all cities of this state
        await City.deleteMany({ state: req.params.id });
        await State.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'State and related cities deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete state', error: err.message });
    }
};

// ═══════════════════════════════════════════════════════════
//  CITIES
// ═══════════════════════════════════════════════════════════

exports.getAllCities = async (req, res) => {
    try {
        const { status, search, countryId, stateId, page = 1, limit = 10 } = req.query;
        const filter = {};
        if (status) filter.status = status;
        if (countryId) filter.country = countryId;
        if (stateId) filter.state = stateId;
        if (search) filter.name = { $regex: search, $options: 'i' };

        const skip = (Number(page) - 1) * Number(limit);
        const [cities, total] = await Promise.all([
            City.find(filter)
                .populate('country', 'countryCode name flag')
                .populate('state', 'name')
                .sort({ name: 1 })
                .skip(skip)
                .limit(Number(limit)),
            City.countDocuments(filter),
        ]);

        res.status(200).json({
            success: true,
            data: cities,
            pagination: { total, page: Number(page), limit: Number(limit), pages: Math.ceil(total / Number(limit)) },
        });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch cities', error: err.message });
    }
};

exports.getCitiesByState = async (req, res) => {
    // For dropdown
    try {
        const cities = await City.find({ state: req.params.stateId, status: 'Active' })
            .select('_id name')
            .sort({ name: 1 });
        res.status(200).json({ success: true, data: cities });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch cities' });
    }
};

exports.createCity = async (req, res) => {
    try {
        const { countryId, stateId, name, status } = req.body;
        if (!countryId || !stateId || !name) {
            return res.status(400).json({ success: false, message: 'Country, state and city name are required' });
        }
        const [country, state] = await Promise.all([Country.findById(countryId), State.findById(stateId)]);
        if (!country) return res.status(400).json({ success: false, message: 'Invalid country' });
        if (!state) return res.status(400).json({ success: false, message: 'Invalid state' });

        const existing = await City.findOne({ state: stateId, name: name.trim() });
        if (existing) return res.status(400).json({ success: false, message: `City "${name}" already exists in this state` });

        const city = await City.create({ country: countryId, state: stateId, name: name.trim(), status: status || 'Active' });
        await city.populate('country', 'countryCode name flag');
        await city.populate('state', 'name');
        res.status(201).json({ success: true, message: 'City created', data: city });
    } catch (err) {
        if (err.code === 11000) return res.status(400).json({ success: false, message: 'City already exists in this state' });
        res.status(500).json({ success: false, message: 'Failed to create city', error: err.message });
    }
};

exports.updateCity = async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        if (!city) return res.status(404).json({ success: false, message: 'City not found' });
        const { countryId, stateId, name, status } = req.body;
        if (countryId) city.country = countryId;
        if (stateId) city.state = stateId;
        if (name) city.name = name.trim();
        if (status) city.status = status;
        await city.save();
        await city.populate('country', 'countryCode name flag');
        await city.populate('state', 'name');
        res.status(200).json({ success: true, message: 'City updated', data: city });
    } catch (err) {
        if (err.code === 11000) return res.status(400).json({ success: false, message: 'City already exists in this state' });
        res.status(500).json({ success: false, message: 'Failed to update city', error: err.message });
    }
};

exports.deleteCity = async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        if (!city) return res.status(404).json({ success: false, message: 'City not found' });
        await City.findByIdAndDelete(req.params.id);
        res.status(200).json({ success: true, message: 'City deleted' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to delete city', error: err.message });
    }
};