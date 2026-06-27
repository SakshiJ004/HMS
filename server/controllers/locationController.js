const Location = require('../models/Location');

// Get all locations
exports.getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find().sort({ createdAt: -1 });
        const query = {};
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }
        // const locations = await Location.find(query).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: locations,
            count: locations.length
        });
    } catch (error) {
        console.error('Get locations error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch locations',
            error: error.message
        });
    }
};

// Get single location by ID
exports.getLocationById = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);

        if (!location) {
            return res.status(404).json({
                success: false,
                message: 'Location not found'
            });
        }

        res.status(200).json({
            success: true,
            data: location
        });
    } catch (error) {
        console.error('Get location error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch location',
            error: error.message
        });
    }
};

// Create new location
exports.createLocation = async (req, res) => {
    try {
        const { name, locationType, email, phone, address1, address2, country, state, city, pincode, image, status } = req.body;

        // Validation
        if (!name || name.trim() === '') {
            return res.status(400).json({ success: false, message: 'Location name is required' });
        }
        if (!locationType) {
            return res.status(400).json({ success: false, message: 'Location type is required' });
        }
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }
        if (!phone) {
            return res.status(400).json({ success: false, message: 'Phone number is required' });
        }
        if (!address1) {
            return res.status(400).json({ success: false, message: 'Address is required' });
        }

        // const newLocation = new Location({
        const locationData = {
            name: name.trim(),
            locationType: locationType.trim(),
            email: email.trim().toLowerCase(),
            phone: phone.trim(),
            address1: address1.trim(),
            address2: address2 ? address2.trim() : '',
            country: country || '',
            state: state || '',
            city: city || '',
            pincode: pincode || '',
            image: image || '',
            status: status || 'Active'
        // });
        };

        if (req.user && req.user.hospitalId) {
            locationData.hospitalId = req.user.hospitalId;
        }

        const newLocation = new Location(locationData);

        await newLocation.save();

        res.status(201).json({
            success: true,
            message: 'Location created successfully',
            data: newLocation
        });
    } catch (error) {
        console.error('Create location error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create location',
            error: error.message
        });
    }
};

// Update location
exports.updateLocation = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);

        if (!location) {
            return res.status(404).json({
                success: false,
                message: 'Location not found'
            });
        }

        const { name, locationType, email, phone, address1, address2, country, state, city, pincode, image, status } = req.body;

        if (!name || name.trim() === '') {
            return res.status(400).json({ success: false, message: 'Location name is required' });
        }

        location.name = name.trim();
        location.locationType = locationType ? locationType.trim() : location.locationType;
        location.email = email ? email.trim().toLowerCase() : location.email;
        location.phone = phone ? phone.trim() : location.phone;
        location.address1 = address1 ? address1.trim() : location.address1;
        location.address2 = address2 ? address2.trim() : location.address2;
        location.country = country || location.country;
        location.state = state || location.state;
        location.city = city || location.city;
        location.pincode = pincode || location.pincode;
        location.image = image !== undefined ? image : location.image;
        location.status = status || location.status;

        await location.save();

        res.status(200).json({
            success: true,
            message: 'Location updated successfully',
            data: location
        });
    } catch (error) {
        console.error('Update location error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update location',
            error: error.message
        });
    }
};

// Delete location
exports.deleteLocation = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);

        if (!location) {
            return res.status(404).json({
                success: false,
                message: 'Location not found'
            });
        }

        await Location.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Location deleted successfully'
        });
    } catch (error) {
        console.error('Delete location error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete location',
            error: error.message
        });
    }
};