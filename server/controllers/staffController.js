const Staff = require('../models/Staff');

// Get all staffs
exports.getAllStaffs = async (req, res) => {
    try {
        const staffs = await Staff.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: staffs,
            count: staffs.length
        });
    } catch (error) {
        console.error('Get staffs error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch staffs',
            error: error.message
        });
    }
};

// Get single staff by ID
exports.getStaffById = async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id);

        if (!staff) {
            return res.status(404).json({
                success: false,
                message: 'Staff not found'
            });
        }

        res.status(200).json({
            success: true,
            data: staff
        });
    } catch (error) {
        console.error('Get staff error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch staff',
            error: error.message
        });
    }
};

// Create new staff
// Create new staff
exports.createStaff = async (req, res) => {
    try {
        const {
            name, designation, role, phone, email, dob, dateOfJoining,
            gender, bloodGroup, address1, address2, country, state,
            city, pincode, image, staffType
        } = req.body;

        console.log('📝 Received staff data:', req.body); // Debug log

        // Validation
        if (!name || !email || !phone || !designation || !role) {
            return res.status(400).json({
                success: false,
                message: 'Required fields are missing'
            });
        }

        // Validate dates
        if (!dob || !dateOfJoining) {
            return res.status(400).json({
                success: false,
                message: 'Date of Birth and Date of Joining are required'
            });
        }

        // Check if email already exists
        const existingStaff = await Staff.findOne({ email: email.toLowerCase() });
        if (existingStaff) {
            return res.status(400).json({
                success: false,
                message: 'Staff with this email already exists'
            });
        }

        // Parse dates properly - handle both ISO strings and date objects
        let parsedDob, parsedJoining;

        try {
            parsedDob = new Date(dob);
            parsedJoining = new Date(dateOfJoining);

            // Check if dates are valid
            if (isNaN(parsedDob.getTime()) || isNaN(parsedJoining.getTime())) {
                throw new Error('Invalid date format');
            }
        } catch (dateError) {
            console.error('Date parsing error:', dateError);
            return res.status(400).json({
                success: false,
                message: 'Invalid date format. Please use valid dates.'
            });
        }

        // Create new staff
        const newStaff = new Staff({
            name: name.trim(),
            designation,
            role,
            phone,
            email: email.toLowerCase(),
            dob: parsedDob,
            dateOfJoining: parsedJoining,
            gender,
            bloodGroup: bloodGroup || '',
            address1: address1 || '',
            address2: address2 || '',
            country: country || '',
            state: state || '',
            city: city || '',
            pincode: pincode || '',
            image: image || '',
            staffType: staffType || 'Permanent',
            status: 'Available'
        });

        await newStaff.save();

        console.log('✅ Staff created successfully:', newStaff.staffId);

        res.status(201).json({
            success: true,
            message: 'Staff created successfully',
            data: newStaff
        });
    } catch (error) {
        console.error('❌ Create staff error:', error);

        // Handle mongoose validation errors
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: messages.join(', ')
            });
        }

        // Handle duplicate key errors
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Staff with this email or phone already exists'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Failed to create staff',
            error: error.message
        });
    }
};

// Update staff
// Update staff
exports.updateStaff = async (req, res) => {
    try {
        const {
            name, designation, role, phone, email, dob, dateOfJoining,
            gender, bloodGroup, address1, address2, country, state,
            city, pincode, image, staffType, status
        } = req.body;

        console.log('📝 Update request for staff:', req.params.id);

        // Check if staff exists
        const staff = await Staff.findById(req.params.id);
        if (!staff) {
            return res.status(404).json({
                success: false,
                message: 'Staff not found'
            });
        }

        // Check if email is being changed and if it already exists
        if (email && email.toLowerCase() !== staff.email) {
            const existingStaff = await Staff.findOne({
                email: email.toLowerCase(),
                _id: { $ne: req.params.id }
            });
            if (existingStaff) {
                return res.status(400).json({
                    success: false,
                    message: 'Staff with this email already exists'
                });
            }
        }

        // Parse dates if provided
        let parsedDob = staff.dob;
        let parsedJoining = staff.dateOfJoining;

        if (dob) {
            try {
                parsedDob = new Date(dob);
                if (isNaN(parsedDob.getTime())) {
                    throw new Error('Invalid DOB format');
                }
            } catch (error) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid Date of Birth format'
                });
            }
        }

        if (dateOfJoining) {
            try {
                parsedJoining = new Date(dateOfJoining);
                if (isNaN(parsedJoining.getTime())) {
                    throw new Error('Invalid joining date format');
                }
            } catch (error) {
                return res.status(400).json({
                    success: false,
                    message: 'Invalid Date of Joining format'
                });
            }
        }

        // Update staff
        staff.name = name || staff.name;
        staff.designation = designation || staff.designation;
        staff.role = role || staff.role;
        staff.phone = phone || staff.phone;
        staff.email = email ? email.toLowerCase() : staff.email;
        staff.dob = parsedDob;
        staff.dateOfJoining = parsedJoining;
        staff.gender = gender || staff.gender;
        staff.bloodGroup = bloodGroup !== undefined ? bloodGroup : staff.bloodGroup;
        staff.address1 = address1 !== undefined ? address1 : staff.address1;
        staff.address2 = address2 !== undefined ? address2 : staff.address2;
        staff.country = country || staff.country;
        staff.state = state || staff.state;
        staff.city = city || staff.city;
        staff.pincode = pincode || staff.pincode;
        staff.image = image !== undefined ? image : staff.image;
        staff.staffType = staffType || staff.staffType;
        staff.status = status || staff.status;

        await staff.save();

        console.log('✅ Staff updated successfully:', staff.staffId);

        res.status(200).json({
            success: true,
            message: 'Staff updated successfully',
            data: staff
        });
    } catch (error) {
        console.error('❌ Update staff error:', error);

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: messages.join(', ')
            });
        }

        res.status(500).json({
            success: false,
            message: 'Failed to update staff',
            error: error.message
        });
    }
};

// Delete staff
exports.deleteStaff = async (req, res) => {
    try {
        const staff = await Staff.findById(req.params.id);

        if (!staff) {
            return res.status(404).json({
                success: false,
                message: 'Staff not found'
            });
        }

        await Staff.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Staff deleted successfully'
        });
    } catch (error) {
        console.error('Delete staff error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete staff',
            error: error.message
        });
    }
};