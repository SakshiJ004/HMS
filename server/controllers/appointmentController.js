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


// const Appointment = require('../models/Appointment');
// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const crypto = require('crypto');

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
//  * Create new patient (without password requirement from frontend)
//  */
// const createPatient = async (req, res) => {
//     try {
//         const {
//             firstName,
//             lastName,
//             email,
//             phone,
//             primaryDoctor,
//             dob,
//             gender,
//             bloodGroup,
//             status,
//             address,
//         } = req.body;

//         console.log('📝 Creating patient with data:', { firstName, lastName, email, phone });

//         // Validate required fields
//         if (!firstName || !lastName || !email || !phone || !primaryDoctor ||
//             !dob || !gender || !bloodGroup || !address?.address1 ||
//             !address?.state || !address?.city || !address?.pincode) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'All required fields must be provided',
//             });
//         }

//         // Check if email already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
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

//         // Check if primary doctor exists
//         const doctorExists = await User.findById(primaryDoctor);
//         if (!doctorExists || doctorExists.role !== 'doctor') {
//             return res.status(404).json({
//                 success: false,
//                 message: 'Primary doctor not found',
//             });
//         }

//         // Generate a secure random password
//         const tempPassword = crypto.randomBytes(16).toString('hex');

//         // Hash the password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(tempPassword, salt);

//         // Create patient with provider fields for local authentication
//         const patient = await User.create({
//             firstName,
//             lastName,
//             fullName: `${firstName} ${lastName}`,
//             email,
//             phone,
//             password: hashedPassword,
//             role: 'patient',
//             primaryDoctor,
//             dob,
//             gender,
//             bloodGroup,
//             status: status || 'Available',
//             address,
//             provider: 'local',
//             providerId: email, // Use email as unique providerId for local users
//         });

//         // Remove password from response
//         const patientResponse = patient.toObject();
//         delete patientResponse.password;

//         console.log('✅ Patient created:', patient.email);

//         res.status(201).json({
//             success: true,
//             message: 'Patient created successfully',
//             data: patientResponse,
//         });
//     } catch (error) {
//         console.error('Create patient error:', error);

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
//             message: 'Error creating patient',
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
//     createPatient,
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
const nodemailer = require('nodemailer');

/**
 * Email configuration
 * Add these to your .env file:
 * EMAIL_HOST=smtp.gmail.com
 * EMAIL_PORT=587
 * EMAIL_USER=your-email@gmail.com
 * EMAIL_PASS=your-app-password
 * EMAIL_FROM=noreply@preclinic.com
 */
const sendEmail = async (to, subject, html) => {
    try {
        // Create transporter
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: process.env.EMAIL_PORT || 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: process.env.EMAIL_FROM || 'Preclinic <noreply@preclinic.com>',
            to,
            subject,
            html,
        });

        console.log('✅ Email sent to:', to);
        return true;
    } catch (error) {
        console.error('❌ Email send error:', error);
        return false;
    }
};

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
 * Create new patient with email notification
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

        // Generate a secure temporary password (8 characters)
        const tempPassword = crypto.randomBytes(4).toString('hex'); // e.g., "a3f7b2c9"

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
            providerId: email,
        });

        // Send welcome email with login credentials
        const emailHTML = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                    .credentials { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea; }
                    .button { display: inline-block; background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                    .footer { text-align: center; margin-top: 30px; font-size: 12px; color: #666; }
                    .warning { background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #ffc107; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Welcome to Preclinic!</h1>
                    </div>
                    <div class="content">
                        <h2>Hello ${firstName} ${lastName},</h2>
                        <p>Your patient account has been successfully created. You can now access our healthcare management system.</p>
                        
                        <div class="credentials">
                            <h3>Your Login Credentials:</h3>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Temporary Password:</strong> <code style="background: #f0f0f0; padding: 5px 10px; border-radius: 3px; font-size: 16px;">${tempPassword}</code></p>
                        </div>

                        <div class="warning">
                            <strong>⚠️ Important Security Notice:</strong>
                            <p>Please change your password after your first login for security purposes.</p>
                        </div>

                        <a href="${process.env.FRONTEND_URL || 'http://localhost:5173'}/login" class="button">Login to Your Account</a>

                        <h3>What's Next?</h3>
                        <ul>
                            <li>Login using your credentials</li>
                            <li>Complete your profile information</li>
                            <li>Book appointments with your doctor</li>
                            <li>Access your medical records</li>
                        </ul>

                        <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>
                    </div>
                    <div class="footer">
                        <p>© 2025 Preclinic. All rights reserved.</p>
                        <p>This is an automated email. Please do not reply to this message.</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Send email (non-blocking - don't fail if email fails)
        sendEmail(
            email,
            'Welcome to Preclinic - Your Login Credentials',
            emailHTML
        ).catch(err => console.error('Email send failed:', err));

        // Remove password from response
        const patientResponse = patient.toObject();
        delete patientResponse.password;

        console.log('✅ Patient created:', patient.email);
        console.log('🔑 Temporary password:', tempPassword);

        res.status(201).json({
            success: true,
            message: 'Patient created successfully. Login credentials sent to email.',
            data: patientResponse,
            // Only send password in development mode
            ...(process.env.NODE_ENV === 'development' && { tempPassword }),
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