const mongoose = require('mongoose');

const diagnosisSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
        enum: [
            'Cardiology',
            'Neurology',
            'Orthopedics',
            'Pediatrics',
            'Dermatology',
            'ENT',
            'Ophthalmology',
            'Psychiatry',
            'General Medicine',
            'Surgery',
            'Gynecology',
            'Urology',
            'Oncology'
        ]
    },
    searchTerms: [String],
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

diagnosisSchema.index({ department: 1, description: 'text', searchTerms: 'text' });

module.exports = mongoose.model('Diagnosis', diagnosisSchema);