const Appointment = require('../models/Appointment');
const User = require('../models/User');

/**
 * Generate unique appointment ID
 * Format: AP + 6 random digits
 * Example: AP234567
 */
const generateAppointmentId = async () => {
    let appointmentId;
    let isUnique = false;

    while (!isUnique) {
        // Generate 6-digit random number
        const randomNum = Math.floor(100000 + Math.random() * 900000);
        appointmentId = `AP${randomNum}`;

        // Check if this ID already exists
        const existingAppointment = await Appointment.findOne({ appointmentId });

        if (!existingAppointment) {
            isUnique = true;
        }
    }

    return appointmentId;
};

/**
 * @route   POST /api/appointments
 * @desc    Create new appointment
 * @access  Private (Admin, Doctor)
 */
const createAppointment = async (req, res) => {
    try {
        const {
            patientId,
            doctorId,
            department,
            appointmentType,
            appointmentDate,
            appointmentTime,
            reason,
            status,
            notes,
        } = req.body;

        console.log('📝 Creating appointment with data:', {
            patientId,
            doctorId,
            department,
            appointmentType,
            appointmentDate,
            appointmentTime,
            status,
        });

        // Validation
        if (!patientId || !doctorId || !department || !appointmentType ||
            !appointmentDate || !appointmentTime || !reason) {
            return res.status(400).json({
                success: false,
                message: 'All required fields must be filled',
            });
        }

        // Verify patient exists and has patient role
        const patient = await User.findById(patientId);
        if (!patient) {
            return res.status(404).json({
                success: false,
                message: 'Patient not found. Please select a valid patient.',
            });
        }
        if (patient.role !== 'patient') {
            return res.status(400).json({
                success: false,
                message: 'Selected user is not a patient. Please select a valid patient.',
            });
        }

        // Verify doctor exists and has doctor role
        const doctor = await User.findById(doctorId);
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found. Please select a valid doctor.',
            });
        }
        if (doctor.role !== 'doctor') {
            return res.status(400).json({
                success: false,
                message: 'Selected user is not a doctor. Please select a valid doctor.',
            });
        }

        // Check if doctor is available at the requested time
        const appointmentDateTime = new Date(appointmentDate);
        const existingAppointment = await Appointment.findOne({
            doctor: doctorId,
            appointmentDate: appointmentDateTime,
            appointmentTime: appointmentTime,
            status: { $nin: ['Cancelled'] }, // Exclude cancelled appointments
        });

        if (existingAppointment) {
            return res.status(400).json({
                success: false,
                message: `Dr. ${doctor.fullName} is not available at ${appointmentTime} on this date. Please select another time slot.`,
            });
        }

        // Generate unique appointment ID
        const appointmentId = await generateAppointmentId();
        console.log('✅ Generated Appointment ID:', appointmentId);

        // Create appointment
        const appointment = await Appointment.create({
            appointmentId,
            patient: patientId,
            doctor: doctorId,
            department,
            appointmentType,
            appointmentDate: appointmentDateTime,
            appointmentTime,
            reason: reason.trim(),
            status: status || 'Schedule',
            notes: notes || '',
            createdBy: req.user.id,
        });

        // Populate patient and doctor details
        await appointment.populate([
            { path: 'patient', select: 'fullName email' },
            { path: 'doctor', select: 'fullName email' },
        ]);

        console.log('✅ Appointment created successfully:', {
            id: appointment._id,
            appointmentId: appointment.appointmentId,
            patient: appointment.patient.fullName,
            doctor: appointment.doctor.fullName,
        });

        res.status(201).json({
            success: true,
            message: `Appointment ${appointmentId} created successfully!`,
            data: appointment,
        });
    } catch (error) {
        console.error('❌ Create appointment error:', error);

        // Handle duplicate key error
        if (error.code === 11000) {
            return res.status(400).json({
                success: false,
                message: 'An appointment with this ID already exists. Please try again.',
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
            message: 'An error occurred while creating appointment. Please try again.',
            error: error.message,
        });
    }
};

/**
 * @route   GET /api/appointments
 * @desc    Get all appointments with filters
 * @access  Private (Admin)
 */
const getAllAppointments = async (req, res) => {
    try {
        const { status, startDate, endDate, patientId, doctorId, department } = req.query;

        // Build filter query
        let filter = {};

        if (status) filter.status = status;
        if (patientId) filter.patient = patientId;
        if (doctorId) filter.doctor = doctorId;
        if (department) filter.department = department;

        if (startDate && endDate) {
            filter.appointmentDate = {
                $gte: new Date(startDate),
                $lte: new Date(endDate),
            };
        }

        const appointments = await Appointment.find(filter)
            .populate('patient', 'fullName email')
            .populate('doctor', 'fullName email')
            .populate('createdBy', 'fullName email role')
            .sort({ createdAt: -1 }); // Most recent first

        console.log(`✅ Retrieved ${appointments.length} appointments`);

        res.status(200).json({
            success: true,
            count: appointments.length,
            data: appointments,
        });
    } catch (error) {
        console.error('❌ Get appointments error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching appointments',
            error: error.message,
        });
    }
};

/**
 * @route   GET /api/appointments/:id
 * @desc    Get single appointment by ID
 * @access  Private
 */
const getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id)
            .populate('patient', 'fullName email')
            .populate('doctor', 'fullName email')
            .populate('createdBy', 'fullName email role');

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
        console.error('❌ Get appointment error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching appointment',
            error: error.message,
        });
    }
};

/**
 * @route   GET /api/appointments/doctors/list
 * @desc    Get list of all doctors for dropdown
 * @access  Private
 */
const getDoctorsList = async (req, res) => {
    try {
        const doctors = await User.find({ role: 'doctor' })
            .select('fullName email')
            .sort({ fullName: 1 });

        console.log(`✅ Retrieved ${doctors.length} doctors for dropdown`);

        res.status(200).json({
            success: true,
            count: doctors.length,
            data: doctors,
        });
    } catch (error) {
        console.error('❌ Get doctors list error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching doctors',
            error: error.message,
        });
    }
};

/**
 * @route   GET /api/appointments/patients/list
 * @desc    Get list of all patients for dropdown
 * @access  Private
 */
const getPatientsList = async (req, res) => {
    try {
        const patients = await User.find({ role: 'patient' })
            .select('fullName email')
            .sort({ fullName: 1 });

        console.log(`✅ Retrieved ${patients.length} patients for dropdown`);

        res.status(200).json({
            success: true,
            count: patients.length,
            data: patients,
        });
    } catch (error) {
        console.error('❌ Get patients list error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching patients',
            error: error.message,
        });
    }
};

/**
 * @route   GET /api/appointments/departments/list
 * @desc    Get list of all departments
 * @access  Private
 */
const getDepartmentsList = (req, res) => {
    try {
        const departments = [
            'Cardiology',
            'Neurology',
            'Orthopedics',
            'Pediatrics',
            'Gynecology',
            'Dermatology',
            'Psychiatry',
            'Radiology',
            'Oncology',
            'Dental',
            'General Medicine',
            'Internal Medicine',
            'Surgery',
            'Anesthesiology',
            'Emergency Medicine',
            'Pathology',
            'Ophthalmology',
            'ENT (Ear, Nose & Throat)',
            'Urology',
            'Nephrology',
            'Gastroenterology',
            'Pulmonology',
            'Endocrinology',
            'Rheumatology',
            'Hematology',
            'Infectious Diseases',
            'Allergy & Immunology',
            'Physical Medicine & Rehabilitation',
            'Sports Medicine',
            'Geriatrics',
            'Obstetrics',
            'Neonatology',
            'Plastic Surgery',
            'Vascular Surgery',
            'Thoracic Surgery',
            'Neurosurgery',
            'Trauma Surgery',
            'Critical Care',
            'Pain Management',
            'Palliative Care',
        ].sort();

        res.status(200).json({
            success: true,
            count: departments.length,
            data: departments,
        });
    } catch (error) {
        console.error('❌ Get departments list error:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred while fetching departments',
            error: error.message,
        });
    }
};

module.exports = {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
    getDoctorsList,
    getPatientsList,
    getDepartmentsList,
};