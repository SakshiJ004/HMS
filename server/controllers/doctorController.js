// ============================================
// FILE: backend/controllers/doctorController.js
// ============================================
const User = require('../models/User');
const bcrypt = require('bcryptjs');

/**
 * Generate doctor credentials
 * Format: username@birthyear
 * Example: merry@1980
 */
const generateDoctorPassword = (username, dob) => {
    const birthYear = new Date(dob).getFullYear();
    return `${username.toLowerCase()}@${birthYear}`;
};

/**
 * Create new doctor (Admin only)
 * @route   POST /api/doctors
 * @access  Private (Admin)
 */
const createDoctor = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            username,
            email,
            phone,
            dob,
            yearOfExperience,
            department,
            designation,
            medicalLicenseNumber,
            languageSpoken,
            bloodGroup,
            gender,
            bio,
            featureOnWebsite,
            address,
            appointmentType,
            acceptBookingsDays,
            appointmentDuration,
            consultationCharge,
            maxBookingsPerSlot,
            displayOnBookingPage,
            education,
            awards,
            certifications,
            schedules,
            profileImage,
        } = req.body;

        console.log('📝 Creating doctor with data:', { firstName, lastName, email, username });

        // ===========================
        // VALIDATION
        // ===========================
        
        // Required fields validation
        const requiredFields = {
            firstName,
            lastName,
            username,
            email,
            phone,
            dob,
            yearOfExperience,
            department,
            designation,
            medicalLicenseNumber,
            bloodGroup,
            gender,
        };

        const missingFields = Object.entries(requiredFields)
            .filter(([key, value]) => !value)
            .map(([key]) => key);

        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `Missing required fields: ${missingFields.join(', ')}`,
            });
        }

        // Address validation
        if (!address?.address1 || !address?.state || !address?.city || !address?.pincode) {
            return res.status(400).json({
                success: false,
                message: 'Complete address information is required',
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format',
            });
        }

        // Check if email already exists
        const existingEmail = await User.findOne({ email: email.toLowerCase() });
        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered',
            });
        }

        // Check if phone already exists
        const existingPhone = await User.findOne({ phone });
        if (existingPhone) {
            return res.status(400).json({
                success: false,
                message: 'Phone number already registered',
            });
        }

        // Check if username already exists
        const existingUsername = await User.findOne({ username: username.toLowerCase() });
        if (existingUsername) {
            return res.status(400).json({
                success: false,
                message: 'Username already taken',
            });
        }

        // ===========================
        // PASSWORD GENERATION
        // ===========================
        
        // Generate password: username@birthyear
        const generatedPassword = generateDoctorPassword(username, dob);
        console.log('🔐 Generated password for doctor:', generatedPassword);

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(generatedPassword, salt);

        // ===========================
        // CREATE DOCTOR
        // ===========================
        
        const fullName = `${firstName} ${lastName}`;

        const doctor = await User.create({
            firstName,
            lastName,
            fullName,
            username: username.toLowerCase(),
            email: email.toLowerCase(),
            phone,
            password: hashedPassword,
            role: 'doctor', // ✅ EXPLICITLY SET ROLE
            provider: 'local',
            providerId: email.toLowerCase(),
            isEmailVerified: true, // Admin-created accounts are auto-verified
            
            // Doctor-specific fields
            dob,
            yearOfExperience,
            department,
            designation,
            medicalLicenseNumber,
            languageSpoken: languageSpoken || [],
            bloodGroup,
            gender,
            bio,
            featureOnWebsite: featureOnWebsite || false,
            profileImage: profileImage || null,
            
            // Address
            address,
            
            // Appointment settings
            appointmentType,
            acceptBookingsDays: acceptBookingsDays || 0,
            appointmentDuration: appointmentDuration || 30,
            consultationCharge: consultationCharge || 0,
            maxBookingsPerSlot: maxBookingsPerSlot || 1,
            displayOnBookingPage: displayOnBookingPage || false,
            
            // Professional details
            education: education || [],
            awards: awards || [],
            certifications: certifications || [],
            schedules: schedules || [],
        });

        // Remove password from response
        const doctorResponse = doctor.toObject();
        delete doctorResponse.password;

        console.log('✅ Doctor created successfully:', doctor.email);

        res.status(201).json({
            success: true,
            message: 'Doctor created successfully',
            data: {
                ...doctorResponse,
                credentials: {
                    email: doctor.email,
                    password: generatedPassword, // ✅ Return plaintext password for admin to share
                    username: username.toLowerCase(),
                },
            },
        });
    } catch (error) {
        console.error('❌ Create doctor error:', error);

        // Handle MongoDB duplicate key errors
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return res.status(400).json({
                success: false,
                message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`,
            });
        }

        res.status(500).json({
            success: false,
            message: 'Error creating doctor',
            error: error.message,
        });
    }
};

/**
 * Get all doctors
 * @route   GET /api/doctors
 * @access  Private
 */
const getDoctors = async (req, res) => {
    try {
        const doctors = await User.find({ role: 'doctor' })
            .select('-password')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: doctors.length,
            data: doctors,
        });
    } catch (error) {
        console.error('Get doctors error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching doctors',
            error: error.message,
        });
    }
};

/**
 * Get single doctor
 * @route   GET /api/doctors/:id
 * @access  Private
 */
const getDoctor = async (req, res) => {
    try {
        const doctor = await User.findOne({
            _id: req.params.id,
            role: 'doctor',
        }).select('-password');

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found',
            });
        }

        res.status(200).json({
            success: true,
            data: doctor,
        });
    } catch (error) {
        console.error('Get doctor error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching doctor',
            error: error.message,
        });
    }
};

/**
 * Update doctor
 * @route   PUT /api/doctors/:id
 * @access  Private (Admin)
 */
const updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Prevent password update through this endpoint
        delete req.body.password;
        delete req.body.role; // Prevent role change
        
        const doctor = await User.findOneAndUpdate(
            { _id: id, role: 'doctor' },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        ).select('-password');

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Doctor updated successfully',
            data: doctor,
        });
    } catch (error) {
        console.error('Update doctor error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating doctor',
            error: error.message,
        });
    }
};

/**
 * Delete doctor
 * @route   DELETE /api/doctors/:id
 * @access  Private (Admin)
 */
const deleteDoctor = async (req, res) => {
    try {
        const doctor = await User.findOneAndDelete({
            _id: req.params.id,
            role: 'doctor',
        });

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Doctor deleted successfully',
        });
    } catch (error) {
        console.error('Delete doctor error:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting doctor',
            error: error.message,
        });
    }
};

module.exports = {
    createDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor,
};