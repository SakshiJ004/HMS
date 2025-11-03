const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

/**
 * Get all doctors for dropdown
 */
exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find({ status: 'Active' })
            .select('firstName lastName email specialization department')
            .sort({ firstName: 1 });

        const formattedDoctors = doctors.map(doctor => ({
            value: doctor._id,
            label: `Dr. ${doctor.firstName} ${doctor.lastName}`,
            specialization: doctor.specialization,
            department: doctor.department,
        }));

        res.status(200).json({
            success: true,
            data: formattedDoctors,
        });
    } catch (error) {
        console.error('Error fetching doctors:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch doctors',
            error: error.message,
        });
    }
};

/**
 * Get all departments for dropdown
 */
exports.getDepartments = async (req, res) => {
    try {
        const departments = [
            { value: 'Cardiology', label: 'Cardiology' },
            { value: 'Neurology', label: 'Neurology' },
            { value: 'Pediatrics', label: 'Pediatrics' },
            { value: 'Orthopedics', label: 'Orthopedics' },
            { value: 'Dermatology', label: 'Dermatology' },
            { value: 'Gynecology', label: 'Gynecology' },
            { value: 'Psychiatry', label: 'Psychiatry' },
            { value: 'Oncology', label: 'Oncology' },
            { value: 'Pulmonology', label: 'Pulmonology' },
            { value: 'Urology', label: 'Urology' },
            { value: 'General Medicine', label: 'General Medicine' },
        ];

        res.status(200).json({
            success: true,
            data: departments,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to fetch departments',
        });
    }
};

/**
 * Create new appointment (Admin only)
 */
exports.createAppointment = async (req, res) => {
    try {
        const {
            patientName,
            patientEmail,
            patientPhone,
            doctor,
            department,
            appointmentType,
            appointmentDate,
            appointmentTime,
            reason,
            status,
            notes,
        } = req.body;

        // Validate required fields
        if (!patientName || !patientEmail || !patientPhone || !doctor || !department || !appointmentDate || !appointmentTime || !reason) {
            return res.status(400).json({
                success: false,
                message: 'Please provide all required fields',
            });
        }

        // Verify doctor exists
        const doctorExists = await Doctor.findById(doctor);
        if (!doctorExists) {
            return res.status(404).json({
                success: false,
                message: 'Doctor not found',
            });
        }

        // Check for conflicting appointments
        const existingAppointment = await Appointment.findOne({
            doctor,
            appointmentDate,
            appointmentTime,
            status: { $nin: ['Cancelled'] },
        });

        if (existingAppointment) {
            return res.status(400).json({
                success: false,
                message: 'This time slot is already booked for the selected doctor',
            });
        }

        // Create new appointment
        const appointment = new Appointment({
            patientName,
            patientEmail,
            patientPhone,
            doctor,
            department,
            appointmentType: appointmentType || 'In Person',
            appointmentDate,
            appointmentTime,
            reason,
            status: status || 'Scheduled',
            notes,
            createdBy: req.user._id,
        });

        await appointment.save();

        // Populate doctor details
        await appointment.populate('doctor', 'firstName lastName specialization');

        res.status(201).json({
            success: true,
            message: 'Appointment created successfully',
            data: appointment,
        });
    } catch (error) {
        console.error('Error creating appointment:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create appointment',
            error: error.message,
        });
    }
};

/**
 * Get all appointments with filters
 */
exports.getAppointments = async (req, res) => {
    try {
        const { search, doctor, department, status, startDate, endDate, sort } = req.query;

        let query = {};

        // Search filter
        if (search) {
            query.$or = [
                { patientName: { $regex: search, $options: 'i' } },
                { patientEmail: { $regex: search, $options: 'i' } },
                { appointmentId: { $regex: search, $options: 'i' } },
            ];
        }

        // Filter by doctor
        if (doctor) {
            query.doctor = doctor;
        }

        // Filter by department
        if (department) {
            query.department = department;
        }

        // Filter by status
        if (status) {
            query.status = status;
        }

        // Date range filter
        if (startDate || endDate) {
            query.appointmentDate = {};
            if (startDate) {
                query.appointmentDate.$gte = new Date(startDate);
            }
            if (endDate) {
                query.appointmentDate.$lte = new Date(endDate);
            }
        }

        // Sort
        let sortOption = { createdAt: -1 }; // Default: Recent first
        if (sort === 'oldest') {
            sortOption = { createdAt: 1 };
        }

        const appointments = await Appointment.find(query)
            .populate('doctor', 'firstName lastName specialization department')
            .sort(sortOption);

        res.status(200).json({
            success: true,
            count: appointments.length,
            data: appointments,
        });
    } catch (error) {
        console.error('Error fetching appointments:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch appointments',
            error: error.message,
        });
    }
};

/**
 * Get appointment by ID
 */
exports.getAppointmentById = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id)
            .populate('doctor', 'firstName lastName specialization department')
            .populate('createdBy', 'fullName email');

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
        console.error('Error fetching appointment:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch appointment',
            error: error.message,
        });
    }
};

/**
 * Update appointment
 */
exports.updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).populate('doctor', 'firstName lastName specialization');

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
        console.error('Error updating appointment:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update appointment',
            error: error.message,
        });
    }
};

/**
 * Delete appointment
 */
exports.deleteAppointment = async (req, res) => {
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
        console.error('Error deleting appointment:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete appointment',
            error: error.message,
        });
    }
};