
const mongoose = require('mongoose');

const specializationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Specialization name is required'],
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: null,
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active',
    },
}, { timestamps: true });

module.exports = mongoose.model('Specialization', specializationSchema);