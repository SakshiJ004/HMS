const Designation = require('../models/Designation');

// Get all designations
exports.getAllDesignations = async (req, res) => {
    try {
        const query = {};
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }
        const designations = await Designation.find(query).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: designations,
            count: designations.length
        });
    } catch (error) {
        console.error('Get designations error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch designations',
            error: error.message
        });
    }
};

// Get single designation by ID
exports.getDesignationById = async (req, res) => {
    try {
        const designation = await Designation.findById(req.params.id);

        if (!designation) {
            return res.status(404).json({
                success: false,
                message: 'Designation not found'
            });
        }

        res.status(200).json({
            success: true,
            data: designation
        });
    } catch (error) {
        console.error('Get designation error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch designation',
            error: error.message
        });
    }
};

// Create new designation
exports.createDesignation = async (req, res) => {
    try {
        const { name, type, department, description, status } = req.body;

        // Validation
        if (!name || name.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Designation name is required'
            });
        }

        if (!type) {
            return res.status(400).json({
                success: false,
                message: 'Designation type is required'
            });
        }

        if (!department || department.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Department is required'
            });
        }

        const checkQuery = {
            name: { $regex: new RegExp(`^${name.trim()}$`, 'i') }
        };
        if (req.user && req.user.hospitalId) {
            checkQuery.hospitalId = req.user.hospitalId;
        }
        // Check if designation already exists
        const existingDesignation = await Designation.findOne(checkQuery);

        if (existingDesignation) {
            return res.status(400).json({
                success: false,
                message: 'Designation with this name already exists'
            });
        }

        // Create new designation
        const designationData = {
            name: name.trim(),
            type,
            department: department.trim(),
            description: description ? description.trim() : '',
            status: status || 'Active'
        };
        if (req.user && req.user.hospitalId) {
            designationData.hospitalId = req.user.hospitalId;
        }
        const newDesignation = new Designation(designationData);

        await newDesignation.save();

        res.status(201).json({
            success: true,
            message: 'Designation created successfully',
            data: newDesignation
        });
    } catch (error) {
        console.error('Create designation error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create designation',
            error: error.message
        });
    }
};

// Update designation
exports.updateDesignation = async (req, res) => {
    try {
        const { name, type, department, description, status } = req.body;

        // Validation
        if (!name || name.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Designation name is required'
            });
        }

        if (!type) {
            return res.status(400).json({
                success: false,
                message: 'Designation type is required'
            });
        }

        if (!department || department.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Department is required'
            });
        }

        // Check if designation exists
        const designation = await Designation.findById(req.params.id);

        if (!designation) {
            return res.status(404).json({
                success: false,
                message: 'Designation not found'
            });
        }

        const checkQuery = {
            name: { $regex: new RegExp(`^${name.trim()}$`, 'i') },
            _id: { $ne: req.params.id }
        };
        if (req.user && req.user.hospitalId) {
            checkQuery.hospitalId = req.user.hospitalId;
        }
        // Check if new name already exists (excluding current designation)
        const existingDesignation = await Designation.findOne(checkQuery);

        if (existingDesignation) {
            return res.status(400).json({
                success: false,
                message: 'Designation with this name already exists'
            });
        }

        // Update designation
        designation.name = name.trim();
        designation.type = type;
        designation.department = department.trim();
        designation.description = description ? description.trim() : '';
        designation.status = status || designation.status;

        await designation.save();

        res.status(200).json({
            success: true,
            message: 'Designation updated successfully',
            data: designation
        });
    } catch (error) {
        console.error('Update designation error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update designation',
            error: error.message
        });
    }
};

// Delete designation
exports.deleteDesignation = async (req, res) => {
    try {
        const designation = await Designation.findById(req.params.id);

        if (!designation) {
            return res.status(404).json({
                success: false,
                message: 'Designation not found'
            });
        }

        await Designation.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Designation deleted successfully'
        });
    } catch (error) {
        console.error('Delete designation error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete designation',
            error: error.message
        });
    }
};