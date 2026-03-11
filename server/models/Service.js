// backend/models/Service.js
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Service name is required'],
            trim: true,
        },
        department: {
            type: String,
            required: [true, 'Department is required'],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, 'Price is required'],
            min: 0,
        },
        status: {
            type: String,
            enum: ['Active', 'Inactive'],
            default: 'Active',
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Service', serviceSchema);