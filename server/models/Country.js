const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    countryCode: {
        type: String,
        required: [true, 'Country code is required'],
        trim: true,
        unique: true,
        uppercase: true,
    },
    name: {
        type: String,
        required: [true, 'Country name is required'],
        trim: true,
        unique: true,
    },
    flag: {
        type: String,   // flag image filename e.g. "us.png"
        default: '',
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HospitalSetup',
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active',
    },
}, { timestamps: true });

module.exports = mongoose.model('Country', countrySchema);