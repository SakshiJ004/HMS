const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country',
        required: [true, 'Country is required'],
    },
    state: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'State',
        required: [true, 'State is required'],
    },
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HospitalSetup',
    },
    name: {
        type: String,
        required: [true, 'City name is required'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active',
    },
}, { timestamps: true });

citySchema.index({ state: 1, name: 1 }, { unique: true });

module.exports = mongoose.model('City', citySchema);