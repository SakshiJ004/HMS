const Appointment = require('../models/Appointment');
const User = require('../models/User');
const Patient = require('../models/Patient')
const { notificationHandlers } = require('../utils/notificationHelper')
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
        const patients = await Patient.find({ role: 'patient' })
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
        // ✅ ADD NOTIFICATION TRIGGER (around line 120)
        try {
            await notificationHandlers.newAppointment({
                appointmentId: appointment._id,
                patientName: appointment.patient.fullName,
                doctorName: appointment.doctor.fullName,
                appointmentDate: new Date(appointmentDate).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                }),
                appointmentTime: appointmentTime
            });
            console.log('✅ Notification sent for new appointment');
        } catch (notifError) {
            console.error('⚠️ Notification failed:', notifError);
        }

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

        // ✅ ADD THIS BEFORE res.status(200).json (around line 220)
        if (req.body.status === 'Cancelled') {
            try {
                await notificationHandlers.appointmentCancellation({
                    appointmentId: appointment._id,
                    patientName: appointment.patient.fullName,
                    doctorName: appointment.doctor.fullName,
                    reason: req.body.cancellationReason || 'No reason provided'
                });
                console.log('✅ Notification sent for cancelled appointment');
            } catch (notifError) {
                console.error('⚠️ Notification failed:', notifError);
            }
        }

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
        console.log('🔍 Fetching schedule for:', doctorId);

        const Doctor = require('../models/Doctor');
        const Appointment = require('../models/Appointment');

        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found'
            });
        }

        console.log('✅ Found:', doctor.fullName);

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

        // ✅ CRITICAL: Fetch all existing appointments for this doctor
        const existingAppointments = await Appointment.find({
            doctor: doctorId,
            status: { $nin: ['Cancelled', 'Checked Out'] } // Exclude cancelled and completed
        }).select('appointmentDate appointmentTime');

        console.log('📅 Existing appointments:', existingAppointments.length);

        // ✅ Create a Set of booked slots for fast lookup
        const bookedSlots = new Set();
        existingAppointments.forEach(apt => {
            const dateStr = new Date(apt.appointmentDate).toISOString().split('T')[0];
            const timeStr = apt.appointmentTime;
            const slotKey = `${dateStr}_${timeStr}`;
            bookedSlots.add(slotKey);
        });

        console.log('🔒 Booked slots:', Array.from(bookedSlots));

        const availableDates = [];
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let startDate = new Date(today);
        let endDate = new Date(today);

        if (doctor.fromDate) {
            const docFromDate = new Date(doctor.fromDate);
            docFromDate.setHours(0, 0, 0, 0);
            startDate = docFromDate;
        }

        if (doctor.toDate) {
            endDate = new Date(doctor.toDate);
            endDate.setHours(23, 59, 59, 999);
        } else {
            const maxDays = doctor.acceptBookingsDays || 30;
            endDate.setDate(startDate.getDate() + maxDays);
        }

        const daysToGenerate = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

        for (let i = 0; i <= daysToGenerate; i++) {
            const date = new Date(startDate);
            date.setDate(startDate.getDate() + i);
            date.setHours(0, 0, 0, 0);

            const dateStr = date.toISOString().split('T')[0];
            const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });

            // Skip past dates
            if (date < today) {
                continue;
            }

            const daySchedule = doctor.schedules.find(s => s.day === dayName);

            if (!daySchedule || !daySchedule.timeSlots || daySchedule.timeSlots.length === 0) {
                continue;
            }

            const hasValidSlots = daySchedule.timeSlots.some(
                slot => slot.startTime !== "00:00:00" && slot.endTime !== "00:00:00" &&
                    slot.startTime !== "00:00" && slot.endTime !== "00:00"
            );

            if (!hasValidSlots) {
                continue;
            }

            // Generate time slots
            const allTimeSlots = [];
            const duration = doctor.appointmentDuration || 30;

            for (const slot of daySchedule.timeSlots) {
                if (slot.startTime === "00:00:00" || slot.endTime === "00:00:00" ||
                    slot.startTime === "00:00" || slot.endTime === "00:00") {
                    continue;
                }

                const [startHour, startMin] = slot.startTime.split(':').map(Number);
                const [endHour, endMin] = slot.endTime.split(':').map(Number);

                const startMinutes = startHour * 60 + startMin;
                const endMinutes = endHour * 60 + endMin;

                for (let mins = startMinutes; mins < endMinutes; mins += duration) {
                    if (mins + duration > endMinutes) break;

                    const slotHour = Math.floor(mins / 60);
                    const slotMin = mins % 60;
                    const endMins = mins + duration;
                    const endSlotHour = Math.floor(endMins / 60);
                    const endSlotMin = endMins % 60;

                    const slotStart = `${String(slotHour).padStart(2, '0')}:${String(slotMin).padStart(2, '0')}`;
                    const slotEnd = `${String(endSlotHour).padStart(2, '0')}:${String(endSlotMin).padStart(2, '0')}`;

                    // ✅ CRITICAL: Check if this slot is already booked
                    const slotKey = `${dateStr}_${slotStart}`;

                    if (!bookedSlots.has(slotKey)) {
                        // ✅ Slot is available
                        allTimeSlots.push({
                            startTime: slotStart,
                            endTime: slotEnd,
                            isBooked: false
                        });
                    } else {
                        console.log(`🔒 BLOCKED: ${dateStr} ${slotStart} - Already booked`);
                    }
                }
            }

            // ✅ Only add date if it has at least one available slot
            if (allTimeSlots.length > 0) {
                availableDates.push({
                    date: dateStr,
                    day: dayName,
                    timeSlots: allTimeSlots
                });
                console.log(`✅ ${dateStr} (${dayName}): ${allTimeSlots.length} available slots`);
            } else {
                console.log(`⚠️ ${dateStr} (${dayName}): All slots booked`);
            }
        }

        console.log(`\n📊 RESULT: ${availableDates.length} dates with available slots`);

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
        console.error('❌ Error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
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