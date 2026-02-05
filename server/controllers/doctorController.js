// // ============================================
// // FILE: backend/controllers/doctorController.js
// // ============================================
// const User = require('../models/User');
// const bcrypt = require('bcryptjs');

// /**
//  * Generate doctor credentials
//  * Format: username@birthyear
//  * Example: merry@1980
//  */
// const generateDoctorPassword = (username, dob) => {
//     const birthYear = new Date(dob).getFullYear();
//     return `${username.toLowerCase()}@${birthYear}`;
// };

// /**
//  * Create new doctor (Admin only)
//  * @route   POST /api/doctors
//  * @access  Private (Admin)
//  */
// const createDoctor = async (req, res) => {
//     try {
//         const {
//             firstName,
//             lastName,
//             username,
//             email,
//             phone,
//             dob,
//             yearOfExperience,
//             department,
//             designation,
//             medicalLicenseNumber,
//             languageSpoken,
//             bloodGroup,
//             gender,
//             bio,
//             featureOnWebsite,
//             address,
//             appointmentType,
//             acceptBookingsDays,
//             appointmentDuration,
//             consultationCharge,
//             maxBookingsPerSlot,
//             displayOnBookingPage,
//             education,
//             awards,
//             certifications,
//             schedules,
//             profileImage,
//         } = req.body;

//         console.log('📝 Creating doctor with data:', { firstName, lastName, email, username });

//         // ===========================
//         // VALIDATION
//         // ===========================

//         // Required fields validation
//         const requiredFields = {
//             firstName,
//             lastName,
//             username,
//             email,
//             phone,
//             dob,
//             yearOfExperience,
//             department,
//             designation,
//             medicalLicenseNumber,
//             bloodGroup,
//             gender,
//         };

//         const missingFields = Object.entries(requiredFields)
//             .filter(([key, value]) => !value)
//             .map(([key]) => key);

//         if (missingFields.length > 0) {
//             return res.status(400).json({
//                 success: false,
//                 message: `Missing required fields: ${missingFields.join(', ')}`,
//             });
//         }

//         // Address validation
//         if (!address?.address1 || !address?.state || !address?.city || !address?.pincode) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Complete address information is required',
//             });
//         }

//         // Email validation
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(email)) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Invalid email format',
//             });
//         }

//         // Check if email already exists
//         const existingEmail = await User.findOne({ email: email.toLowerCase() });
//         if (existingEmail) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Email already registered',
//             });
//         }

//         // Check if phone already exists
//         const existingPhone = await User.findOne({ phone });
//         if (existingPhone) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Phone number already registered',
//             });
//         }

//         // Check if username already exists
//         const existingUsername = await User.findOne({ username: username.toLowerCase() });
//         if (existingUsername) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'Username already taken',
//             });
//         }

//         // ===========================
//         // PASSWORD GENERATION
//         // ===========================

//         // Generate password: username@birthyear
//         const generatedPassword = generateDoctorPassword(username, dob);
//         console.log('🔐 Generated password for doctor:', generatedPassword);

//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(generatedPassword, salt);

//         // ===========================
//         // CREATE DOCTOR
//         // ===========================

//         const fullName = `${firstName} ${lastName}`;

//         const doctor = await User.create({
//             firstName,
//             lastName,
//             fullName,
//             username: username.toLowerCase(),
//             email: email.toLowerCase(),
//             phone,
//             password: hashedPassword,
//             role: 'doctor', // ✅ EXPLICITLY SET ROLE
//             provider: 'local',
//             providerId: email.toLowerCase(),
//             isEmailVerified: true, // Admin-created accounts are auto-verified

//             // Doctor-specific fields
//             dob,
//             yearOfExperience,
//             department,
//             designation,
//             medicalLicenseNumber,
//             languageSpoken: languageSpoken || [],
//             bloodGroup,
//             gender,
//             bio,
//             featureOnWebsite: featureOnWebsite || false,
//             profileImage: profileImage || null,

//             // Address
//             address,

//             // Appointment settings
//             appointmentType,
//             acceptBookingsDays: acceptBookingsDays || 0,
//             appointmentDuration: appointmentDuration || 30,
//             consultationCharge: consultationCharge || 0,
//             maxBookingsPerSlot: maxBookingsPerSlot || 1,
//             displayOnBookingPage: displayOnBookingPage || false,

//             // Professional details
//             education: education || [],
//             awards: awards || [],
//             certifications: certifications || [],
//             schedules: schedules || [],
//         });

//         // Remove password from response
//         const doctorResponse = doctor.toObject();
//         delete doctorResponse.password;

//         console.log('✅ Doctor created successfully:', doctor.email);

//         res.status(201).json({
//             success: true,
//             message: 'Doctor created successfully',
//             data: {
//                 ...doctorResponse,
//                 credentials: {
//                     email: doctor.email,
//                     password: generatedPassword, // ✅ Return plaintext password for admin to share
//                     username: username.toLowerCase(),
//                 },
//             },
//         });
//     } catch (error) {
//         console.error('❌ Create doctor error:', error);

//         // Handle MongoDB duplicate key errors
//         if (error.code === 11000) {
//             const field = Object.keys(error.keyPattern)[0];
//             return res.status(400).json({
//                 success: false,
//                 message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`,
//             });
//         }

//         res.status(500).json({
//             success: false,
//             message: 'Error creating doctor',
//             error: error.message,
//         });
//     }
// };

// /**
//  * Get all doctors
//  * @route   GET /api/doctors
//  * @access  Private
//  */
// const getDoctors = async (req, res) => {
//     try {
//         const doctors = await User.find({ role: 'doctor' })
//             .select('-password')
//             .sort({ createdAt: -1 });

//         res.status(200).json({
//             success: true,
//             count: doctors.length,
//             data: doctors,
//         });
//     } catch (error) {
//         console.error('Get doctors error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error fetching doctors',
//             error: error.message,
//         });
//     }
// };

// /**
//  * Get single doctor
//  * @route   GET /api/doctors/:id
//  * @access  Private
//  */
// const getDoctor = async (req, res) => {
//     try {
//         const doctor = await User.findOne({
//             _id: req.params.id,
//             role: 'doctor',
//         }).select('-password');

//         if (!doctor) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Doctor not found',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: doctor,
//         });
//     } catch (error) {
//         console.error('Get doctor error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error fetching doctor',
//             error: error.message,
//         });
//     }
// };

// /**
//  * Update doctor
//  * @route   PUT /api/doctors/:id
//  * @access  Private (Admin)
//  */
// const updateDoctor = async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Prevent password update through this endpoint
//         delete req.body.password;
//         delete req.body.role; // Prevent role change

//         const doctor = await User.findOneAndUpdate(
//             { _id: id, role: 'doctor' },
//             req.body,
//             {
//                 new: true,
//                 runValidators: true,
//             }
//         ).select('-password');

//         if (!doctor) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Doctor not found',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'Doctor updated successfully',
//             data: doctor,
//         });
//     } catch (error) {
//         console.error('Update doctor error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error updating doctor',
//             error: error.message,
//         });
//     }
// };

// /**
//  * Delete doctor
//  * @route   DELETE /api/doctors/:id
//  * @access  Private (Admin)
//  */
// const deleteDoctor = async (req, res) => {
//     try {
//         const doctor = await User.findOneAndDelete({
//             _id: req.params.id,
//             role: 'doctor',
//         });

//         if (!doctor) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Doctor not found',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'Doctor deleted successfully',
//         });
//     } catch (error) {
//         console.error('Delete doctor error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error deleting doctor',
//             error: error.message,
//         });
//     }
// };

// module.exports = {
//     createDoctor,
//     getDoctors,
//     getDoctor,
//     updateDoctor,
//     deleteDoctor,
// };



// ============================================
// FILE: backend/controllers/doctorController.js (FIXED)
// ============================================
const Doctor = require('../models/Doctor');
const User = require('../models/User')
const bcrypt = require('bcryptjs');

/**
 * Generate doctor credentials
 * Format: username@birthyear (e.g., john@1990)
 * FIXED: Handle date string properly and lowercase username
 */
const generateDoctorPassword = (username, dob) => {
    // Ensure username is lowercase
    const lowerUsername = String(username).toLowerCase().trim();

    // Parse date properly - handle both Date objects and strings
    let birthYear;
    if (typeof dob === 'string') {
        // Handle ISO string format (2024-01-15)
        const dobDate = new Date(dob + 'T00:00:00Z'); // Add time to prevent timezone issues
        birthYear = dobDate.getFullYear();
    } else if (dob instanceof Date) {
        birthYear = dob.getFullYear();
    } else {
        birthYear = new Date(dob).getFullYear();
    }

    const capitalizedUsername = lowerUsername.charAt(0).toUpperCase() + lowerUsername.slice(1);
    const password = `${capitalizedUsername}@${birthYear}`;

    return password;
};

/**
 * Create new doctor (Admin only)
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

        console.log('📝 Creating doctor with data:', { firstName, lastName, email, username, dob });

        // ===========================
        // VALIDATION
        // ===========================

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

        if (!address?.address1 || !address?.state || !address?.city || !address?.pincode) {
            return res.status(400).json({
                success: false,
                message: 'Complete address information is required',
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email format',
            });
        }

        const existingEmail = await User.findOne({ email: email.toLowerCase() });
        if (existingEmail) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered',
            });
        }

        const existingPhone = await User.findOne({ phone });
        if (existingPhone) {
            return res.status(400).json({
                success: false,
                message: 'Phone number already registered',
            });
        }

        const existingUsername = await User.findOne({ username: username.toLowerCase() });
        if (existingUsername) {
            return res.status(400).json({
                success: false,
                message: 'Username already taken',
            });
        }

        // ===========================
        // PASSWORD GENERATION & HASHING
        // ===========================

        const generatedPassword = generateDoctorPassword(username, dob);
        console.log('🔐 Generated password for doctor:', generatedPassword);

        // const salt = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(generatedPassword, salt);
        // console.log('✅ Password hashed successfully');

        // ===========================
        // CREATE DOCTOR
        // ===========================

        const fullName = `${firstName} ${lastName}`;

        const doctor = await Doctor.create({
            firstName,
            lastName,
            fullName,
            username: username.toLowerCase().trim(),
            email: email.toLowerCase(),
            phone,
            password: generatedPassword,
            role: 'doctor',
            provider: 'local',
            providerId: email.toLowerCase(),
            isEmailVerified: true,

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

            address,

            appointmentType,
            acceptBookingsDays: acceptBookingsDays || 0,
            appointmentDuration: appointmentDuration || 30,
            consultationCharge: consultationCharge || 0,
            maxBookingsPerSlot: maxBookingsPerSlot || 1,
            displayOnBookingPage: displayOnBookingPage || false,

            education: education || [],
            awards: awards || [],
            certifications: certifications || [],
            schedules: schedules || [],
            fromDate: null,
            toDate: null,
        });

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
                    password: generatedPassword,
                    username: username.toLowerCase().trim(),
                },
            },
        });
    } catch (error) {
        console.error('❌ Create doctor error:', error);

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
 */
const updateDoctor = async (req, res) => {
    try {
        const { id } = req.params;

        delete req.body.password;
        delete req.body.role;

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
// Add to your doctor controller
const updateDoctorSchedule = async (req, res) => {
    try {
        const { id } = req.params;
        const { schedules, fromDate, toDate } = req.body;

        console.log('📝 Updating schedule for:', id);
        console.log('📅 Data:', { fromDate, toDate, schedulesCount: schedules?.length });

        // ✅ Use Doctor model directly for proper discriminator field access
        const doctor = await Doctor.findById(id);

        if (!doctor) {
            console.log('❌ Doctor not found');
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        console.log('✅ Found:', doctor.fullName);

        // Clean schedules
        if (schedules && Array.isArray(schedules)) {
            const cleaned = schedules
                .map(day => ({
                    day: day.day,
                    timeSlots: (day.timeSlots || [])
                        .filter(slot =>
                            slot.startTime && slot.endTime &&
                            slot.startTime !== "00:00:00" && slot.endTime !== "00:00:00" &&
                            slot.startTime !== "00:00" && slot.endTime !== "00:00"
                        )
                        .map(slot => ({
                            startTime: slot.startTime,
                            endTime: slot.endTime
                        }))
                }))
                .filter(day => day.timeSlots.length > 0);

            doctor.schedules = cleaned;
            console.log('✅ Set schedules:', cleaned.length, 'days');
        }

        // Set dates
        if (fromDate) {
            const from = new Date(fromDate);
            from.setHours(0, 0, 0, 0);
            doctor.fromDate = from;
            console.log('✅ fromDate:', from.toISOString().split('T')[0]);
        }

        if (toDate) {
            const to = new Date(toDate);
            to.setHours(23, 59, 59, 999);
            doctor.toDate = to;
            console.log('✅ toDate:', to.toISOString().split('T')[0]);
        }

        // Calculate days
        if (fromDate && toDate) {
            const diffDays = Math.ceil((new Date(toDate) - new Date(fromDate)) / (1000 * 60 * 60 * 24));
            doctor.acceptBookingsDays = diffDays;
            console.log('✅ acceptBookingsDays:', diffDays);
        }

        await doctor.save();
        console.log('💾 Saved');

        // Verify
        const verified = await Doctor.findById(id);
        console.log('🔍 VERIFIED:');
        console.log('  fromDate:', verified.fromDate);
        console.log('  toDate:', verified.toDate);
        console.log('  schedules:', verified.schedules?.length || 0);

        res.status(200).json({
            success: true,
            message: 'Schedule updated',
            data: {
                schedules: verified.schedules,
                fromDate: verified.fromDate,
                toDate: verified.toDate,
                acceptBookingsDays: verified.acceptBookingsDays
            }
        });
    } catch (error) {
        console.error('❌ Error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating schedule',
            error: error.message
        });
    }
};

module.exports = {
    createDoctor,
    getDoctors,
    getDoctor,
    updateDoctor,
    deleteDoctor,
    updateDoctorSchedule,
};