const mongoose = require('mongoose');
const User = require('./User');

const patientSchema = new mongoose.Schema({
    primaryDoctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Primary doctor is required'],
    },
});

// ✅ Patient Discriminator - shares 'users' collection with User/Doctor/Admin
const Patient = User.discriminator('patient', patientSchema);

module.exports = Patient;