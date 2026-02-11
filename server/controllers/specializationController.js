const Specialization = require('../models/Specialization');
const User = require('../models/User');

// Get all specializations with doctor count
exports.getSpecializations = async (req, res) => {
    try {
        const specializations = await Specialization.find()
            .sort({ createdAt: -1 });

        // Get doctor counts for each specialization
        const specializationsWithCount = await Promise.all(
            specializations.map(async (spec) => {
                const doctorCount = await User.countDocuments({
                    role: 'doctor',
                    department: spec.name
                });

                return {
                    _id: spec._id,
                    name: spec.name,
                    description: spec.description,
                    icon: spec.icon,
                    status: spec.status,
                    doctorCount,
                    createdAt: spec.createdAt,
                    updatedAt: spec.updatedAt
                };
            })
        );

        res.status(200).json({
            success: true,
            data: specializationsWithCount,
            count: specializationsWithCount.length
        });
    } catch (error) {
        console.error('Get specializations error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch specializations',
            error: error.message
        });
    }
};

// Create specialization
exports.createSpecialization = async (req, res) => {
    try {
        const { name, description, icon } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'Specialization name is required'
            });
        }

        // Check if already exists
        const existing = await Specialization.findOne({
            name: { $regex: new RegExp(`^${name}$`, 'i') }
        });

        if (existing) {
            return res.status(400).json({
                success: false,
                message: 'Specialization already exists'
            });
        }

        const specialization = await Specialization.create({
            name: name.trim(),
            description: description?.trim() || '',
            icon
        });

        res.status(201).json({
            success: true,
            message: 'Specialization created successfully',
            data: specialization
        });
    } catch (error) {
        console.error('Create specialization error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create specialization',
            error: error.message
        });
    }
};

// Update specialization
exports.updateSpecialization = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, icon, status } = req.body;

        const specialization = await Specialization.findById(id);

        if (!specialization) {
            return res.status(404).json({
                success: false,
                message: 'Specialization not found'
            });
        }

        // If name is being changed, check for duplicates
        if (name && name !== specialization.name) {
            const existing = await Specialization.findOne({
                name: { $regex: new RegExp(`^${name}$`, 'i') },
                _id: { $ne: id }
            });

            if (existing) {
                return res.status(400).json({
                    success: false,
                    message: 'Specialization name already exists'
                });
            }

            // Update doctor departments
            await User.updateMany(
                { role: 'doctor', department: specialization.name },
                { $set: { department: name } }
            );
        }

        specialization.name = name || specialization.name;
        specialization.description = description !== undefined ? description : specialization.description;
        specialization.icon = icon !== undefined ? icon : specialization.icon;
        specialization.status = status || specialization.status;

        await specialization.save();

        res.status(200).json({
            success: true,
            message: 'Specialization updated successfully',
            data: specialization
        });
    } catch (error) {
        console.error('Update specialization error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update specialization',
            error: error.message
        });
    }
};

// Delete specialization
exports.deleteSpecialization = async (req, res) => {
    try {
        const { id } = req.params;

        const specialization = await Specialization.findById(id);

        if (!specialization) {
            return res.status(404).json({
                success: false,
                message: 'Specialization not found'
            });
        }

        // Check if any doctors are using this specialization
        const doctorCount = await User.countDocuments({
            role: 'doctor',
            department: specialization.name
        });

        if (doctorCount > 0) {
            return res.status(400).json({
                success: false,
                message: `Cannot delete. ${doctorCount} doctor(s) are assigned to this specialization`
            });
        }

        await specialization.deleteOne();

        res.status(200).json({
            success: true,
            message: 'Specialization deleted successfully'
        });
    } catch (error) {
        console.error('Delete specialization error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete specialization',
            error: error.message
        });
    }
};

module.exports = exports;