const mongoose = require('mongoose');
const User = require('./User');

// ✅ PATIENT-SPECIFIC SCHEMA
const patientSchema = new mongoose.Schema({
    primaryDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
    },
    languageSpoken: [String],
});

// ✅ Create Patient discriminator
const Patient = User.discriminator('patient', patientSchema);

module.exports = Patient;