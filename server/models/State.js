const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
    country: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Country',
        required: [true, 'Country is required'],
    },
    name: {
        type: String,
        required: [true, 'State name is required'],
        trim: true,
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active',
    },
}, { timestamps: true });

// Same state name allowed in different countries
stateSchema.index({ country: 1, name: 1 }, { unique: true });

module.exports = mongoose.model('State', stateSchema);