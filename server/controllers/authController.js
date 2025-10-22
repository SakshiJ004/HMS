// const jwt = require('jsonwebtoken');
// const User = require('../models/User');


// const generateToken = (id, role) => {
//     return jwt.sign({ id, role }, process.env.JWT_SECRET, {
//         expiresIn: '30d', // Token expires in 30 days
//     });
// };

// const validatePassword = (password) => {
//     // At least 8 characters
//     if (password.length < 8) {
//         return { isValid: false, message: 'Password must be at least 8 characters long' };
//     }

//     // At least one uppercase letter
//     if (!/[A-Z]/.test(password)) {
//         return { isValid: false, message: 'Password must contain at least one uppercase letter' };
//     }

//     // At least one number
//     if (!/[0-9]/.test(password)) {
//         return { isValid: false, message: 'Password must contain at least one number' };
//     }

//     // At least one special character
//     if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//         return { isValid: false, message: 'Password must contain at least one special character' };
//     }

//     return { isValid: true, message: 'Password is valid' };
// };


// const validateEmail = (email) => {
//     // Must contain @ symbol
//     if (!email.includes('@')) {
//         return { isValid: false, message: 'Email must contain @ symbol' };
//     }

//     // Must end with gmail.com
//     if (!email.endsWith('gmail.com')) {
//         return { isValid: false, message: 'Email must end with gmail.com' };
//     }

//     // Full email format validation
//     // Full email format validation (Gmail only)
//     const emailRegex = /^[a-zA-Z0-9._+-]+@gmail\.com$/;

//     if (!emailRegex.test(email)) {
//         return { isValid: false, message: 'Please provide a valid Gmail address' };
//     }

//     return { isValid: true, message: 'Email is valid' };
// };

// const registerUser = async (req, res) => {
//     try {
//         const { fullName, email, password, confirmPassword } = req.body;

//         // Validate all required fields
//         if (!fullName || !email || !password || !confirmPassword) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'All fields are required',
//             });
//         }

//         // Validate email format
//         const emailValidation = validateEmail(email);
//         if (!emailValidation.isValid) {
//             return res.status(400).json({
//                 success: false,
//                 message: emailValidation.message,
//             });
//         }

//         // Validate password strength
//         const passwordValidation = validatePassword(password);
//         if (!passwordValidation.isValid) {
//             return res.status(400).json({
//                 success: false,
//                 message: passwordValidation.message,
//             });
//         }

//         // Check if passwords match
//         if (password !== confirmPassword) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Password and Confirm Password do not match. Please ensure both fields are identical.',
//             });
//         }

//         // Check if user already exists
//         const userExists = await User.findOne({ email });
//         if (userExists) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'An account with this email already exists. Please login or use a different email.',
//             });
//         }

//         // Create new user
//         const user = await User.create({
//             fullName,
//             email,
//             password,
//             role: 'patient', // Default role is patient
//         });

//         // Generate JWT token
//         const token = generateToken(user._id, user.role);

//         // Send response with user data and token
//         res.status(201).json({
//             success: true,
//             message: 'Registration successful! Welcome to Preclinic.',
//             data: {
//                 _id: user._id,
//                 fullName: user.fullName,
//                 email: user.email,
//                 role: user.role,
//                 token,
//             },
//         });
//     } catch (error) {
//         console.error('Registration error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'An error occurred during registration. Please try again later.',
//             error: error.message,
//         });
//     }
// };

// const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Validate required fields
//         if (!email || !password) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Email and password are required',
//             });
//         }

//         // Find user by email
//         const user = await User.findOne({ email });

//         // Check if user exists
//         if (!user) {
//             return res.status(401).json({
//                 success: false,
//                 message: 'No account found with this email. Please register first',
//             });
//         }

//         // Check if password matches
//         const isPasswordCorrect = await user.matchPassword(password);
//         if (!isPasswordCorrect) {
//             return res.status(401).json({
//                 success: false,
//                 message: 'Invalid email or password. Please check your credentials and try again.',
//             });
//         }

//         // Generate JWT token
//         const token = generateToken(user._id, user.role);

//         // Send response with user data and token
//         res.status(200).json({
//             success: true,
//             message: 'Login successful! Redirecting to your dashboard...',
//             data: {
//                 _id: user._id,
//                 fullName: user.fullName,
//                 email: user.email,
//                 role: user.role,
//                 token,
//             },
//         });
//     } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'An error occurred during login. Please try again later.',
//             error: error.message,
//         });
//     }
// };

// const getMe = async (req, res) => {
//     try {
//         // User is already attached to request by auth middleware
//         const user = await User.findById(req.user.id).select('-password');

//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'User not found',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: user,
//         });
//     } catch (error) {
//         console.error('Get profile error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'An error occurred while fetching user profile',
//             error: error.message,
//         });
//     }
// };

// module.exports = {
//     registerUser,
//     loginUser,
//     getMe,
// };


const jwt = require('jsonwebtoken');
const User = require('../models/User');

const generateToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Token expires in 30 days
    });
};

const validatePassword = (password) => {
    // At least 8 characters
    if (password.length < 8) {
        return { isValid: false, message: 'Password must be at least 8 characters long' };
    }

    // At least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return { isValid: false, message: 'Password must contain at least one uppercase letter' };
    }

    // At least one number
    if (!/[0-9]/.test(password)) {
        return { isValid: false, message: 'Password must contain at least one number' };
    }

    // At least one special character
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return { isValid: false, message: 'Password must contain at least one special character' };
    }

    return { isValid: true, message: 'Password is valid' };
};

const validateEmail = (email) => {
    // Must contain @ symbol
    if (!email.includes('@')) {
        return { isValid: false, message: 'Email must contain @ symbol' };
    }

    // Must end with gmail.com
    if (!email.endsWith('gmail.com')) {
        return { isValid: false, message: 'Email must end with gmail.com' };
    }

    // ✅ FIXED: Updated regex to allow numbers in email
    const emailRegex = /^[a-zA-Z0-9._+-]+@gmail\.com$/;

    if (!emailRegex.test(email)) {
        return { isValid: false, message: 'Please provide a valid Gmail address' };
    }

    return { isValid: true, message: 'Email is valid' };
};

const registerUser = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword } = req.body;

        console.log('📝 Registration attempt:', { fullName, email }); // Debug log

        // Validate all required fields
        if (!fullName || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Validate email format
        const emailValidation = validateEmail(email);
        if (!emailValidation.isValid) {
            console.log('❌ Email validation failed:', emailValidation.message);
            return res.status(400).json({
                success: false,
                message: emailValidation.message,
            });
        }

        // Validate password strength
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            console.log('❌ Password validation failed:', passwordValidation.message);
            return res.status(400).json({
                success: false,
                message: passwordValidation.message,
            });
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: 'Password and Confirm Password do not match. Please ensure both fields are identical.',
            });
        }

        // Check if user already exists
        const userExists = await User.findOne({ email: email.toLowerCase() });
        if (userExists) {
            console.log('❌ User already exists:', email);
            return res.status(400).json({
                success: false,
                message: 'An account with this email already exists. Please login or use a different email.',
            });
        }

        // Create new user
        const user = await User.create({
            fullName,
            email: email.toLowerCase(),
            password,
            role: 'patient', // Default role is patient
        });

        console.log('✅ User created successfully:', user._id);

        // Generate JWT token
        const token = generateToken(user._id, user.role);

        // Split fullName into firstName and lastName for frontend
        const nameParts = fullName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        // Send response with user data and token
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

        // Handle MongoDB duplicate key error
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'An account with this email already exists.',
            });
        }

        // Handle validation errors
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
        const { email, password } = req.body;

        console.log('🔐 Login attempt:', { email }); // Debug log

        // Validate required fields
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required',
            });
        }

        // Find user by email
        const user = await User.findOne({ email: email.toLowerCase() });

        // Check if user exists
        if (!user) {
            console.log('❌ User not found:', email);
            return res.status(401).json({
                success: false,
                message: 'No account found with this email. Please register first',
            });
        }

        // Check if password matches
        const isPasswordCorrect = await user.matchPassword(password);
        if (!isPasswordCorrect) {
            console.log('❌ Invalid password for:', email);
            return res.status(401).json({
                success: false,
                message: 'Invalid email or password. Please check your credentials and try again.',
            });
        }

        console.log('✅ Login successful:', user._id);

        // Generate JWT token
        const token = generateToken(user._id, user.role);

        // Split fullName into firstName and lastName for frontend
        const nameParts = user.fullName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        // Send response with user data and token
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
        // User is already attached to request by auth middleware
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