const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Generate token with dynamic expiration
const generateToken = (id, role, rememberMe = false) => {
    const expiresIn = rememberMe ? '30d' : '24h'; // 30 days if Remember Me is checked, otherwise 24 hours

    return jwt.sign({ id, role }, process.env.JWT_SECRET, {
        expiresIn,
    });
};

const validatePassword = (password) => {
    if (password.length < 8) {
        return { isValid: false, message: 'Password must be at least 8 characters long' };
    }
    if (!/[A-Z]/.test(password)) {
        return { isValid: false, message: 'Password must contain at least one uppercase letter' };
    }
    if (!/[0-9]/.test(password)) {
        return { isValid: false, message: 'Password must contain at least one number' };
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return { isValid: false, message: 'Password must contain at least one special character' };
    }
    return { isValid: true, message: 'Password is valid' };
};

const validateEmail = (email) => {
    if (!email.includes('@')) {
        return { isValid: false, message: 'Email must contain @ symbol' };
    }
    if (!email.endsWith('gmail.com')) {
        return { isValid: false, message: 'Email must end with gmail.com' };
    }
    const emailRegex = /^[a-zA-Z0-9._+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
        return { isValid: false, message: 'Please provide a valid Gmail address' };
    }
    return { isValid: true, message: 'Email is valid' };
};

const registerUser = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body;

        console.log('📝 Registration attempt:', { fullName, email });

        if (!fullName || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        const emailValidation = validateEmail(email);
        if (!emailValidation.isValid) {
            return res.status(400).json({
                success: false,
                message: emailValidation.message,
            });
        }

        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            return res.status(400).json({
                success: false,
                message: passwordValidation.message,
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Password and Confirm Password do not match. Please ensure both fields are identical.',
            });
        }

        const userExists = await User.findOne({ email: email.toLowerCase() });
        if (userExists) {
            return res.status(400).json({
                success: false,
                message: 'An account with this email already exists. Please login or use a different email.',
            });
        }

        const user = await User.create({
            fullName,
            email: email.toLowerCase(),
            password,
            role: 'patient',
        });

        console.log('✅ User created successfully:', user._id);

        const token = generateToken(user._id, user.role);

        const nameParts = fullName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        res.status(201).json({
            success: true,
            message: 'Registration successful! Welcome to Preclinic.',
            data: {
                _id: user._id,
                fullName: user.fullName,
                firstName: firstName,
                lastName: lastName,
                email: user.email,
                role: user.role,
                token,
            },
        });
    } catch (error) {
        console.error('❌ Registration error:', error);

        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'An account with this email already exists.',
            });
        }

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: messages.join(', '),
            });
        }

        res.status(500).json({
            success: false,
            message: 'An error occurred during registration. Please try again later.',
            error: error.message,
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password, rememberMe } = req.body;

        console.log('🔐 Login attempt:', { email, rememberMe });

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required',
            });
        }

        const user = await User.findOne({ email: email.toLowerCase() });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'No account found with this email. Please register first',
            });
        }

        const isPasswordCorrect = await user.matchPassword(password);
        if (!isPasswordCorrect) {
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password. Please check your credentials and try again.',
            });
        }

        console.log('✅ Login successful:', user._id);

        // Generate token with Remember Me support
        const token = generateToken(user._id, user.role, rememberMe);

        const nameParts = user.fullName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        res.status(200).json({
            success: true,
            message: 'Login successful! Redirecting to your dashboard...',
            data: {
                _id: user._id,
                fullName: user.fullName,
                firstName: firstName,
                lastName: lastName,
                email: user.email,
                role: user.role,
                token,
                rememberMe, // Send back rememberMe status
            },
        });
    } catch (error) {
        console.error('❌ Login error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred during login. Please try again later.',
            error: error.message,
        });
    }
};

const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }

        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching user profile',
            error: error.message,
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getMe,
};