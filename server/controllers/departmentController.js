const Department = require('../models/Department');

// Get all departments
exports.getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: departments,
            count: departments.length
        });
    } catch (error) {
        console.error('Get departments error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch departments',
            error: error.message
        });
    }
};

// Get single department by ID
exports.getDepartmentById = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);

        if (!department) {
            return res.status(404).json({
                success: false,
                message: 'Department not found'
            });
        }

        res.status(200).json({
            success: true,
            data: department
        });
    } catch (error) {
        console.error('Get department error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch department',
            error: error.message
        });
    }
};

// Create new department
exports.createDepartment = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Validation
        if (!name || name.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Department name is required'
            });
        }

        // Check if department already exists
        const existingDept = await Department.findOne({
            name: { $regex: new RegExp(`^${name.trim()}$`, 'i') }
        });

        if (existingDept) {
            return res.status(400).json({
                success: false,
                message: 'Department with this name already exists'
            });
        }

        // Create new department
        const newDepartment = new Department({
            name: name.trim(),
            description: description ? description.trim() : '',
            numberOfDoctors: 0,
            status: 'Inactive'
        });

        await newDepartment.save();

        res.status(201).json({
            success: true,
            message: 'Department created successfully',
            data: newDepartment
        });
    } catch (error) {
        console.error('Create department error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create department',
            error: error.message
        });
    }
};

// Update department
exports.updateDepartment = async (req, res) => {
    try {
        const { name, description } = req.body;

        // Validation
        if (!name || name.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Department name is required'
            });
        }

        // Check if department exists
        const department = await Department.findById(req.params.id);

        if (!department) {
            return res.status(404).json({
                success: false,
                message: 'Department not found'
            });
        }

        // Check if new name already exists (excluding current department)
        const existingDept = await Department.findOne({
            name: { $regex: new RegExp(`^${name.trim()}$`, 'i') },
            _id: { $ne: req.params.id }
        });

        if (existingDept) {
            return res.status(400).json({
                success: false,
                message: 'Department with this name already exists'
            });
        }

        // Update department
        department.name = name.trim();
        department.description = description ? description.trim() : '';

        await department.save();

        res.status(200).json({
            success: true,
            message: 'Department updated successfully',
            data: department
        });
    } catch (error) {
        console.error('Update department error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update department',
            error: error.message
        });
    }
};

// Delete department
exports.deleteDepartment = async (req, res) => {
    try {
        const department = await Department.findById(req.params.id);

        if (!department) {
            return res.status(404).json({
                success: false,
                message: 'Department not found'
            });
        }

        // Check if department has doctors
        if (department.numberOfDoctors > 0) {
            return res.status(400).json({
                success: false,
                message: 'Cannot delete department with active doctors. Please reassign doctors first.'
            });
        }

        await Department.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Department deleted successfully'
        });
    } catch (error) {
        console.error('Delete department error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete department',
            error: error.message
        });
    }
};