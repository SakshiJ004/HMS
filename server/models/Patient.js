const mongoose = require('mongoose');
const User = require('../models/User');
const Doctor = require('../models/Doctor');
// ✅ PATIENT-SPECIFIC SCHEMA
const patientSchema = new mongoose.Schema({
    primaryDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'doctor',
    },
    languageSpoken: [String],
});

// ✅ Create Patient discriminator
const Patient = User.discriminator('patient', patientSchema);

module.exports = Patient;
