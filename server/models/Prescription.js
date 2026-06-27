const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    prescriptionId: {
        type: String,
        unique: true
    },
    consultationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OnlineConsultation',
        required: true
    },
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    medications: [{
        medicineName: String,
        dosage: String,
        frequency: String,
        duration: String,
        instructions: String,
        emptyStomach: Boolean
    }],
    advice: [{
        advice: String
    }],
    diagnosis: [{
        code: String,
        description: String,
        type: String,
        notes: String
    }],
    followUp: {
        nextConsultation: Date,
        emptyStomach: Boolean,
        notes: String
    },
    department: String,
    prescribedOn: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Active', 'Expired'],
        default: 'Active'
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HospitalSetup'
    }
}, { timestamps: true });

// Auto-generate prescription ID
prescriptionSchema.pre('save', async function (next) {
    if (!this.prescriptionId) {
        const count = await mongoose.model('Prescription').countDocuments();
        this.prescriptionId = `PRE${String(count + 1).padStart(4, '0')}`;
    }
    next();
});

module.exports = mongoose.model('Prescription', prescriptionSchema);