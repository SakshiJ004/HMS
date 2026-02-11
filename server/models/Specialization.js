const mongoose = require('mongoose');

const specializationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Specialization name is required'],
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    icon: {
        type: String,
        default: null
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    }
}, {
    timestamps: true
});

// Virtual field to count doctors
specializationSchema.virtual('doctorCount', {
    ref: 'User',
    localField: 'name',
    foreignField: 'department',
    count: true
});

// Enable virtuals in JSON
specializationSchema.set('toJSON', { virtuals: true });
specializationSchema.set('toObject', { virtuals: true });

const Specialization = mongoose.model('Specialization', specializationSchema);

module.exports = Specialization;