const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    let token;

    console.log('--- AUTH DEBUG START ---');
    console.log('URL:', req.method, req.originalUrl);
    console.log('Authorization header:', req.headers.authorization);
    console.log('Cookies:', req.cookies);

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
        console.log('Token extracted from header:', token);
    } else if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
        console.log('Token extracted from cookie:', token);
    } else {
        console.log('No Authorization header or cookie token found');
    }

    if (!token || token === 'null' || token === 'undefined' || token.trim() === '') {
        console.log('Token missing or invalid placeholder string. Value was:', JSON.stringify(token));
        console.log('--- AUTH DEBUG END ---');
        return res.status(401).json({
            success: false,
            message: 'Not authorized. No token provided.',
        });
    }

    console.log('Token length:', token.length);
    console.log('Token parts (should be 3, dot-separated):', token.split('.').length);
    console.log('Token raw value:', token);

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Token decoded successfully:', decoded);

        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user) {
            console.log('No user found for decoded id:', decoded.id);
            console.log('--- AUTH DEBUG END ---');
            return res.status(401).json({
                success: false,
                message: 'User not found. Please login again.',
            });
        }

        console.log('Authenticated user:', req.user._id, req.user.role);
        console.log('--- AUTH DEBUG END ---');
        next();
    } catch (error) {
        console.log('JWT verify failed. JWT_SECRET set?', !!process.env.JWT_SECRET);
        console.error('Token verification error:', error.name, '-', error.message);
        console.log('--- AUTH DEBUG END ---');
        return res.status(401).json({
            success: false,
            message: 'Not authorized. Invalid or expired token.',
        });
    }
};

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user || !roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: `Access denied. This resource is only accessible to ${roles.join(', ')} users.`,
            });
        }
        next();
    };
};

module.exports = { protect, authorize };