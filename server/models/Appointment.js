const mongoose = require('mongoose');

/**
 * Appointment Schema Definition
 * Manages appointment bookings between patients and doctors
 */
const appointmentSchema = new mongoose.Schema(
    {
        appointmentId: {
            type: String,
            required: true,
            unique: true,
            // Format: AP + 6 digits (e.g., AP234567)
        },
        patient: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Patient is required'],
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Doctor is required'],
        },
        department: {
            type: String,
            required: [true, 'Department is required'],
            enum: [
                // Medical Departments
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
            ],
        },
        appointmentType: {
            type: String,
            required: [true, 'Appointment type is required'],
            enum: ['Online', 'In-Person'],
        },
        appointmentDate: {
            type: Date,
            required: [true, 'Appointment date is required'],
        },
        appointmentTime: {
            type: String,
            required: [true, 'Appointment time is required'],
            // Format: HH:mm (24-hour format)
        },
        reason: {
            type: String,
            required: [true, 'Appointment reason is required'],
            trim: true,
        },
        status: {
            type: String,
            enum: ['Schedule', 'Confirmed', 'Checked In', 'Checked Out', 'Cancelled'],
            default: 'Schedule',
        },
        // Additional fields for better tracking
        notes: {
            type: String,
            default: '',
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt
    }
);

// Indexes for faster queries
appointmentSchema.index({ appointmentId: 1 });
appointmentSchema.index({ appointmentDate: 1, status: 1 });
appointmentSchema.index({ patient: 1 });
appointmentSchema.index({ doctor: 1 });

// Pre-save hook to ensure appointment ID is always uppercase
appointmentSchema.pre('save', function (next) {
    if (this.appointmentId) {
        this.appointmentId = this.appointmentId.toUpperCase();
    }
    next();
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;