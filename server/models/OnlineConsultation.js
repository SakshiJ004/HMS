const mongoose = require('mongoose');

const onlineConsultationSchema = new mongoose.Schema({
    appointmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
        required: true
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HospitalSetup',
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

    // Vitals Section
    vitals: {
        temperature: { value: String, unit: { type: String, default: 'F' } },
        pulse: { value: String, unit: { type: String, default: 'mmHg' } },
        respiratoryRate: { value: String, unit: { type: String, default: 'rpm' } },
        spo2: { value: String, unit: { type: String, default: '%' } },
        height: { value: String, unit: { type: String, default: 'cm' } },
        weight: { value: String, unit: { type: String, default: 'kg' } },
        bmi: { value: String, unit: { type: String, default: '%' } },
        waist: { value: String, unit: { type: String, default: 'cm' } }
    },

    // Complaints Section
    complaints: [{
        complaint: String,
        duration: String,
        severity: String
    }],

    // Diagnosis Section
    diagnosis: [{
        code: String,
        description: String,
        type: String,
        notes: String
    }],

    // Medications Section
    medications: [{
        medicineName: String,
        dosage: String,
        frequency: String,
        duration: String,
        instructions: String,
        emptyStomach: Boolean
    }],

    // Advice Section
    advice: [{
        advice: String
    }],

    // Investigation Section
    investigations: [{
        name: String,
        type: String,
        instructions: String
    }],

    // Follow Up Section
    followUp: {
        nextConsultation: Date,
        emptyStomach: Boolean,
        notes: String
    },

    // Invoice Section
    invoice: {
        items: [{
            description: String,
            amount: Number
        }],
        consultationFee: Number,
        totalAmount: Number,
        paymentStatus: {
            type: String,
            enum: ['Pending', 'Paid', 'Partially Paid'],
            default: 'Pending'
        }
    },

    status: {
        type: String,
        enum: ['In Progress', 'Completed', 'Cancelled'],
        default: 'In Progress'
    },

    // Schema मध्ये add कर:
    videoRoomUrl: {
        type: String,
        default: null
    },
    videoRoomName: {
        type: String,
        default: null
    },
    
    completedAt: Date

}, { timestamps: true });

module.exports = mongoose.model('OnlineConsultation', onlineConsultationSchema);