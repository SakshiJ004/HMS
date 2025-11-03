const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        specialization: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        qualification: {
            type: String,
        },
        experience: {
            type: Number,
        },
        status: {
            type: String,
            enum: ['Active', 'Inactive'],
            default: 'Active',
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Doctor', doctorSchema);