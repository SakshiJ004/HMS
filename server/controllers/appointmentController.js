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
            .select('fullName email profileImage phone department designation consultationCharge status')
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
            .populate({
                path: 'doctor',
                select: 'fullName name specialization profileImage profilePicture department status'
            })
            .populate({
                path: 'patient',
                select: 'fullName name email phone profileImage profilePicture'
            })
            .sort({ appointmentDate: -1, appointmentTime: -1 })
            .lean();

        // Transform data to ensure consistent field names
        const transformedAppointments = appointments.map(apt => ({
            ...apt,
            doctor: apt.doctor ? {
                _id: apt.doctor._id,
                name: apt.doctor.fullName || apt.doctor.name,
                fullName: apt.doctor.fullName || apt.doctor.name,
                specialization: apt.doctor.specialization,
                profilePicture: apt.doctor.profileImage || apt.doctor.profilePicture,
                profileImage: apt.doctor.profileImage || apt.doctor.profilePicture,
                department: apt.doctor.department,
                status: apt.doctor.status
            } : null,
            patient: apt.patient ? {
                _id: apt.patient._id,
                name: apt.patient.fullName || apt.patient.name,
                fullName: apt.patient.fullName || apt.patient.name,
                email: apt.patient.email,
                phone: apt.patient.phone,
                profilePicture: apt.patient.profileImage || apt.patient.profilePicture,
                profileImage: apt.patient.profileImage || apt.patient.profilePicture
            } : null
        }));

        res.status(200).json({
            success: true,
            data: transformedAppointments,
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

const updateAppointment = async (req, res) => {
    try {
        console.log('🔍 Updating appointment:', req.params.id);
        console.log('🔍 With data:', req.body);

        const appointment = await Appointment.findById(req.params.id);

        if (!appointment) {
            return res.status(404).json({
                success: false,
                message: 'Appointment not found',
            });
        }

        // Update only the fields that are provided
        Object.keys(req.body).forEach(key => {
            if (req.body[key] !== undefined) {
                appointment[key] = req.body[key];
            }
        });

        await appointment.save();

        await appointment.populate([
            { path: 'patient', select: 'fullName email profileImage' },
            { path: 'doctor', select: 'fullName email profileImage' },
        ]);

        res.status(200).json({
            success: true,
            message: 'Appointment updated successfully',
            data: appointment,
        });
    } catch (error) {
        console.error('❌ Full error:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating appointment',
            error: error.message,
            stack: error.stack, // Include for debugging
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

// In controllers/appointmentController.js

const getDoctorSchedule = async (req, res) => {
    try {
        const { doctorId } = req.params;

        console.log('🔍 Fetching schedule for doctor:', doctorId);

        // Find doctor with schedule data
        const doctor = await User.findById(doctorId).select(
            'schedules acceptBookingsDays appointmentDuration fullName department'
        );

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        console.log('✅ Doctor Found:', doctor.fullName);

        // Check if doctor has schedules
        if (!doctor.schedules || doctor.schedules.length === 0) {
            return res.json({
                success: true,
                data: {
                    schedule: [],
                    appointmentDuration: doctor.appointmentDuration || 30,
                    doctorName: doctor.fullName,
                    department: doctor.department,
                    message: 'Doctor has not set up their schedule yet'
                }
            });
        }

        // ✅ FIX: Generate available dates based on doctor's schedule
        const availableDates = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const maxDays = doctor.acceptBookingsDays || 30;
        console.log(`📅 Generating schedule for next ${maxDays} days`);

        for (let i = 0; i <= maxDays; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);

            const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

            // ✅ Find schedule for this day
            const daySchedule = doctor.schedules.find(s => s.day === dayName);

            // ✅ Skip if no schedule OR no time slots for this day
            if (!daySchedule || !daySchedule.timeSlots || daySchedule.timeSlots.length === 0) {
                console.log(`⚠️ Skipping ${dayName} (${date.toISOString().split('T')[0]}) - No schedule`);
                continue; // Skip Sunday or days without schedule
            }

            // ✅ Generate time slots based on appointment duration
            const timeSlots = [];
            const duration = doctor.appointmentDuration || 30;

            for (const slot of daySchedule.timeSlots) {
                const [startHour, startMin] = slot.startTime.split(':').map(Number);
                const [endHour, endMin] = slot.endTime.split(':').map(Number);

                const startMinutes = startHour * 60 + startMin;
                const endMinutes = endHour * 60 + endMin;

                // ✅ Generate slots
                for (let mins = startMinutes; mins < endMinutes; mins += duration) {
                    const slotHour = Math.floor(mins / 60);
                    const slotMin = mins % 60;

                    timeSlots.push({
                        startTime: `${String(slotHour).padStart(2, '0')}:${String(slotMin).padStart(2, '0')}`,
                        endTime: `${String(Math.floor((mins + duration) / 60)).padStart(2, '0')}:${String((mins + duration) % 60).padStart(2, '0')}`
                    });
                }
            }

            // ✅ Only add if we have generated time slots
            if (timeSlots.length > 0) {
                availableDates.push({
                    date: date.toISOString().split('T')[0], // YYYY-MM-DD format
                    day: dayName,
                    timeSlots: timeSlots
                });

                console.log(`✅ Added ${dayName} (${date.toISOString().split('T')[0]}) with ${timeSlots.length} slots`);
            }
        }

        console.log(`✅ Generated ${availableDates.length} available dates`);

        res.json({
            success: true,
            data: {
                schedule: availableDates,
                appointmentDuration: doctor.appointmentDuration || 30,
                doctorName: doctor.fullName,
                department: doctor.department
            }
        });
    } catch (error) {
        console.error('❌ Error fetching doctor schedule:', error);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching schedule',
            error: error.message
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
    getDoctorSchedule,
};