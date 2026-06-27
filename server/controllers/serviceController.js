const Service = require('../models/Service');

// Get all services
exports.getAllServices = async (req, res) => {
    try {
        const query = {};
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }
        const services = await Service.find(query).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: services,
            count: services.length
        });
    } catch (error) {
        console.error('Get services error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch services',
            error: error.message
        });
    }
};

// Get single service by ID
exports.getServiceById = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found'
            });
        }

        res.status(200).json({
            success: true,
            data: service
        });
    } catch (error) {
        console.error('Get service error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch service',
            error: error.message
        });
    }
};

// Create new service
exports.createService = async (req, res) => {
    try {
        const { name, department, price, status } = req.body;

        // Validation
        if (!name || name.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Service name is required'
            });
        }

        if (!department || department.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Department is required'
            });
        }

        if (price === undefined || price === null || price === '') {
            return res.status(400).json({
                success: false,
                message: 'Price is required'
            });
        }

        // Check if service already exists
        const checkQuery = {
            name: { $regex: new RegExp(`^${name.trim()}$`, 'i') }
        };
        if (req.user && req.user.hospitalId) {
            checkQuery.hospitalId = req.user.hospitalId;
        }
        const existingService = await Service.findOne(checkQuery);

        if (existingService) {
            return res.status(400).json({
                success: false,
                message: 'Service with this name already exists'
            });
        }

        // Create new service
        const serviceData = {
            name: name.trim(),
            department: department.trim(),
            price: parseFloat(price),
            status: status || 'Active'
        };
        if (req.user && req.user.hospitalId) {
            serviceData.hospitalId = req.user.hospitalId;
        }
        const newService = new Service(serviceData);

        await newService.save();

        res.status(201).json({
            success: true,
            message: 'Service created successfully',
            data: newService
        });
    } catch (error) {
        console.error('Create service error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create service',
            error: error.message
        });
    }
};

// Update service
exports.updateService = async (req, res) => {
    try {
        const { name, department, price, status } = req.body;

        // Validation
        if (!name || name.trim() === '') {
            return res.status(400).json({
                success: false,
                message: 'Service name is required'
            });
        }

        // Check if service exists
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found'
            });
        }

        // Check if new name already exists (excluding current service)
        const checkQuery = {
            name: { $regex: new RegExp(`^${name.trim()}$`, 'i') },
            _id: { $ne: req.params.id }
        };
        if (req.user && req.user.hospitalId) {
            checkQuery.hospitalId = req.user.hospitalId;
        }
        const existingService = await Service.findOne(checkQuery);

        if (existingService) {
            return res.status(400).json({
                success: false,
                message: 'Service with this name already exists'
            });
        }

        // Update service
        service.name = name.trim();
        service.department = department ? department.trim() : service.department;
        service.price = price !== undefined ? parseFloat(price) : service.price;
        service.status = status || service.status;

        await service.save();

        res.status(200).json({
            success: true,
            message: 'Service updated successfully',
            data: service
        });
    } catch (error) {
        console.error('Update service error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update service',
            error: error.message
        });
    }
};

// Delete service
exports.deleteService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);

        if (!service) {
            return res.status(404).json({
                success: false,
                message: 'Service not found'
            });
        }

        await Service.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Service deleted successfully'
        });
    } catch (error) {
        console.error('Delete service error:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete service',
            error: error.message
        });
    }
};