const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
    {
        appointmentId: {
            type: String,
            required: true,
            unique: true,
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
                'Cardiology',
                'Orthopedic',
                'Pediatrics',
                'Gynecology',
                'Psychiatry',
                'Neurosurgery',
                'Oncology',
                'Pulmonology',
                'Urology',
                'Dermatology',
            ],
        },
        appointmentType: {
            type: String,
            required: [true, 'Appointment type is required'],
            enum: ['Online Consultation', 'In-Person Visit', 'Emergency', 'Follow-up'],
        },
        appointmentDate: {
            type: Date,
            required: [true, 'Appointment date is required'],
        },
        appointmentTime: {
            type: String,
            required: [true, 'Appointment time is required'],
        },
        reason: {
            type: String,
            required: [true, 'Appointment reason is required'],
        },
        status: {
            type: String,
            enum: ['Scheduled', 'Confirmed', 'Checked In', 'Checked Out', 'Cancelled', 'Completed'],
            default: 'Schedule',
        },
        "schedule": [
            {
                "date": "2026-01-10",
                "timeSlots": ["09:00", "09:30", "10:00", "10:30", "14:00", "14:30"]
            },
            {
                "date": "2026-01-12",
                "timeSlots": ["09:00", "10:00", "11:00", "15:00", "16:00"]
            }
        ]
    },
    {
        timestamps: true,
    }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;