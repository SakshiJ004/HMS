// const Appointment = require('../models/Appointment');
// const User = require('../models/User');

// /**
//  * Generate unique appointment ID
//  */
// const generateAppointmentId = async () => {
//     const prefix = 'AP';
//     const lastAppointment = await Appointment.findOne()
//         .sort({ createdAt: -1 })
//         .select('appointmentId');

//     if (!lastAppointment) {
//         return `${prefix}0001`; // Starting ID
//     }

//     const lastNumber = parseInt(lastAppointment.appointmentId.replace(prefix, ''));
//     const newNumber = lastNumber + 1;
//     return `${prefix}${String(newNumber).padStart(4, '0')}`;
// };

// /**
//  * Get all doctors
//  */
// const getDoctors = async (req, res) => {
//     try {
//         const doctors = await User.find({ role: 'doctor' })
//             .select('fullName email profileImage')
//             .sort({ fullName: 1 });

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
//  * Get all patients
//  */
// const getPatients = async (req, res) => {
//     try {
//         const patients = await User.find({ role: 'patient' })
//             .select('fullName email profileImage')
//             .sort({ fullName: 1 });

//         res.status(200).json({
//             success: true,
//             count: patients.length,
//             data: patients,
//         });
//     } catch (error) {
//         console.error('Get patients error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error fetching patients',
//             error: error.message,
//         });
//     }
// };

// /**
//  * Create new appointment
//  */
// const createAppointment = async (req, res) => {
//     try {
//         const {
//             patient,
//             doctor,
//             department,
//             appointmentType,
//             appointmentDate,
//             appointmentTime,
//             reason,
//             status,
//         } = req.body;

//         // Validate required fields
//         if (!patient || !doctor || !department || !appointmentType ||
//             !appointmentDate || !appointmentTime || !reason) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'All fields are required',
//             });
//         }

//         // Check if patient exists
//         const patientExists = await User.findById(patient);
//         if (!patientExists || patientExists.role !== 'patient') {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Patient not found',
//             });
//         }

//         // Check if doctor exists
//         const doctorExists = await User.findById(doctor);
//         if (!doctorExists || doctorExists.role !== 'doctor') {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Doctor not found',
//             });
//         }

//         // Generate appointment ID
//         const appointmentId = await generateAppointmentId();

//         // Create appointment
//         const appointment = await Appointment.create({
//             appointmentId,
//             patient,
//             doctor,
//             department,
//             appointmentType,
//             appointmentDate,
//             appointmentTime,
//             reason,
//             status: status || 'Schedule',
//         });

//         // Populate patient and doctor details
//         await appointment.populate([
//             { path: 'patient', select: 'fullName email profileImage' },
//             { path: 'doctor', select: 'fullName email profileImage' },
//         ]);

//         console.log('✅ Appointment created:', appointmentId);

//         res.status(201).json({
//             success: true,
//             message: 'Appointment created successfully',
//             data: appointment,
//         });
//     } catch (error) {
//         console.error('Create appointment error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error creating appointment',
//             error: error.message,
//         });
//     }
// };

// /**
//  * Get all appointments
//  */
// const getAppointments = async (req, res) => {
//     try {
//         const appointments = await Appointment.find()
//             .populate('patient', 'fullName email profileImage')
//             .populate('doctor', 'fullName email profileImage')
//             .sort({ createdAt: -1 });

//         res.status(200).json({
//             success: true,
//             count: appointments.length,
//             data: appointments,
//         });
//     } catch (error) {
//         console.error('Get appointments error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error fetching appointments',
//             error: error.message,
//         });
//     }
// };

// /**
//  * Get single appointment
//  */
// const getAppointment = async (req, res) => {
//     try {
//         const appointment = await Appointment.findById(req.params.id)
//             .populate('patient', 'fullName email profileImage')
//             .populate('doctor', 'fullName email profileImage');

//         if (!appointment) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Appointment not found',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: appointment,
//         });
//     } catch (error) {
//         console.error('Get appointment error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error fetching appointment',
//             error: error.message,
//         });
//     }
// };

// /**
//  * Update appointment
//  */
// const updateAppointment = async (req, res) => {
//     try {
//         const appointment = await Appointment.findByIdAndUpdate(
//             req.params.id,
//             req.body,
//             {
//                 new: true,
//                 runValidators: true,
//             }
//         )
//             .populate('patient', 'fullName email profileImage')
//             .populate('doctor', 'fullName email profileImage');

//         if (!appointment) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Appointment not found',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'Appointment updated successfully',
//             data: appointment,
//         });
//     } catch (error) {
//         console.error('Update appointment error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error updating appointment',
//             error: error.message,
//         });
//     }
// };

// /**
//  * Delete appointment
//  */
// const deleteAppointment = async (req, res) => {
//     try {
//         const appointment = await Appointment.findByIdAndDelete(req.params.id);

//         if (!appointment) {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Appointment not found',
//             });
//         }

//         res.status(200).json({
//             success: true,
//             message: 'Appointment deleted successfully',
//         });
//     } catch (error) {
//         console.error('Delete appointment error:', error);
//         res.status(500).json({
//             success: false,
//             message: 'Error deleting appointment',
//             error: error.message,
//         });
//     }
// };

// module.exports = {
//     getDoctors,
//     getPatients,
//     createAppointment,
//     getAppointments,
//     getAppointment,
//     updateAppointment,
//     deleteAppointment,
// };


const Appointment = require('../models/Appointment');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

/**
 * Generate unique appointment ID
 */
const generateAppointmentId = async () => {
    const prefix = 'AP';
    const lastAppointment = await Appointment.findOne()
        .sort({ createdAt: -1 })
        .select('appointmentId');

    if (!lastAppointment) {
        return `${prefix}0001`; // Starting ID
    }

    const lastNumber = parseInt(lastAppointment.appointmentId.replace(prefix, ''));
    const newNumber = lastNumber + 1;
    return `${prefix}${String(newNumber).padStart(4, '0')}`;
};

/**
 * Get all doctors
 */
const getDoctors = async (req, res) => {
    try {
        const doctors = await User.find({ role: 'doctor' })
            .select('fullName email profileImage')
            .sort({ fullName: 1 });

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
 * Get all patients
 */
const getPatients = async (req, res) => {
    try {
        const patients = await User.find({ role: 'patient' })
            .select('fullName email profileImage')
            .sort({ fullName: 1 });

        res.status(200).json({
            success: true,
            count: patients.length,
            data: patients,
        });
    } catch (error) {
        console.error('Get patients error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching patients',
            error: error.message,
        });
    }
};

/**
 * Create new patient (without password requirement from frontend)
 */
const createPatient = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            email,
            phone,
            primaryDoctor,
            dob,
            gender,
            bloodGroup,
            status,
            address,
        } = req.body;

        console.log('📝 Creating patient with data:', { firstName, lastName, email, phone });

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !primaryDoctor ||
            !dob || !gender || !bloodGroup || !address?.address1 ||
            !address?.state || !address?.city || !address?.pincode) {
            return res.status(400).json({
                success: false,
                message: 'All required fields must be provided',
            });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
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

        // Check if primary doctor exists
        const doctorExists = await User.findById(primaryDoctor);
        if (!doctorExists || doctorExists.role !== 'doctor') {
            return res.status(404).json({
                success: false,
                message: 'Primary doctor not found',
            });
        }

        // Generate a secure random password
        const tempPassword = crypto.randomBytes(16).toString('hex');

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(tempPassword, salt);

        // Create patient with provider fields for local authentication
        const patient = await User.create({
            firstName,
            lastName,
            fullName: `${firstName} ${lastName}`,
            email,
            phone,
            password: hashedPassword,
            role: 'patient',
            primaryDoctor,
            dob,
            gender,
            bloodGroup,
            status: status || 'Available',
            address,
            provider: 'local',
            providerId: email, // Use email as unique providerId for local users
        });

        // Remove password from response
        const patientResponse = patient.toObject();
        delete patientResponse.password;

        console.log('✅ Patient created:', patient.email);

        res.status(201).json({
            success: true,
            message: 'Patient created successfully',
            data: patientResponse,
        });
    } catch (error) {
        console.error('Create patient error:', error);

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
            message: 'Error creating patient',
            error: error.message,
        });
    }
};

/**
 * Create new appointment
 */
const createAppointment = async (req, res) => {
    try {
        const {
            patient,
            doctor,
            department,
            appointmentType,
            appointmentDate,
            appointmentTime,
            reason,
            status,
        } = req.body;

        // Validate required fields
        if (!patient || !doctor || !department || !appointmentType ||
            !appointmentDate || !appointmentTime || !reason) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Check if patient exists
        const patientExists = await User.findById(patient);
        if (!patientExists || patientExists.role !== 'patient') {
            return res.status(404).json({
                success: false,
                message: 'Patient not found',
            });
        }

        // Check if doctor exists
        const doctorExists = await User.findById(doctor);
        if (!doctorExists || doctorExists.role !== 'doctor') {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found',
            });
        }

        // Generate appointment ID
        const appointmentId = await generateAppointmentId();

        // Create appointment
        const appointment = await Appointment.create({
            appointmentId,
            patient,
            doctor,
            department,
            appointmentType,
            appointmentDate,
            appointmentTime,
            reason,
            status: status || 'Schedule',
        });

        // Populate patient and doctor details
        await appointment.populate([
            { path: 'patient', select: 'fullName email profileImage' },
            { path: 'doctor', select: 'fullName email profileImage' },
        ]);

        console.log('✅ Appointment created:', appointmentId);

        res.status(201).json({
            success: true,
            message: 'Appointment created successfully',
            data: appointment,
        });
    } catch (error) {
        console.error('Create appointment error:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating appointment',
            error: error.message,
        });
    }
};

/**
 * Get all appointments
 */
const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find()
            .populate('patient', 'fullName email profileImage')
            .populate('doctor', 'fullName email profileImage')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: appointments.length,
            data: appointments,
        });
    } catch (error) {
        console.error('Get appointments error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching appointments',
            error: error.message,
        });
    }
};

/**
 * Get single appointment
 */
const getAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id)
            .populate('patient', 'fullName email profileImage')
            .populate('doctor', 'fullName email profileImage');

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: 'Appointment not found',
            });
        }

        res.status(200).json({
            success: true,
            data: appointment,
        });
    } catch (error) {
        console.error('Get appointment error:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching appointment',
            error: error.message,
        });
    }
};

/**
 * Update appointment
 */
const updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        )
            .populate('patient', 'fullName email profileImage')
            .populate('doctor', 'fullName email profileImage');

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: 'Appointment not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Appointment updated successfully',
            data: appointment,
        });
    } catch (error) {
        console.error('Update appointment error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating appointment',
            error: error.message,
        });
    }
};

/**
 * Delete appointment
 */
const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndDelete(req.params.id);

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: 'Appointment not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Appointment deleted successfully',
        });
    } catch (error) {
        console.error('Delete appointment error:', error);
        res.status(500).json({
            success: false,
            message: 'Error deleting appointment',
            error: error.message,
        });
    }
};

module.exports = {
    getDoctors,
    getPatients,
    createPatient,
    createAppointment,
    getAppointments,
    getAppointment,
    updateAppointment,
    deleteAppointment,
};