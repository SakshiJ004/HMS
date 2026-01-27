const mongoose = require('mongoose');
const User = require('./User');

// ✅ DOCTOR-SPECIFIC SCHEMA
const doctorSchema = new mongoose.Schema({
    username: String,
    yearOfExperience: Number,
    department: String,
    designation: String,
    medicalLicenseNumber: String,
    languageSpoken: [String],
    bio: String,
    featureOnWebsite: {
        type: Boolean,
        default: false,
    },
    appointmentType: String,
    acceptBookingsDays: {
        type: Number,
        default: 0,
    },
    appointmentDuration: {
        type: Number,
        default: 30,
    },
    consultationCharge: {
        type: Number,
        default: 0,
    },
    maxBookingsPerSlot: {
        type: Number,
        default: 1,
    },
    displayOnBookingPage: {
        type: Boolean,
        default: false,
    },
    education: [{
        degree: String,
        institution: String,
        year: Number,
    }],
    awards: [{
        title: String,
        year: Number,
    }],
    certifications: [{
        name: String,
        issuedBy: String,
        year: Number,
    }],
    schedules: [{
        day: String,
        timeSlots: [{
            startTime: String,
            endTime: String,
        }],
    }],
});

// ✅ Create Doctor discriminator
const Doctor = User.discriminator('doctor', doctorSchema);

module.exports = Doctor;