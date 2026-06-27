// backend/models/Holiday.model.js

const mongoose = require('mongoose');

const holidaySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Holiday name is required'],
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    date: {
        type: String,
        required: [true, 'Date is required'],
        trim: true
    },
    day: {
        type: String,
        required: [true, 'Day is required'],
        trim: true
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HospitalSetup'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Holiday', holidaySchema);