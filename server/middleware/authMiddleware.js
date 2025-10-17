const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Protect routes - Verify JWT token
 * Middleware to authenticate users using JWT token
 */
const protect = async (req, res, next) => {
    let token;

    // Check if authorization header exists and starts with 'Bearer'
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Get token from header (format: "Bearer TOKEN")
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Get user from token and attach to request object
            // Exclude password field from user data
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                return res.status(401).json({
                    success: false,
                    message: 'User not found. Please login again.',
                });
            }

            // Proceed to next middleware/controller
            next();
        } catch (error) {
            console.error('Token verification error:', error);
            return res.status(401).json({
                success: false,
                message: 'Not authorized. Invalid or expired token.',
            });
        }
    }

    // If no token found
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Not authorized. No token provided.',
        });
    }
};

const authorize = (...roles) => {
    return (req, res, next) => {
        // Check if user role is included in allowed roles
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Access denied. This resource is only accessible to ${roles.join(', ')} users.`,
            });
        }
        next();
    };
};

module.exports = { protect, authorize };