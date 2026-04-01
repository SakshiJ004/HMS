const BlogComment = require('../models/BlogComment');
const Blog = require('../models/Blog');

// Get all comments
const getAllComments = async (req, res) => {
    try {
        const comments = await BlogComment.find()
            .populate('blog', 'title slug')
            .populate('user', 'fullName email')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: comments.length,
            data: comments
        });
    } catch (error) {
        console.error('Get comments error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching comments',
            error: error.message
        });
    }
};

// Get comments for a specific blog
const getCommentsByBlog = async (req, res) => {
    try {
        const comments = await BlogComment.find({
            blog: req.params.blogId,
            status: 'Published'
        })
            .populate('user', 'fullName profileImage')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: comments.length,
            data: comments
        });
    } catch (error) {
        console.error('Get blog comments error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching comments',
            error: error.message
        });
    }
};

// Create comment (public endpoint - from blog page)
const createComment = async (req, res) => {
    try {
        const { blogId, customerName, email, comment } = req.body;

        // Validation
        if (!blogId || !customerName || !email || !comment) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }

        // Check if blog exists
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: 'Blog not found'
            });
        }

        // Get IP and user agent
        const ipAddress = req.ip || req.connection.remoteAddress;
        const userAgent = req.get('user-agent');

        const newComment = await BlogComment.create({
            blog: blogId,
            user: req.user?._id || null, // If logged in
            customerName: customerName.trim(),
            email: email.toLowerCase().trim(),
            comment: comment.trim(),
            status: 'Pending', // Admin approval required
            ipAddress,
            userAgent
        });

        await newComment.populate('blog', 'title');

        console.log('✅ Comment created:', newComment._id);

        res.status(201).json({
            success: true,
            message: 'Comment submitted successfully. It will be published after approval.',
            data: newComment
        });
    } catch (error) {
        console.error('Create comment error:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating comment',
            error: error.message
        });
    }
};

// Update comment status (admin only)
const updateCommentStatus = async (req, res) => {
    try {
        const { status } = req.body;

        if (!['Pending', 'Published', 'Unpublished', 'Spam'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status'
            });
        }

        const comment = await BlogComment.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        ).populate('blog', 'title');

        if (!comment) {
            return res.status(404).json({
                success: false,
                message: 'Comment not found'
            });
        }

        console.log('✅ Comment status updated:', comment._id, status);

        res.status(200).json({
            success: true,
            message: 'Comment status updated successfully',
            data: comment
        });
    } catch (error) {
        console.error('Update comment status error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating comment',
            error: error.message
        });
    }
};

// Delete comment (admin only)
const deleteComment = async (req, res) => {
    try {
        const comment = await BlogComment.findByIdAndDelete(req.params.id);

        if (!comment) {
            return res.status(404).json({
                success: false,
                message: 'Comment not found'
            });
        }

        console.log('✅ Comment deleted:', comment._id);

        res.status(200).json({
            success: true,
            message: 'Comment deleted successfully'
        });
    } catch (error) {
        console.error('Delete comment error:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting comment',
            error: error.message
        });
    }
};

module.exports = {
    getAllComments,
    getCommentsByBlog,
    createComment,
    updateCommentStatus,
    deleteComment
};