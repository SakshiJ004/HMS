const Doctor = require('../models/Doctor');
const User = require('../models/User')
const bcrypt = require('bcryptjs');

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
        const generatedPassword = generateDoctorPassword(username, dob);
        console.log('🔐 Generated password for doctor:', generatedPassword);

        const fullName = `${firstName} ${lastName}`;

        const doctor = await Doctor.create({
    firstName,
    lastName,
    fullName,

    hospitalId: req.user.hospitalId, // ✅ ADD THIS

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
console.log('🏥 Hospital ID:', req.user?.hospitalId);

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
        const query = { role: 'doctor' };
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }
        const doctors = await User.find(query)
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
        const query = { _id: req.params.id, role: 'doctor' };
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }
        const doctor = await User.findOne(query).select('-password');

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

        const query = { _id: id, role: 'doctor' };
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }

        const doctor = await User.findOneAndUpdate(
            query,
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
        const query = { _id: req.params.id, role: 'doctor' };
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }
        const doctor = await User.findOneAndDelete(query);

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
        const query = { _id: id };
        if (req.user && req.user.hospitalId) {
            query.hospitalId = req.user.hospitalId;
        }
        const doctor = await Doctor.findOne(query);

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