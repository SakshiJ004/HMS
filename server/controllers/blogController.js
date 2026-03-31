const Blog = require('../models/Blog');

// Get all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find()
            .populate('author', 'fullName email profileImage')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: blogs.length,
            data: blogs
        });
    } catch (error) {
        console.error('Get blogs error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching blogs',
            error: error.message
        });
    }
};

// Get single blog by ID
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id)
            .populate('author', 'fullName email profileImage');

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        // Increment view count
        blog.views += 1;
        await blog.save();

        res.status(200).json({
            success: true,
            data: blog
        });
    } catch (error) {
        console.error('Get blog error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching blog',
            error: error.message
        });
    }
};

// Create new blog
const createBlog = async (req, res) => {
    try {
        const { title, category, content, tags, featureImage, status } = req.body;

        // Get author from authenticated user
        const author = req.user?._id;

        if (!author) {
            return res.status(401).json({
                success: false,
                message: 'User not authenticated'
            });
        }

        // Validation
        if (!title || !category || !content) {
            return res.status(400).json({
                success: false,
                message: 'Title, category, and content are required'
            });
        }

        const blog = await Blog.create({
            title,
            category,
            content,
            tags: tags || [],
            featureImage: featureImage || null,
            author,
            status: status || 'Published'
        });

        // Populate author details
        await blog.populate('author', 'fullName email profileImage');

        console.log('✅ Blog created:', blog.title);

        res.status(201).json({
            success: true,
            message: 'Blog created successfully',
            data: blog
        });
    } catch (error) {
        console.error('Create blog error:', error);

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'Blog with this title already exists'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Error creating blog',
            error: error.message
        });
    }
};

// Update blog
const updateBlog = async (req, res) => {
    try {
        const { title, category, content, tags, featureImage, status } = req.body;

        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        // Update fields
        if (title) blog.title = title;
        if (category) blog.category = category;
        if (content) blog.content = content;
        if (tags) blog.tags = tags;
        if (featureImage !== undefined) blog.featureImage = featureImage;
        if (status) blog.status = status;

        await blog.save();
        await blog.populate('author', 'fullName email profileImage');

        console.log('✅ Blog updated:', blog.title);

        res.status(200).json({
            success: true,
            message: 'Blog updated successfully',
            data: blog
        });
    } catch (error) {
        console.error('Update blog error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating blog',
            error: error.message
        });
    }
};

// Delete blog
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        console.log('✅ Blog deleted:', blog.title);

        res.status(200).json({
            success: true,
            message: 'Blog deleted successfully'
        });
    } catch (error) {
        console.error('Delete blog error:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting blog',
            error: error.message
        });
    }
};

module.exports = {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
};