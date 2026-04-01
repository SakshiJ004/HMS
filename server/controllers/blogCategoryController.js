const BlogCategory = require('../models/BlogCategory');

// Get all categories
const getAllCategories = async (req, res) => {
    try {
        const categories = await BlogCategory.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: categories.length,
            data: categories
        });
    } catch (error) {
        console.error('Get categories error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching categories',
            error: error.message
        });
    }
};

// Get single category
const getCategoryById = async (req, res) => {
    try {
        const category = await BlogCategory.findById(req.params.id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }

        res.status(200).json({
            success: true,
            data: category
        });
    } catch (error) {
        console.error('Get category error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching category',
            error: error.message
        });
    }
};

// Create category
const createCategory = async (req, res) => {
    try {
        const { name, description, status } = req.body;

        if (!name || !name.trim()) {
            return res.status(400).json({
                success: false,
                message: 'Category name is required'
            });
        }

        // Check if category exists
        const existingCategory = await BlogCategory.findOne({
            name: { $regex: new RegExp(`^${name.trim()}$`, 'i') }
        });

        if (existingCategory) {
            return res.status(400).json({
                success: false,
                message: 'Category already exists'
            });
        }

        const category = await BlogCategory.create({
            name: name.trim(),
            description: description || '',
            status: status || 'Active'
        });

        console.log('✅ Category created:', category.name);

        res.status(201).json({
            success: true,
            message: 'Category created successfully',
            data: category
        });
    } catch (error) {
        console.error('Create category error:', error);

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Category already exists'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Error creating category',
            error: error.message
        });
    }
};

// Update category
const updateCategory = async (req, res) => {
    try {
        const { name, description, status } = req.body;

        const category = await BlogCategory.findById(req.params.id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }

        // Check if new name exists (excluding current category)
        if (name && name !== category.name) {
            const existingCategory = await BlogCategory.findOne({
                name: { $regex: new RegExp(`^${name.trim()}$`, 'i') },
                _id: { $ne: req.params.id }
            });

            if (existingCategory) {
                return res.status(400).json({
                    success: false,
                    message: 'Category name already exists'
                });
            }
        }

        if (name) category.name = name.trim();
        if (description !== undefined) category.description = description;
        if (status) category.status = status;

        await category.save();

        console.log('✅ Category updated:', category.name);

        res.status(200).json({
            success: true,
            message: 'Category updated successfully',
            data: category
        });
    } catch (error) {
        console.error('Update category error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating category',
            error: error.message
        });
    }
};

// Delete category
const deleteCategory = async (req, res) => {
    try {
        const category = await BlogCategory.findByIdAndDelete(req.params.id);

        if (!category) {
            return res.status(404).json({
                success: false,
                message: 'Category not found'
            });
        }

        console.log('✅ Category deleted:', category.name);

        res.status(200).json({
            success: true,
            message: 'Category deleted successfully'
        });
    } catch (error) {
        console.error('Delete category error:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting category',
            error: error.message
        });
    }
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};