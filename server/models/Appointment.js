const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema(
    {
        appointmentId: {
            type: String,
            required: true,
            unique: true,
        },
        patientName: {
            type: String,
            required: true,
        },
        patientEmail: {
            type: String,
            required: true,
        },
        patientPhone: {
            type: String,
            required: true,
        },
        doctor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Doctor',
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        appointmentType: {
            type: String,
            enum: ['Online Consultation', 'In Person', 'Video Call', 'Phone Call'],
            default: 'In Person',
        },
        appointmentDate: {
            type: Date,
            required: true,
        },
        appointmentTime: {
            type: String,
            required: true,
        },
        reason: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['Scheduled', 'Confirmed', 'Checked In', 'Checked Out', 'Cancelled'],
            default: 'Scheduled',
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        notes: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

// Generate unique appointment ID
appointmentSchema.pre('save', async function (next) {
    if (!this.appointmentId) {
        const count = await mongoose.model('Appointment').countDocuments();
        this.appointmentId = `AP${String(count + 100000).slice(-6)}`;
    }
    next();
});

module.exports = mongoose.model('Appointment', appointmentSchema);